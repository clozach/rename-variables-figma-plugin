# Publishing Rename Variables to Figma Community

## Pre-Publishing Checklist

- [ ] Plugin tested thoroughly in Figma Design files
- [ ] All screenshots captured (see below)
- [ ] Cover image created (1920×960px)
- [ ] Description written
- [ ] Version notes prepared
- [ ] README updated with usage examples

## Screenshot Requirements

### Required Screenshots (save to `/screenshots/` directory):

1. **`01-main-interface.png`** (Primary screenshot)
   - Show the plugin UI with search/replace fields filled in
   - Example: Search="color" Replace="colour"
   - Show preview list with 3-5 variables
   - Make sure the beautiful gradient background is visible
   - **Recommended size**: 1600×1200px or larger

2. **`02-preview-results.png`**
   - Show the preview list with multiple variables
   - Include at least one collision warning (⚠)
   - Show different variable types (COLOR, FLOAT, STRING, BOOLEAN)
   - **Recommended size**: 1600×1200px

3. **`03-advanced-options.png`**
   - Click "Advanced options ▷" to expand
   - Show the variable types checkboxes
   - Show the collections list with multiple collections
   - Show regex, case-sensitive, whole word options checked
   - **Recommended size**: 1600×1200px

4. **`04-success-results.png`**
   - After clicking Apply, show the results
   - Display mix of "RENAMED" (green), "SKIPPED" (orange) statuses
   - Show the Figma notification at bottom: "Renamed: X • Skipped/Errors: Y"
   - **Recommended size**: 1600×1200px

5. **`05-keyboard-shortcuts.png`** (Optional but recommended)
   - Show the UI with keyboard shortcut hints visible
   - Highlight: ⌘↩ on Apply button, ⌥⌘R, ⌥⌘C, ⌥⌘W shortcuts
   - **Recommended size**: 1600×1200px

## Cover Image Specifications

**File**: `/cover-image.png`
**Size**: 1920×960px
**Format**: PNG or JPG

