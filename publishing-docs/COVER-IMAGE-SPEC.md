# Cover Image Specification

Create a cover image for Figma Community publishing.

## Requirements

- **Dimensions**: 1920×960px (exactly)
- **Format**: PNG or JPG
- **File name**: `cover-image.png`
- **File size**: Under 5MB (recommended under 1MB)
- **Color mode**: RGB

## Design Guidelines

### Layout Template

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  [Background: Gradient #f4e4c1 → #d4a574]                     │
│                                                                │
│                                                                │
│              🔄  Rename Variables                              │
│                                                                │
│        Bulk rename Figma variables with search/replace,       │
│              regex support & live preview                      │
│                                                                │
│                                                                │
│         [UI Preview or Before/After Example]                   │
│                                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Color Palette

**Background Gradient**:
- Start: `#f4e4c1` (French Vanilla)
- End: `#d4a574` (Warm tan)
- Direction: 135deg diagonal

**Accent Color**: `#c49a6c` (Warm brown)

**Text Colors**:
- Primary heading: `#1a1a1a` (near black)
- Secondary text: `#4b5563` (gray)

**Button/Highlight**: `#6b4423` (Dark chocolate brown)

### Typography

**Title** ("Rename Variables"):
- Font: Bold, sans-serif (e.g., Inter Bold, SF Pro Display Bold)
- Size: 72-96px
- Color: `#1a1a1a`
- Letter spacing: -1px

**Subtitle**:
- Font: Medium, sans-serif
- Size: 32-40px
- Color: `#4b5563`
- Letter spacing: 0px

### Content Options

Choose ONE of these approaches:

#### Option A: UI Preview
- Show a simplified version of the plugin interface
- Include search/replace fields
- Show 2-3 preview items
- Keep it clean and readable at thumbnail size

#### Option B: Before/After
```
Before:              After:
color-primary   →    colour-primary
color-secondary →    colour-secondary
color-accent    →    colour-accent
```

#### Option C: Feature Highlights
- Icon + "Live Preview"
- Icon + "Regex Support"
- Icon + "Collision Detection"
- Icon + "Keyboard Shortcuts"

## Design Tools

### Figma (Recommended)
1. Create new Figma file
2. Add frame: 1920×960px
3. Add gradient background
4. Add text and elements
5. Export as PNG (2x for quality)

### Sketch
1. Create artboard: 1920×960px
2. Design cover
3. Export as PNG @2x

### Photoshop
1. New document: 1920×960px, 72 DPI, RGB
2. Design cover
3. Save as PNG

### Canva
1. Custom size: 1920×960px
2. Design cover
3. Download as PNG

### Figma Template (Copy-Paste)

```
Frame: 1920×960px

Background:
- Rectangle: 1920×960px
- Fill: Linear gradient
  - Color 1: #f4e4c1 (top-left)
  - Color 2: #d4a574 (bottom-right)
  - Angle: 135°

Title:
- Text: "🔄 Rename Variables"
- Font: Inter Bold / SF Pro Display Bold
- Size: 84px
- Color: #1a1a1a
- Position: Center, Y: 280

Subtitle:
- Text: "Bulk rename Figma variables with search/replace, regex & live preview"
- Font: Inter Medium / SF Pro Display Medium
- Size: 36px
- Color: #4b5563
- Position: Center, Y: 380
- Max width: 1400px

UI Preview (Optional):
- Simplified plugin mockup
- Position: Center, Y: 520
- Max width: 1200px
- Add subtle shadow for depth
```

## Quick Mockup Elements

If including UI preview, show:

### Search Field
```
┌─────────────────────────────────┐
│ Find: color                     │
└─────────────────────────────────┘
```

### Replace Field
```
┌─────────────────────────────────┐
│ Replace: colour                 │
└─────────────────────────────────┘
```

### Preview Items (2-3 items)
```
┌─────────────────────────────────────────┐
│ color-primary → colour-primary          │
│ No collision                            │
├─────────────────────────────────────────┤
│ color-secondary → colour-secondary      │
│ No collision                            │
└─────────────────────────────────────────┘
```

## Visual Hierarchy

1. **Most prominent**: Plugin name "Rename Variables"
2. **Secondary**: Subtitle/description
3. **Tertiary**: UI preview or feature list
4. **Accent**: Emoji or icon (🔄)

## Do's and Don'ts

### ✅ Do:
- Use high contrast for readability
- Keep text large enough for thumbnails
- Use the brand colors consistently
- Test at small sizes (200×100px thumbnail)
- Keep design clean and uncluttered
- Use professional typography
- Align elements properly

### ❌ Don't:
- Use too many colors
- Make text too small
- Overcrowd with information
- Use low-quality images
- Include personal information
- Use copyrighted assets
- Make it too busy or complex

## Testing

Before finalizing:

1. **View at thumbnail size**: Resize to 200×100px
   - Is text still readable?
   - Is the design recognizable?

2. **Check on different backgrounds**:
   - Light mode
   - Dark mode
   - Figma Community page

3. **Verify dimensions**: Exactly 1920×960px

4. **Check file size**: Under 5MB (ideally under 1MB)

## Export Settings

### Figma:
- Select frame
- Export → PNG
- 2x resolution
- Save as `cover-image.png`

### Photoshop:
- File → Export → Export As
- Format: PNG
- Quality: Maximum
- Save as `cover-image.png`

### Sketch:
- Select artboard
- Export → PNG
- 2x resolution
- Save as `cover-image.png`

## Alternative: AI-Generated

If using AI tools (Midjourney, DALL-E, etc.):

**Prompt example**:
```
"Professional Figma plugin cover image, 1920x960px, gradient background from french vanilla (#f4e4c1) to warm tan (#d4a574), large bold title 'Rename Variables', subtitle about bulk renaming with search and replace, modern UI design, clean and minimal, warm earth tones, professional typography"
```

Then add text overlays in Figma/Photoshop.

## Final Checklist

Before saving final version:

- [ ] Dimensions are exactly 1920×960px
- [ ] File format is PNG
- [ ] File size is under 5MB
- [ ] Text is readable at thumbnail size
- [ ] Colors match brand palette
- [ ] No spelling errors
- [ ] No personal/sensitive information
- [ ] Professional and polished appearance
- [ ] Saved as `cover-image.png`

## Example File Structure

```
/Users/c/Documents/1-Due/Figma Plugin/Rename Variables/
├── cover-image.png          ← Final cover image
├── cover-image-draft.png    ← Draft version (optional)
└── cover-image-source.fig   ← Figma source (optional)
```

## Need Help?

If you need design assistance:
1. Use Figma's built-in templates
2. Browse Figma Community for cover image inspiration
3. Use Canva's pre-made templates
4. Hire a designer on Fiverr/Upwork
5. Ask in Figma Community forums

## Resources

- [Figma Plugin Publishing Guide](https://help.figma.com/hc/en-us/articles/360042786373)
- [Cover Image Best Practices](https://help.figma.com/hc/en-us/articles/360039958914)
- [Figma Community Guidelines](https://help.figma.com/hc/en-us/articles/360038743434)
