# Build Process Documentation

## Overview

This project uses a dual-directory structure to manage source files and deployment files. Understanding this structure is important for making changes to the website.

## Directory Structure

```
.
├── *.html              # Source HTML files (EDIT THESE)
├── *.css               # Source CSS files (EDIT THESE)
├── public/
│   ├── *.html          # Auto-synced HTML files (DO NOT EDIT)
│   ├── *.css           # Auto-synced CSS files (DO NOT EDIT)
│   ├── logos/          # Static assets
│   └── ...             # Other static files
```

## Source of Truth

**Always edit files in the root directory, NOT in the `public/` directory.**

- ✅ Edit: `express-interest.html`, `about-us.html`, `index.html`, `styles.css`, etc.
- ❌ Don't edit: `public/express-interest.html`, `public/about-us.html`, etc.

## Automatic Sync Process

Files are automatically synced from the root to the `public/` directory in the following scenarios:

### 1. During Build
```bash
npm run build
```
This runs `npm run sync` before the Vite build process.

### 2. During Deployment
```bash
npm run deploy
```
The `predeploy` script automatically runs `npm run sync` before deploying.

### 3. In GitHub Actions
The CI/CD workflow includes a sync step before deploying to Cloudflare Pages:
```yaml
- name: Sync HTML and CSS files to public directory
  run: npm run sync
```

### 4. Manual Sync
You can manually sync files at any time:
```bash
npm run sync
```

## What Gets Synced

The sync command copies:
- All `.html` files from root to `public/`
- All `.css` files from root to `public/`

```bash
cp *.html public/
cp *.css public/
```

## Why This Structure?

This structure exists because:

1. **Deployment Target**: Cloudflare Pages deploys the `public/` directory
2. **Static Assets**: The `public/` directory contains static assets (logos, images, etc.)
3. **Source Control**: Keeps source files organized in the root directory
4. **Vite Integration**: Works seamlessly with Vite's development server

## Development Workflow

### Local Development
```bash
npm run dev
```
- Edit files in the root directory
- Vite serves files from both root and `public/`
- Changes to HTML files trigger browser refresh

### Before Committing
You don't need to manually sync! The files will be synced automatically during:
- CI/CD deployment (GitHub Actions)
- Manual deployment (`npm run deploy`)
- Build process (`npm run build`)

However, if you want to test the exact deployment state locally:
```bash
npm run sync
npm run preview
```

## Troubleshooting

### Changes not appearing on deployed site?

**Problem**: You edited a file in `public/` instead of the root directory.

**Solution**: 
1. Make your changes in the root directory file
2. Run `npm run sync` to update `public/`
3. Commit and push

### Files out of sync?

**Problem**: Root and `public/` files don't match.

**Solution**:
```bash
npm run sync
git add public/
git commit -m "Sync files to public directory"
```

## Best Practices

1. **Always edit root files**: Make changes to `*.html` and `*.css` in the root directory
2. **Commit both**: When committing changes, include both root and `public/` files
3. **Review diffs**: Check that both root and `public/` files are updated in your PR
4. **Trust automation**: The sync happens automatically in CI/CD, but you can run it manually if needed

## Migration Note

Prior to this update, files had to be manually synced to the `public/` directory. This caused issues where changes to root files weren't reflected in deployments. The automated sync process ensures this doesn't happen anymore.
