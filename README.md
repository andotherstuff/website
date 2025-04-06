# andOtherStuff

A collaborative Nostr funding initiative to develop strategic pillars for the Nostr ecosystem.

## Project info

**URL**: https://andotherstuff.pages.dev

## How can I edit this code?

There are several ways of editing this application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Using Cloudflare Pages
This project is configured to deploy to Cloudflare Pages. You can deploy manually or use GitHub Actions for automated deployments.

**Manual deployment:**
```sh
# Build the project
npm run build

# Deploy to Cloudflare Pages
CLOUDFLARE_ACCOUNT_ID=your_account_id npm run deploy
```

**GitHub Actions:**
The project includes a GitHub workflow file that automatically deploys to Cloudflare Pages when pushing to the main branch.

## Can I connect a custom domain?

Yes, you can connect a custom domain to the Cloudflare Pages site.

To connect a domain, navigate to your Cloudflare Pages project > Settings > Custom domains and follow the instructions.