### Design Suggestions:
- Use the plugin's gradient background (French Vanilla → chocolaty brown)
- Large, bold title: "Rename Variables"
- Subtitle: "Bulk rename with search/replace, regex, and live preview"
- Show a simplified mockup of the UI or before/after example
- Use the accent color (#c49a6c) for highlights
- Keep text readable and professional

### Quick Cover Image Template:
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Gradient background: #f4e4c1 → #d4a574]      │
│                                                 │
│         🔄 Rename Variables                     │
│                                                 │
│    Bulk rename Figma variables with            │
│    search/replace, regex & live preview        │
│                                                 │
│    [Small UI preview or before/after example]  │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Plugin Description (for Figma Community)

### Title
**Rename Variables**

### Tagline (Short Description)
Bulk rename Figma variables with search/replace, regex support, collision detection, and live preview.

### Full Description
```
Rename Variables is a powerful plugin for bulk renaming Figma variables using search and replace patterns.

✨ KEY FEATURES

• Live Preview — See changes before applying
• Regex Support — Use regular expressions for complex patterns
• Collision Detection — Warns about duplicate names
• Filter by Type — Select COLOR, FLOAT, STRING, or BOOLEAN variables
• Filter by Collection — Choose specific variable collections
• Keyboard Shortcuts — Fast workflow with ⌘↩, ⌥⌘R, ⌥⌘C, ⌥⌘W
• Undo Support — Full Cmd/Ctrl+Z support for all changes

🎯 USE CASES

• Rename color variables from "color-" to "colour-"
• Add prefixes/suffixes to variable groups
• Fix naming conventions across collections
• Clean up imported variable names
• Standardize variable naming patterns

⚡ HOW TO USE

1. Open a Figma Design file with variables
2. Run Plugins → Rename Variables
3. Enter search and replace patterns
4. Toggle options: Regex, Case-sensitive, Whole word
5. Expand Advanced to filter by type and collection
6. Preview shows all changes with collision warnings
7. Click Apply (or press ⌘↩) to rename

🎨 BEAUTIFUL UI

Modern, responsive interface with:
• French Vanilla gradient theme (light mode)
• Chocolaty earth tones (dark mode)
• Smooth animations and transitions
• Clear visual feedback

⚠️ IMPORTANT

• Variable names must be unique within each collection
• Collisions are automatically skipped with reasons
• Changes can be undone with Cmd/Ctrl+Z
• Only works in Figma Design files (not FigJam)

🔒 PRIVACY

• No data collection
• All processing happens locally
• No external network requests
• Open source code available

📖 DOCUMENTATION

Full documentation and source code available at:
[Your GitHub URL or documentation link]

💡 TIPS

• Use Preview to verify changes before applying
• Start with small test renames
• Use Whole word to avoid partial matches
• Check Advanced options for precise filtering
• Keyboard shortcuts speed up workflow

Made with ❤️ for the Figma community
```

### Tags (Choose 5-10)
- variables
- rename
- bulk-edit
- search-replace
- regex
- design-tokens
- productivity
- workflow
- utilities
- developer-tools

## Version Notes (First Release)

```
Initial release of Rename Variables plugin.

Features:
• Search and replace with live preview
• Regex, case-sensitive, and whole word matching
• Filter by variable type (COLOR, FLOAT, STRING, BOOLEAN)
• Filter by variable collection
• Collision detection and warnings
• Keyboard shortcuts for fast workflow
• Beautiful, theme-aware UI
• Full undo support

Known limitations:
• Only works in Figma Design files (not FigJam)
• Requires local variable collections
```

## Publishing Steps

### 1. Prepare Assets
```bash
# Create screenshots directory
mkdir -p screenshots

# After capturing screenshots, verify they exist:
ls -la screenshots/
```

### 2. Build Plugin
```bash
npm run build
```

### 3. Test in Figma
- Import plugin from manifest
- Test all features thoroughly
- Verify in both light and dark mode
- Test with different variable types
- Test collision detection
- Test undo functionality

### 4. Publish in Figma

1. Open Figma Desktop App
2. Go to **Menu → Plugins → Development → Manage plugins**
3. Find "Rename Variables" in your list
4. Click **"•••"** menu → **"Publish new release"**
5. Fill out the form:
   - Upload cover image (`cover-image.png`)
   - Upload screenshots (from `screenshots/` folder)
   - Paste description (see above)
   - Add tags
   - Add version notes
   - Add support/documentation links (optional)
6. Review everything carefully
7. Click **"Submit for review"**

### 5. After Submission

- Figma will review your plugin (typically 2-5 business days)
- You'll receive email notification when:
  - Plugin is approved and published
  - Changes are requested
  - Plugin is rejected (with reasons)
- Once approved, your plugin appears in Figma Community

### 6. Post-Publishing

- Share on social media (Twitter, LinkedIn, etc.)
- Add Figma Community link to README
- Monitor user feedback and comments
- Plan updates based on user requests

## Support & Documentation Links

Add these to your publishing form:

- **Documentation**: Link to README or dedicated docs site
- **Source Code**: GitHub repository URL (if open source)
- **Issues/Support**: GitHub Issues or support email
- **Website**: Personal or project website (optional)

## Marketing Copy (Optional)

### Tweet/Social Media
```
🎉 Just published "Rename Variables" on @figma Community!

Bulk rename variables with:
✨ Live preview
🔍 Regex support
⚠️ Collision detection
⌨️ Keyboard shortcuts

Perfect for cleaning up design tokens & variable naming!

[Link to plugin]
```

### LinkedIn Post
```
I'm excited to share my new Figma plugin: Rename Variables!

As design systems grow, managing variable names becomes challenging. This plugin makes bulk renaming easy with:

• Search and replace with live preview
• Regular expression support for complex patterns
• Collision detection to prevent duplicates
• Filter by variable type and collection
• Beautiful, theme-aware interface

Built for designers and developers working with Figma variables and design tokens.

Try it out and let me know what you think!

[Link to plugin]
```

## Troubleshooting

### Common Issues

**"Variables API unavailable"**
- Only works in Design files, not FigJam
- Make sure you're using Figma Desktop (not browser)

**"Plugin not showing in Plugins menu"**
- Re-import manifest.json
- Restart Figma Desktop
- Check that code.js was compiled from code.ts

**"Can't publish - missing required fields"**
- Cover image must be exactly 1920×960px
- At least one screenshot required
- Description must be at least 50 characters

## Resources

- [Figma Plugin Documentation](https://www.figma.com/plugin-docs/)
- [Figma Community Guidelines](https://help.figma.com/hc/en-us/articles/360038743434)
- [Publishing Plugins Guide](https://help.figma.com/hc/en-us/articles/360042786373)
- [Plugin Review Process](https://help.figma.com/hc/en-us/articles/360042293394)
