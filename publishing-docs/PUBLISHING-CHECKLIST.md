# Publishing Checklist

Quick reference for publishing Rename Variables to Figma Community.

## Pre-Publishing Tasks

### Code & Build
- [ ] Run `npm run build` to compile TypeScript
- [ ] Test plugin thoroughly in Figma Design file
- [ ] Test in both light and dark mode
- [ ] Verify all features work:
  - [ ] Search/replace
  - [ ] Regex mode
  - [ ] Case-sensitive mode
  - [ ] Whole word mode
  - [ ] Variable type filtering
  - [ ] Collection filtering
  - [ ] Collision detection
  - [ ] Keyboard shortcuts
  - [ ] Undo functionality

### Documentation
- [ ] Review README.md
- [ ] Review DESCRIPTION.txt
- [ ] Review VERSION-NOTES.txt
- [ ] Update any outdated information

### Assets

#### Screenshots (Required)
- [ ] `screenshots/01-main-interface.png` (1600×1200px+)
- [ ] `screenshots/02-preview-results.png` (1600×1200px+)
- [ ] `screenshots/03-advanced-options.png` (1600×1200px+)
- [ ] `screenshots/04-collision-warning.png` (1600×1200px+)
- [ ] `screenshots/05-success-results.png` (1600×1200px+)
- [ ] `screenshots/06-keyboard-shortcuts.png` (Optional, 1600×1200px+)

#### Cover Image (Required)
- [ ] `cover-image.png` (exactly 1920×960px)
- [ ] File size under 5MB
- [ ] PNG format
- [ ] Readable at thumbnail size

### Content Preparation
- [ ] Copy description from DESCRIPTION.txt
- [ ] Copy version notes from VERSION-NOTES.txt
- [ ] Prepare tags list (see below)
- [ ] Prepare support links (GitHub, docs, etc.)

## Publishing Steps

### In Figma Desktop App
1. [ ] Open Figma Desktop App
2. [ ] Go to Menu → Plugins → Development → Manage plugins
3. [ ] Find "Rename Variables" in the list
4. [ ] Click "•••" menu → "Publish new release"

### Fill Out Publishing Form
5. [ ] Upload cover image (`cover-image.png`)
6. [ ] Upload screenshots (all from `screenshots/` folder)
7. [ ] Paste plugin description from DESCRIPTION.txt
8. [ ] Add tags (see Tags section below)
9. [ ] Paste version notes from VERSION-NOTES.txt
10. [ ] Add support/documentation links:
    - [ ] Documentation URL (GitHub README or docs site)
    - [ ] Source code URL (GitHub repo)
    - [ ] Support URL (GitHub Issues or email)
11. [ ] Review everything carefully
12. [ ] Click "Submit for review"

## Tags to Use

Select 5-10 tags from these options:
- [ ] variables
- [ ] rename
- [ ] bulk-edit
- [ ] search-replace
- [ ] regex
- [ ] design-tokens
- [ ] productivity
- [ ] workflow
- [ ] utilities
- [ ] developer-tools

## After Submission

- [ ] Wait for email notification (2-5 business days)
- [ ] If approved:
  - [ ] Share on social media
  - [ ] Update README with Community link
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
