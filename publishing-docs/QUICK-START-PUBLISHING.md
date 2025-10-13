# Quick Start: Publishing to Figma Community

A streamlined, step-by-step guide to get your plugin published today.

## Phase 1: Prepare (30 minutes)

### Step 1: Build the Plugin
```bash
cd "/Users/c/Documents/1-Due/Figma Plugin/Rename Variables"
npm run build
```

✅ Verify `code.js` was created

### Step 2: Test in Figma
1. Open Figma Desktop App
2. Create a test file with variables:
   - Add 2-3 collections
   - Add 10-15 variables with names like `color-primary`, `spacing-small`, etc.
3. Import plugin: Plugins → Development → Import plugin from manifest
4. Run plugin and test all features
5. Verify everything works

### Step 3: Create Screenshots Directory
```bash
mkdir -p screenshots
```

## Phase 2: Capture Screenshots (45 minutes)

Follow these exact steps for each screenshot:

### Screenshot 1: Main Interface ⭐ MOST IMPORTANT
**File**: `screenshots/01-main-interface.png`

1. Open your test file with variables
2. Run Plugins → Development → Rename Variables
3. Type in Search: `color`
4. Type in Replace: `colour`
5. Wait for preview to show 3-5 items
6. **Capture**: Full plugin window (Cmd+Shift+4, drag to select)
7. Save to `screenshots/01-main-interface.png`

### Screenshot 2: Preview Results
**File**: `screenshots/02-preview-results.png`

1. Keep plugin open
2. Change Search to: `spacing`
3. Change Replace to: `space`
4. Wait for preview to update with 5-8 items
5. **Capture**: Focus on preview list area
6. Save to `screenshots/02-preview-results.png`

### Screenshot 3: Advanced Options
**File**: `screenshots/03-advanced-options.png`

1. Click "Advanced ▷" to expand
2. Check: ✅ Regex, ✅ Case-sensitive
3. Uncheck one variable type (e.g., BOOLEAN)
4. Scroll to show collections list
5. **Capture**: Full plugin with advanced section visible
6. Save to `screenshots/03-advanced-options.png`

### Screenshot 4: Collision Warning
**File**: `screenshots/04-collision-warning.png`

1. Create collision scenario:
   - Make sure you have: `color-primary` and `primary` variables
   - Search: `color-`
   - Replace: `` (empty)
2. Preview will show collision warning ⚠
3. **Capture**: Preview with red collision warning visible
4. Save to `screenshots/04-collision-warning.png`

### Screenshot 5: Success Results
**File**: `screenshots/05-success-results.png`

1. Set up safe rename:
   - Search: `color`
   - Replace: `colour`
2. Click "Apply" button
3. Wait for results with green "RENAMED" statuses
4. **Capture**: Results list showing success
5. Save to `screenshots/05-success-results.png`

### Verify Screenshots
```bash
ls -la screenshots/
# Should show 5 PNG files, each 200KB-2MB
```

## Phase 3: Create Cover Image (60 minutes)

### Option A: Use Figma (Recommended)

1. **Create new Figma file**
2. **Add frame**: 1920×960px
3. **Add gradient background**:
   - Rectangle: 1920×960px
   - Linear gradient: #f4e4c1 → #d4a574 (135° angle)
4. **Add title text**:
   - Text: "🔄 Rename Variables"
   - Font: Inter Bold or SF Pro Display Bold
   - Size: 84px
   - Color: #1a1a1a
   - Position: Center, Y: 280
5. **Add subtitle**:
   - Text: "Bulk rename Figma variables with search/replace, regex & live preview"
   - Font: Inter Medium
   - Size: 36px
   - Color: #4b5563
   - Position: Center, Y: 380
6. **Optional**: Add simplified UI mockup at Y: 520
7. **Export**: PNG, 2x, save as `cover-image.png`

### Option B: Use Template

Copy this Figma file structure:
```
Frame: 1920×960px
├── Background (Gradient #f4e4c1 → #d4a574)
├── Title "🔄 Rename Variables" (84px, #1a1a1a)
└── Subtitle (36px, #4b5563)
```

### Verify Cover Image
```bash
ls -lh cover-image.png
# Should be 1920×960px, under 5MB
```

## Phase 4: Review Content (10 minutes)

### Check Files Exist
```bash
ls -la *.txt *.md
```

You should see:
- ✅ DESCRIPTION.txt
- ✅ VERSION-NOTES.txt
- ✅ PUBLISHING.md
- ✅ SCREENSHOT-GUIDE.md
- ✅ COVER-IMAGE-SPEC.md

### Review Description
```bash
cat DESCRIPTION.txt
```

Make any edits if needed.

### Review Version Notes
```bash
cat VERSION-NOTES.txt
```

## Phase 5: Publish (15 minutes)

### Step 1: Open Figma Desktop
1. Launch Figma Desktop App
2. Go to **Menu → Plugins → Development → Manage plugins**

