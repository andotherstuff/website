# andOtherStuff Documentation

## Project Overview

andOtherStuff is a collaborative Nostr funding initiative to develop strategic pillars for the Nostr ecosystem, funded by the StartSmall foundation with a $10,000,000 USD grant.

## Strategic Pillars

The project focuses on five strategic pillars:

1. **UX & Onboarding** (Rabble)
2. **Communities** (Alex)
3. **Private Communication** (JeffG)
4. **Commerce** (Calle)
5. **Infrastructure** (Jack)

## Technical Implementation

### Technologies

- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for UI components
- React Router for navigation

### Deployment

The site is deployed to Cloudflare Pages. Deployment happens automatically via GitHub Actions when changes are pushed to the main branch.

Manual deployment can be performed with:

```sh
# Build the project
npm run build

# Deploy to Cloudflare Pages
CLOUDFLARE_ACCOUNT_ID=ea14882f4b5d0270ffc376ca39229a84 npm run deploy
```

### URL Structure

- Main site: https://andotherstuff.pages.dev
- Team page: https://andotherstuff.pages.dev/team
- Strategic Pillars: https://andotherstuff.pages.dev/pillars
- Organization: https://andotherstuff.pages.dev/structure

## Development

### Getting Started

```sh
# Clone the repository
git clone https://github.com/rabble/andotherstuff.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to Cloudflare Pages

### Key Files

- `/src/pages/` - Main page components
- `/src/components/` - Reusable UI components
- `/src/components/ui/` - shadcn/ui components
- `/.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment