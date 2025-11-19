# AOS Collective Website

Technology for Human Thriving

[![Edit with Shakespeare](https://shakespeare.diy/badge.svg)](https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2Fandotherstuff%2Fwebsite.git)

A simple, fast, and accessible static website for AOS Collective - building freedom tech that enhances, enables, and extends human liberty.

## Project Info

**URL**: TBD (will be configured on Cloudflare Pages)

**Type**: Static HTML website

## Local Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

This will start a Vite development server at http://localhost:8000 with hot module reloading. Changes to HTML files will automatically refresh the browser.

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
wrangler pages deploy dist --project-name=aos-collective
```

## Making Changes

### Editing Content

All content is in the HTML files. To edit:

1. **Homepage** (`index.html`):
   - Hero section, purpose, practices, Foundry projects

2. **Hubs Page** (`hubs.html`):
   - Lab, Studio, and Foundry descriptions

3. **Interest Form** (`express-interest.html`):
   - Contact form for people wanting to join

### Updating Styles

Styles are embedded in each HTML file within `<style>` tags. The design uses CSS custom properties (variables) for easy theming:

```css
:root {
  --bg: #fbfaf8;          /* main background */
  --bg-alt: #f7f6f4;      /* section alt background */
  --accent: #111211;      /* primary accent (dark) */
  --muted: #716f6a;       /* muted text */
  /* ... more variables */
}
```

### Adding Images/Logos

1. Add your image files to the `public/logos/` directory
2. Reference them in HTML with `/logos/your-image.png`

### After Making Changes

After editing files at the root level (index.html, hubs.html, express-interest.html), you need to sync them to the public folder for deployment:

```sh
# Sync HTML files to public folder
npm run sync
```

Or manually:

```sh
cp *.html public/
```

Then commit and push:

```sh
git add .
git commit -m "Your change description"
git push
```

**Note:** For local development with `npm run dev`, you can edit the files at the root and see changes immediately. The sync to `public/` is only needed before deployment.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Copy HTML files to public folder
5. Test locally
6. Commit your changes (`git commit -m 'Add some feature'`)
7. Push to the branch (`git push origin feature/your-feature`)
8. Open a Pull Request

## License

MIT

## Contact

For questions or to get involved with AOS Collective:
- Visit our website (TBD)
- Fill out the [interest form](express-interest.html)
- Check out our [GitHub](https://github.com/andotherstuff/)

---

Built with ❤️ for human thriving by AOS Collective
