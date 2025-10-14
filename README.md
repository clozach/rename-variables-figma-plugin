# Rename Variables — Figma Plugin

This plugin renames Figma **variables** via search/replace with preview, collision checks, and apply.

## Prereqs
- Node.js (includes npm): [https://nodejs.org/en/download](https://nodejs.org/en/download)
- Figma desktop (Design editor).

## Install
```bash
npm install
```

Optional typings (better editor intellisense):
```bash
npm install --save-dev @figma/plugin-typings
```

## Build
We compile TypeScript (code.ts) to JavaScript (code.js) and point the manifest at code.js.

- One-off:
```bash
npm run build
```

- Continuous (recommended):
```bash
npm run watch
```

## Run
- In Figma: Plugins → Development → Import plugin from manifest… (select manifest.json).
- Open a Design file with variables.
- Plugins → Development → Rename Variables.
- Use Search/Replace; choose types and collections; then Apply.

## Debug
- Plugins → Development → Show/Hide Console.
- UI logs payloads; main logs enumeration and results.
- If you see “Variables API unavailable,” you’re not in a Design file.
- Permissions-policy console warnings (camera/mic/clipboard/display-capture) are benign in Figma’s WebView.

## Notes
- Variable bindings reference IDs, so renaming names won’t break designs.
- Names must be unique per collection; collisions are skipped with a reason.

## Features

✨ **Live Preview** — See changes before applying  
🔍 **Regex Support** — Use regular expressions for complex patterns  
⚠️ **Collision Detection** — Warns about duplicate names  
🎨 **Filter by Type** — Select COLOR, FLOAT, STRING, or BOOLEAN variables  
📁 **Filter by Collection** — Choose specific variable collections  
⌨️ **Keyboard Shortcuts** — Fast workflow with ⌘↩, ⌥⌘R, ⌥⌘C, ⌥⌘W  
↩️ **Undo Support** — Full Cmd/Ctrl+Z support for all changes