### Step 2: Find Your Plugin
1. Scroll to find "Rename Variables"
2. Click the **"•••"** menu button
3. Select **"Publish new release"**

### Step 3: Upload Assets

**Cover Image**:
1. Click "Upload cover image"
2. Select `cover-image.png`
3. Verify it looks good in preview

**Screenshots**:
1. Click "Add screenshots"
2. Select all 5 screenshots from `screenshots/` folder
3. Drag to reorder (01 should be first)
4. Verify all look good

### Step 4: Fill Out Form

**Plugin Name**: (Already set to "Rename Variables")

**Tagline** (copy-paste):
```
Bulk rename Figma variables with search/replace, regex support, collision detection, and live preview.
```

**Description** (copy from DESCRIPTION.txt):
```bash
cat DESCRIPTION.txt | pbcopy  # Copies to clipboard
```
Then paste into description field.

**Tags** (select these):
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

**Version Notes** (copy from VERSION-NOTES.txt):
```bash
cat VERSION-NOTES.txt | pbcopy
```
Then paste into version notes field.

**Support Links** (optional but recommended):
- Documentation: [Your GitHub README URL]
- Source Code: [Your GitHub repo URL]
- Support: [Your GitHub Issues URL or email]

### Step 5: Review & Submit
1. **Review everything carefully**:
   - Cover image looks professional
   - Screenshots are clear and in order
   - Description has no typos
   - Tags are relevant
   - Version notes are accurate
2. **Click "Submit for review"**
3. **Confirmation**: You'll see a success message

## Phase 6: Wait for Approval (2-5 business days)

### What Happens Next
1. Figma reviews your submission
2. You'll receive an email notification:
   - ✅ **Approved**: Plugin is live!
   - ⚠️ **Changes requested**: Make edits and resubmit
   - ❌ **Rejected**: Review reasons and fix issues

### While Waiting
- Don't make changes to the plugin
- Check email daily
- Prepare social media posts (see SOCIAL-MEDIA-TEMPLATES.md)

## Phase 7: After Approval

### Immediate Actions
1. **Verify plugin is live**:
   - Search for "Rename Variables" in Figma Community
   - Test installation from Community
2. **Update README**:
   - Add Figma Community link
   - Add installation instructions
3. **Commit to git**:
   ```bash
   git add .
   git commit -m "Add publishing documentation and assets"
   git push
   ```

### Promotion (Optional)
1. Share on Twitter (use template from SOCIAL-MEDIA-TEMPLATES.md)
2. Post on LinkedIn
3. Share in relevant communities (Reddit, Discord, etc.)
4. Email your network

### Ongoing
1. Monitor user comments on Figma Community
2. Respond to questions and feedback
3. Track feature requests
4. Plan future updates

## Troubleshooting

### "Can't find plugin in Manage plugins"
- Restart Figma Desktop
- Re-import manifest.json
- Check plugin ID in manifest matches

### "Variables API unavailable" during testing
- Must use Design file, not FigJam
- Make sure file has variables
- Use Figma Desktop, not browser

### "Cover image rejected"
- Must be exactly 1920×960px
- Must be under 5MB
- Must be PNG or JPG
- Check for inappropriate content

### "Screenshots rejected"
- Increase resolution (1600×1200px minimum)
- Ensure text is readable
- Remove any personal information
- Make sure they show plugin clearly

### "Description too short"
- Minimum 50 characters
- Add more detail about features
- Include use cases

## Time Estimate

- **Preparation**: 30 minutes
- **Screenshots**: 45 minutes
- **Cover image**: 60 minutes
- **Review content**: 10 minutes
- **Publishing**: 15 minutes
- **Total**: ~2.5 hours

## Quick Checklist

Before submitting, verify:

- [ ] Plugin builds successfully (`npm run build`)
- [ ] Plugin tested in Figma Design file
- [ ] 5 screenshots captured and saved
- [ ] Cover image created (1920×960px)
- [ ] Description reviewed (no typos)
- [ ] Version notes reviewed
- [ ] Tags selected
- [ ] Support links added (optional)
- [ ] Everything looks professional

## After Publishing Checklist

- [ ] Plugin appears in Figma Community
- [ ] Can install from Community
- [ ] README updated with Community link
- [ ] Changes committed to git
- [ ] Shared on social media (optional)
- [ ] Monitoring user feedback

## Need Help?

- **Documentation issues**: Review PUBLISHING.md
- **Screenshot help**: Review SCREENSHOT-GUIDE.md
- **Cover image help**: Review COVER-IMAGE-SPEC.md
- **Figma support**: [help.figma.com](https://help.figma.com)
- **Community forums**: [forum.figma.com](https://forum.figma.com)

## Success!

Once approved, your plugin will be live on Figma Community and available to thousands of designers and developers worldwide. 🎉

Congratulations on publishing your first (or next) Figma plugin!

---

**Next Steps**: See SOCIAL-MEDIA-TEMPLATES.md for promotion ideas
