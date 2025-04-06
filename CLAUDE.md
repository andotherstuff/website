# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Build: `npm run build`
- Development server: `npm run dev`
- Linting: `npm run lint`
- Preview build: `npm run preview`

## Code Style Guidelines
- **TypeScript**: Use TypeScript for all new code. Strict mode is disabled.
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import { Button } from '@/components/ui/button'`).
- **Components**: Use functional components with React hooks.
- **Formatting**: Follow existing code indentation (2 spaces) and structure.
- **Naming**: Use PascalCase for components, camelCase for functions/variables.
- **CSS**: Use Tailwind CSS for styling with `className` prop.
- **UI Components**: Use existing shadcn/ui components from `@/components/ui/`.
- **Utils**: Use utility functions from `@/lib/utils.ts` (e.g., `cn()` for class merging).
- **Hooks**: Custom hooks should be prefixed with `use` and placed in the hooks directory.
- **Routing**: Use React Router for navigation with `<Link>` component.