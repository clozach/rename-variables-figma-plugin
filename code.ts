// code.ts
type VariableType = 'COLOR' | 'FLOAT' | 'STRING' | 'BOOLEAN'

type SearchParams = {
  search: string
  replace: string
  regex: boolean
  caseSensitive: boolean
  wholeWord: boolean
  collections: string[]
  variableTypes: Array<VariableType>
  dryRun: boolean
}

type VariableSummary = {
  id: string
  name: string
  collectionId: string
  collectionName: string
  type: VariableType
}

type PreviewItem = {
  id: string
  collectionId: string
  oldName: string
  newName: string
  collision: boolean
  reason?: string
}

figma.showUI(__html__, { width: 600, height: 640, themeColors: true })

figma.ui.onmessage = async (msg) => {
  if (!figma.variables || !figma.variables.getLocalVariableCollections) {
    figma.ui.postMessage({ type: 'ERROR', message: 'Variables API unavailable. Open in a Figma Design file.' })
    figma.notify('Variables API unavailable. Use a Design file.')
    return
  }

  if (msg.type === 'CLOSE') {
    figma.closePlugin()
    return
  }

  if (msg.type === 'GET_COLLECTIONS') {
    const cols = figma.variables.getLocalVariableCollections().map(c => ({ id: c.id, name: c.name }))
    figma.ui.postMessage({ type: 'COLLECTIONS', collections: cols })
    return
  }

  if (msg.type === 'RUN') {
    const params: SearchParams = msg.params
    const search = (params.search ?? '').trim()
    const replace = (params.replace ?? '')
    if (!search) {
      figma.ui.postMessage({ type: 'PREVIEW', items: [] })
      figma.notify('Enter a Search value.')
      return
    }

    const all = getAllVariables(params.variableTypes)
    const scoped = filterCollections(all, params.collections)
    if (scoped.length === 0) {
      figma.ui.postMessage({ type: 'PREVIEW', items: [] })
      figma.notify('No variables found for selected collections/types.')
      return
    }

    const matcher = buildMatcher({
      search,
      replace,
      regex: !!params.regex,
      caseSensitive: !!params.caseSensitive,
      wholeWord: !!params.wholeWord
    })

    const preview: PreviewItem[] = scoped
      .map(v => {
        const res = matcher(v.name)
        if (!res.match || !res.newName || res.newName === v.name) return null
        return {
          id: v.id,
          collectionId: v.collectionId,
          oldName: v.name,
          newName: res.newName,
          collision: false
        } as PreviewItem
      })
      .filter(Boolean) as PreviewItem[]

    const withCollisions = detectCollisions(withinSameCollectionNames(scoped), preview)

    if (params.dryRun) {
      figma.ui.postMessage({ type: 'PREVIEW', items: withCollisions })
      return
    }

    const results: { id: string; oldName: string; newName: string; status: 'renamed' | 'skipped' | 'error'; reason?: string }[] = []
    for (const p of withCollisions) {
      if (p.collision) {
        results.push({ id: p.id, oldName: p.oldName, newName: p.newName, status: 'skipped', reason: p.reason })
        continue
      }
      try {
        const variable = figma.variables.getVariableById(p.id)
        if (!variable) {
          results.push({ id: p.id, oldName: p.oldName, newName: p.newName, status: 'error', reason: 'Variable not found' })
          continue
        }
        variable.name = p.newName
        results.push({ id: p.id, oldName: p.oldName, newName: p.newName, status: 'renamed' })
      } catch (err) {
        results.push({ id: p.id, oldName: p.oldName, newName: p.newName, status: 'error', reason: String(err) })
      }
    }

    figma.ui.postMessage({ type: 'RESULTS', results })
    figma.notify(`Renamed: ${results.filter(r => r.status === 'renamed').length} • Skipped/Errors: ${results.filter(r => r.status !== 'renamed').length}`)
  }
}

// Helpers

function getAllVariables(types: Array<VariableType> | undefined): VariableSummary[] {
  const result: VariableSummary[] = []
  const collections = figma.variables.getLocalVariableCollections()
  const colById = new Map(collections.map(c => [c.id, c]))

  const allVars = figma.variables.getLocalVariables()
  for (const v of allVars) {
    const col = colById.get(v.variableCollectionId)
    if (!col) continue
    const t = (v as any).resolvedType as VariableType | undefined
    result.push({
      id: v.id,
      name: v.name,
      collectionId: col.id,
      collectionName: col.name,
      type: t ?? 'STRING'
    })
  }

  if (types && types.length > 0) {
    const allowed = new Set(types)
    return result.filter(v => allowed.has(v.type))
  }

  return result
}

function filterCollections(vars: VariableSummary[], ids: string[]): VariableSummary[] {
  if (!ids || ids.length === 0) return vars
  const allow = new Set(ids)
  return vars.filter(v => allow.has(v.collectionId))
}

function buildMatcher(params: { search: string; replace: string; regex: boolean; caseSensitive: boolean; wholeWord: boolean }): (name: string) => { match: boolean; newName?: string } {
  const { search, replace, regex, caseSensitive, wholeWord } = params

  if (regex) {
    const flags = caseSensitive ? '' : 'i'
    const pattern = wholeWord ? `\\b(?:${search})\\b` : search
    let re: RegExp
    try {
      re = new RegExp(pattern, flags)
    } catch {
      return () => ({ match: false })
    }
    return (name: string) => {
      if (!re.test(name)) return { match: false }
      const newName = name.replace(re, replace)
      return { match: true, newName }
    }
  } else {
    const src = caseSensitive ? search : search.toLowerCase()
    const rep = replace
    return (name: string) => {
      const hay = caseSensitive ? name : name.toLowerCase()
      if (wholeWord) {
        // Use word boundary regex for whole word matching
        const pattern = `\\b${escapeRegExp(search)}\\b`
        const re = new RegExp(pattern, caseSensitive ? 'g' : 'gi')
        if (!re.test(name)) return { match: false }
        const newName = name.replace(re, replace)
        return { match: true, newName }
      } else {
        if (!hay.includes(src)) return { match: false }
        const re = new RegExp(escapeRegExp(search), caseSensitive ? 'g' : 'gi')
        const newName = name.replace(re, rep)
        return { match: true, newName }
      }
    }
  }
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function withinSameCollectionNames(vars: VariableSummary[]): Map<string, Set<string>> {
  const byCollection = new Map<string, Set<string>>()
  for (const v of vars) {
    if (!byCollection.has(v.collectionId)) byCollection.set(v.collectionId, new Set())
    byCollection.get(v.collectionId)!.add(v.name)
  }
  return byCollection
}

function detectCollisions(existingByCollection: Map<string, Set<string>>, preview: PreviewItem[]): PreviewItem[] {
  return preview.map(p => {
    const set = existingByCollection.get(p.collectionId)
    const collision = !!set?.has(p.newName)
    return {
      ...p,
      collision,
      reason: collision ? 'Name already exists in this collection' : undefined
    }
  })
}
