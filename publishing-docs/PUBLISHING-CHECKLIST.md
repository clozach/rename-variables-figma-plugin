# Publishing Checklist

Quick reference for publishing Rename Variables to Figma Community.

## Pre-Publishing Tasks

### Code & Build
- [x] Run `npm run build` to compile TypeScript
- [x] Test plugin thoroughly in Figma Design file
- [x] Test in both light and dark mode
- [ ] Verify all features work:
  - [x] Search/replace
  - [x] Regex mode
  - [x] Case-sensitive mode
  - [x] Whole word mode
  - [x] Variable type filtering
  - [x] Collection filtering
  - [x] Collision detection
  - [x] Keyboard shortcuts
  - [x] Undo functionality (not really a feature…Figma already supports undoing variable name changes)

### Documentation
- [x] Review README.md
- [x] Review DESCRIPTION.txt

### Assets

#### Screenshots (Required)
- [x] `screenshots/01-main-interface.png` (1600×1200px+)
- [x] `screenshots/02-preview-results.png` (1600×1200px+)
- [x] `screenshots/03-advanced-options.png` (1600×1200px+)
- [x] `screenshots/04-collision-warning.png` (1600×1200px+)
- [x] `screenshots/05-success-results.png` (1600×1200px+)
- [x] `screenshots/06-keyboard-shortcuts.png` (Optional, 1600×1200px+)

#### Cover Image (Required)
- [x] `cover-image.png` (exactly 1920×960px)
- [x] File size under 5MB
- [x] PNG format
- [x] Readable at thumbnail size

### Content Preparation
- [x] Copy description from DESCRIPTION.txt
- [-] Copy version notes from VERSION-NOTES.txt [No version notes section in the publishing wizard, that I could see.]
- [x] Prepare tags list (see below)
- [x] Prepare support links (GitHub, docs, etc.)

## Publishing Steps

### In Figma Desktop App
1. [x] Open Figma Desktop App
2. [x] Go to Menu → Plugins → Development → Manage plugins
3. [x] Find "Rename Variables" in the list
4. [x] Click "•••" menu → "Publish new release"

### Fill Out Publishing Form
5. [x] Upload cover image (`cover-image.png`)
6. [x] Upload screenshots (all from `screenshots/` folder)
7. [x] Paste plugin description from DESCRIPTION.txt
8. [x] Add tags (see Tags section below)
9. [x] Paste version notes from VERSION-NOTES.txt
10. [x] Add support/documentation links:
    - [-] Documentation URL (GitHub README or docs site)
    - [•] Source code URL (GitHub repo)
    - [•] Support URL (GitHub Issues or email)
11. [x] Review everything carefully
12. [x] Click "Submit for review"

## Tags to Use

Select 5-10 tags from these options:
- [•] variables
- [x] rename
- [•] bulk edit
- [x] search-replace
- [•] regex
- [•] regular expressions
- [•] design tokens
- [x] productivity
- [x] workflow
- [x] utilities
- [x] developer tools

## After Submission

- [x] Wait for email notification (2-5 business days)
- [x] If approved:
  - [ ] Share on social media
  - [x] Update README with Community link
  - [ ] Monitor user feedback
- [ ] If changes requested:
  - [ ] Make requested changes
  - [ ] Resubmit

## Post-Publishing

### Marketing (Optional)
- [ ] Tweet about launch
- [ ] Post on LinkedIn
- [ ] Share in Figma Community forums
- [ ] Share in design/dev communities

### Maintenance
- [ ] Monitor user comments
- [ ] Track feature requests
- [ ] Plan future updates
- [ ] Respond to support questions

## Quick File Check

Run these commands to verify everything is ready:

```bash
# Check that build is up to date
npm run build

# Verify screenshots exist
ls -la screenshots/

# Check cover image exists and size
ls -lh cover-image.png

# Verify all documentation files
ls -la *.md *.txt
```

Expected files:
```
✓ code.js (compiled from code.ts)
✓ manifest.json
✓ ui.html
✓ README.md
✓ PUBLISHING.md
✓ SCREENSHOT-GUIDE.md
✓ COVER-IMAGE-SPEC.md
✓ DESCRIPTION.txt
✓ VERSION-NOTES.txt
✓ cover-image.png (1920×960px)
✓ screenshots/01-main-interface.png
✓ screenshots/02-preview-results.png
✓ screenshots/03-advanced-options.png
✓ screenshots/04-collision-warning.png
✓ screenshots/05-success-results.png
```

## Common Issues

### "Can't find plugin"
- Make sure you're in Figma Desktop (not browser)
- Re-import manifest.json
- Restart Figma

### "Variables API unavailable"
- Must use Design file, not FigJam
- Make sure file has variables

### "Cover image wrong size"
- Must be exactly 1920×960px
- Use image editor to resize

### "Screenshot too small"
- Minimum 1600×1200px recommended
- Capture at higher resolution

## Support Resources

- [Figma Plugin Docs](https://www.figma.com/plugin-docs/)
- [Publishing Guide](https://help.figma.com/hc/en-us/articles/360042786373)
- [Community Guidelines](https://help.figma.com/hc/en-us/articles/360038743434)
- [Review Process](https://help.figma.com/hc/en-us/articles/360042293394)

## Timeline

- **Preparation**: 2-4 hours (screenshots, cover image, testing)
- **Submission**: 15-30 minutes
- **Review**: 2-5 business days
- **Approval**: Immediate publication after approval

## Notes

- First submission might take longer
- Be patient with review process
- Respond promptly to reviewer feedback
- Keep plugin updated after launch

---

**Last Updated**: Initial version for v1.0.0 release
