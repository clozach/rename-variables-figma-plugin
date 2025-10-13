# Screenshot Capture Guide

Follow these steps to capture all required screenshots for Figma Community publishing.

## Setup Before Screenshots

1. **Create a test Figma file** with variables:
   - Create 2-3 variable collections (e.g., "Colors", "Spacing", "Typography")
   - Add 10-15 variables with names like:
     - `color-primary`, `color-secondary`, `color-accent`
     - `spacing-small`, `spacing-medium`, `spacing-large`
     - `font-size-body`, `font-size-heading`
     - `border-radius-sm`, `border-radius-md`

2. **Build the plugin**:
   ```bash
   npm run build
   ```

3. **Import plugin in Figma**:
   - Plugins → Development → Import plugin from manifest
   - Select your `manifest.json`

4. **Create screenshots directory**:
   ```bash
   mkdir -p screenshots
   ```

## Screenshot 1: Main Interface (PRIMARY)

**File**: `screenshots/01-main-interface.png`
**Size**: 1600×1200px minimum

### Steps:
1. Open your test file with variables
2. Run Plugins → Development → Rename Variables
3. In the plugin:
   - Search field: `color`
   - Replace field: `colour`
   - Leave checkboxes unchecked
4. Wait for preview to populate (should show 3-5 variables)
5. **Capture**: Take screenshot of entire plugin window
   - Include the beautiful gradient background
   - Show the preview list with variable names
   - Make sure "Apply" button is visible

### What to show:
- ✅ Plugin title "Rename Variables: Search & Replace"
- ✅ Search field with "color"
- ✅ Replace field with "colour"
- ✅ Preview list showing transformations
- ✅ Gradient background visible
- ✅ Clean, uncluttered interface

---

## Screenshot 2: Preview Results

**File**: `screenshots/02-preview-results.png`
**Size**: 1600×1200px minimum

### Steps:
1. Keep plugin open from Screenshot 1
2. Modify to show more results:
   - Search: `spacing`
   - Replace: `space`
3. Wait for preview to update
4. **Capture**: Focus on the preview list area

### What to show:
- ✅ Multiple variables in preview (5-8 items)
- ✅ Old name → New name transformations
- ✅ "No collision" status on items
- ✅ Scrollable list if possible

---

## Screenshot 3: Advanced Options

**File**: `screenshots/03-advanced-options.png`
**Size**: 1600×1200px minimum

### Steps:
1. Keep plugin open
2. Click "Advanced ▷" to expand section
3. Check some options:
   - ✅ Regex
   - ✅ Case-sensitive
   - Uncheck one variable type (e.g., BOOLEAN)
4. Scroll to show collections list
5. **Capture**: Full plugin with advanced section expanded

### What to show:
- ✅ Advanced section expanded (▽ icon)
- ✅ Variable types checkboxes (some checked, some unchecked)
- ✅ Collections list with multiple collections
- ✅ "Select None" / "Select All" toggle visible
- ✅ Regex, Case-sensitive, Whole word options
- ✅ Keyboard shortcut hints (⌥⌘R, ⌥⌘C, ⌥⌘W, ⌥⌘A)

---

## Screenshot 4: Collision Warning

**File**: `screenshots/04-collision-warning.png`
**Size**: 1600×1200px minimum

### Steps:
1. To create a collision scenario:
   - Make sure you have variables: `color-primary` and `primary`
   - Search: `color-`
   - Replace: `` (empty)
   - This will try to rename `color-primary` → `primary` (collision!)
2. Wait for preview
3. **Capture**: Show preview with collision warning

### What to show:
- ✅ Preview list with at least one collision
- ✅ Red "⚠" warning icon
- ✅ "Name already exists in this collection" message
- ✅ Mix of normal items and collision items

---

## Screenshot 5: Success Results

**File**: `screenshots/05-success-results.png`
**Size**: 1600×1200px minimum

### Steps:
1. Set up a safe rename:
   - Search: `color`
   - Replace: `colour`
   - Uncheck Regex, Case-sensitive, Whole word
2. Click "Apply" button (or press ⌘↩)
3. Wait for results to appear
4. **Capture**: Show results list with success statuses

### What to show:
- ✅ Results list with green "RENAMED" statuses
- ✅ If possible, include one "SKIPPED" (orange) status
- ✅ Old name → New name with status labels
- ✅ Figma notification at bottom: "Renamed: X • Skipped/Errors: Y"

**Note**: You might need to capture the Figma notification separately and composite it, or use screen recording and extract frame.

---

## Screenshot 6: Keyboard Shortcuts (OPTIONAL)

**File**: `screenshots/06-keyboard-shortcuts.png`
**Size**: 1600×1200px minimum

### Steps:
1. Open plugin fresh
2. Hover over elements to show shortcuts
3. **Capture**: Full interface showing all shortcut hints

### What to show:
- ✅ ⌘↩ on Apply button
- ✅ ⌥⌘R on Regex checkbox
- ✅ ⌥⌘C on Case-sensitive
- ✅ ⌥⌘W on Whole word
- ✅ ⌥⌘A on Advanced toggle

---

## Screenshot Tips

### Quality:
- Use Figma's built-in screenshot tool (Cmd+Shift+4 on Mac)
- Capture at 2x resolution if possible
- Save as PNG for best quality
- Ensure text is crisp and readable

### Composition:
- Center the plugin window
- Include some Figma canvas in background (optional)
- Ensure good contrast and visibility
- No personal information visible

### Lighting (for dark mode):
- If capturing dark mode, ensure screenshots are still clear
- Test visibility on both light and dark backgrounds

### File Naming:
```
01-main-interface.png       (Required - Primary)
02-preview-results.png      (Required)
03-advanced-options.png     (Required)
04-collision-warning.png    (Required)
05-success-results.png      (Required)
06-keyboard-shortcuts.png   (Optional)
```

## After Capturing

1. **Review all screenshots**:
   ```bash
   ls -la screenshots/
   ```

2. **Check file sizes**:
   - Each should be 1600×1200px minimum
   - File size typically 200KB - 2MB per screenshot

3. **Verify quality**:
   - Open each screenshot
   - Zoom to 100% and check text clarity
   - Ensure colors look accurate
   - No artifacts or compression issues

4. **Rename if needed**:
   ```bash
   cd screenshots
   # Rename files to match convention
   ```

## Quick Checklist

Before publishing, verify you have:

- [ ] `01-main-interface.png` - Main UI with search/replace
- [ ] `02-preview-results.png` - Preview list with multiple items
- [ ] `03-advanced-options.png` - Advanced section expanded
- [ ] `04-collision-warning.png` - Collision detection shown
- [ ] `05-success-results.png` - Success results after Apply
- [ ] `06-keyboard-shortcuts.png` - (Optional) Shortcuts visible
- [ ] All screenshots are high quality (1600×1200px+)
- [ ] All screenshots are PNG format
- [ ] No personal/sensitive information visible
- [ ] Text is readable and crisp

## Next Steps

Once screenshots are ready:
1. Create cover image (1920×960px)
2. Review DESCRIPTION.txt
3. Review VERSION-NOTES.txt
4. Follow publishing steps in PUBLISHING.md
