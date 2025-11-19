# AOS Collective Website

Technology for Human Thriving

A simple, fast, and accessible static website for AOS Collective - building freedom tech that enhances, enables, and extends human liberty.

## Project Info

**URL**: TBD (will be configured on Cloudflare Pages)

**Type**: Static HTML website (no build step required)

## Project Structure

```
.
├── index.html                  # Main landing page
├── hubs.html                   # Lab, Studio, and Foundry information  
├── express-interest.html       # Contact/interest form
├── public/                     # Deployment directory
│   ├── index.html             # (copy of root index.html)
│   ├── hubs.html              # (copy of root hubs.html)
│   ├── express-interest.html  # (copy of root express-interest.html)
│   ├── AOS_Official.svg       # Main logo
│   ├── logos/                 # Project logos for Foundry showcase
│   │   ├── shakespeare.svg
│   │   ├── Divine-512.png
│   │   ├── whitenoise.svg
│   │   ├── flotilla.webp
│   │   ├── cashu.png
│   │   ├── chorus.svg
│   │   ├── bitchat.png
│   │   └── gitlab-logo-600-rgb.svg
│   ├── _routes.json           # Cloudflare Pages routing config
│   └── robots.txt             # (optional) SEO configuration
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow for auto-deploy
├── wrangler.toml              # Cloudflare Pages configuration
└── README.md                  # This file
```

## Features

- ✨ Clean, accessible design with modern UI
- 📱 Fully responsive layout (mobile-first)
- ⚡ Lightning-fast loading (pure HTML/CSS, no build step)
- ♿ WCAG accessibility compliant
- 🎨 Beautiful gradients and smooth animations
- 🔗 Information about AOS Collective's mission and projects
- 🚀 Featured Foundry projects showcase
- 📝 Interest form for joining the collective

## Local Development

This is a static HTML website, so no build step is required! You can develop and preview it in multiple ways:

### Method 1: Simple HTTP Server (Recommended)

If you have Python installed:

```sh
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Or with Node.js:

```sh
# Install a simple HTTP server globally (one time)
npm install -g http-server

# Run the server
http-server -p 8000

# Then open http://localhost:8000 in your browser
```

### Method 2: Open Directly in Browser

You can simply open `index.html` directly in your browser. However, this method may have some limitations with loading assets depending on your browser's security settings.

### Method 3: Using Shakespeare

This project is designed to work with [Shakespeare](https://shakespeare.diy), an AI-powered website builder:

1. Open the project in Shakespeare
2. The preview will automatically load
3. Make changes and see them reflected immediately

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

The GitHub Action will automatically deploy your changes to Cloudflare Pages.

### Manual Deployment

You can also deploy manually using Wrangler (Cloudflare's CLI):

```sh
# Install Wrangler (one time)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy public --project-name=aos-collective
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

After editing files at the root level (index.html, hubs.html, express-interest.html), copy them to the public folder:

```sh
cp index.html public/index.html
cp hubs.html public/hubs.html
cp express-interest.html public/express-interest.html
```

Or use this convenience command:

```sh
cp *.html public/
```

Then commit and push:

```sh
git add .
git commit -m "Your change description"
git push
```

## Custom Domain

To connect a custom domain to your Cloudflare Pages site:

1. Navigate to your Cloudflare Pages project
2. Go to Settings > Custom domains
3. Add your domain and follow the DNS configuration instructions

## Technologies Used

- Pure HTML5 with semantic markup
- Modern CSS3 with custom properties
- Vanilla JavaScript (minimal, only for dynamic year and form handling)
- No frameworks, no dependencies, no build step!

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

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
