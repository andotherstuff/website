# AOS Collective Website

Technology for Human Thriving

[![Edit with Shakespeare](https://shakespeare.diy/badge.svg)](https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2Fandotherstuff%2Fwebsite.git)

A simple, fast, and accessible static website for AOS Collective - building freedom tech that enhances, enables, and extends human liberty.

## Project Info

**URL**: https://andotherstuff.org

**Type**: Static HTML website with unified layout

## Website Structure

The website uses a **unified layout system** with consistent header and footer across all pages:

- `index.html` - Home page
- `about-us.html` - About Us (Purpose, Practices, Hubs)
- `express-interest.html` - Join Us / Express Interest form
- `public/hubs.html` - Detailed hub information

### Shared Components

- **Header**: Sticky navigation with logo, site title, and main navigation links
- **Footer**: GitHub link and footer navigation
- **Styles**: Shared CSS in `styles.css` with page-specific styles as needed

See [LAYOUT_SYSTEM.md](LAYOUT_SYSTEM.md) for detailed documentation.

## Build System

The project uses an automated sync process to keep source files (root directory) in sync with deployment files (`public/` directory). See [BUILD_PROCESS.md](BUILD_PROCESS.md) for detailed documentation on how this works.

## Local Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

This will start a Vite development server at http://localhost:8000 with hot module reloading. Changes to HTML files will automatically refresh the browser.

### Important: Editing HTML and CSS Files

The website uses a **dual-directory structure**:
- **Root directory** (`*.html`, `*.css`) - Source files for editing
- **`public/` directory** - Deployed files (auto-synced from root)

**When editing HTML or CSS files:**
1. Edit files in the **root directory** (e.g., `express-interest.html`, `styles.css`)
2. The files will automatically sync to `public/` during:
   - Build process (`npm run build`)
   - Deployment (`npm run deploy`)
   - Manual sync (`npm run sync`)

**Note:** The GitHub Actions workflow automatically syncs files before deployment, so you don't need to manually sync before pushing to the main branch. However, if you're testing locally or deploying manually, the sync will happen automatically.

## Deployment

### Automated Deployment (GitHub Actions)

This project is configured for automatic deployment to Cloudflare Pages via GitHub Actions.

**Setup:**

1. Create a Cloudflare Pages project:
   - Log into your Cloudflare account
   - Go to Pages > Create a project
   - Note your Account ID and create an API token

2. Add secrets to your GitHub repository:
   - Go to Settings > Secrets and variables > Actions
   - Add `CLOUDFLARE_API_TOKEN`
   - Add `CLOUDFLARE_ACCOUNT_ID`

3. Push to the `main` branch:
   ```sh
   git add .
   git commit -m "Update website"
   git push origin main
   ```

The GitHub Action will automatically deploy the `public/` directory to Cloudflare Pages.

### Manual Deployment

You can also deploy manually using Wrangler (Cloudflare's CLI):

```sh
# Install Wrangler (one time)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run deploy
```

Alternatively, you can build the project and deploy the dist folder:

```sh
# Build the project (outputs to dist/)
npm run build

# Deploy the dist folder
wrangler pages deploy dist --project-name=nostr-future-collective
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes to files in the **root directory** (not in `public/`)
4. Test locally with `npm run dev`
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Open a Pull Request

**Note:** You don't need to manually sync files to the `public/` directory - this happens automatically during the build and deployment process.

## License

MIT

## Contact

For questions or to get involved with AOS Collective:
- Visit our website: [andotherstuff.org](https://andotherstuff.org)
- Fill out the [interest form](express-interest.html)
- Check out our [GitHub](https://github.com/andotherstuff/)

---

Built with ❤️ for human thriving by AOS Collective
