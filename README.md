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

## Scripts
```json
"scripts": {
  "build": "tsc",
  "watch": "tsc --watch",
  "postinstall": "tsc"
}
```

## tsconfig
```json
{
  "compilerOptions": {
    "target": "ES2019",
    "module": "ESNext",
    "moduleResolution": "Node",
    "lib": ["ES2019", "DOM"],
    "strict": true,
    "outDir": ".",
    "skipLibCheck": true
  },
  "include": ["code.ts"]
}
```

## Manifest
Point main to the compiled JS:
```json
{
  "name": "Rename Variables",
  "id": "1559359518702965550",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html",
  "editorType": ["figma"]
}
```

## Run
- In Figma: Plugins → Development → Import plugin from manifest… (select manifest.json).
- Open a Design file with variables.
- Plugins → Development → Rename Variables.
- Use Search/Replace; choose types and collections; Preview; then Apply.
- Undo works via Cmd/Ctrl+Z.

## Debug
- Plugins → Development → Show/Hide Console.
- UI logs payloads; main logs enumeration and results.
- If you see “Variables API unavailable,” you’re not in a Design file.
- Permissions-policy warnings (camera/mic/clipboard/display-capture) are benign in Figma’s WebView.

## Notes
- Variable bindings reference IDs, so renaming names won’t break designs.
- Names must be unique per collection; collisions are skipped with a reason.