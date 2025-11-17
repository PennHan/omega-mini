# Repository Guidelines

## Project Structure & Module Organization
The app is a Vue 3 + Vite project. Entry code lives in `src/main.js` and `App.vue`, while feature views sit in `src/views` (Welcome, Dashboard, MyTree, GiftBox, Journey, Subscription). Reusable UI lives in `src/components`, i18n resources in `src/i18n`, and shared styles in `src/style.css` plus Tailwind utilities via `tailwind.config.js`. Static assets belong in `src/assets`, and files under `public/` are copied verbatim at build time.

## Build, Test, and Development Commands
- `npm run dev` (or `pnpm dev`): starts the Vite dev server with HMR at `http://localhost:5173`, ideal for day-to-day development.
- `npm run build`: produces the optimized production bundle in `dist/`; run before submitting a PR to ensure the app still bundles.
- `npm run preview`: serves the build output locally so you can validate routing, lazy loading, and i18n in a production-like environment.

## Coding Style & Naming Conventions
Use `<script setup>` with the Composition API and keep logic colocated with each view/component. Indent with two spaces, prefer single quotes in JavaScript, and name components in PascalCase (`LanguageSwitcher.vue`) while route files stay in UpperCamelCase to match router definitions. Keep Tailwind class lists grouped logically (layout → spacing → color) for readability, and avoid global CSS unless it belongs in `style.css`.

## Testing Guidelines
Automated tests are not yet wired up, so introduce Vitest + Vue Test Utils when adding substantial features. Place specs under `src/__tests__` or alongside components using the `.spec.js` suffix, mock `vue-i18n` as needed, and cover routing branches plus locale fallbacks. Until Vitest is added, perform manual regression passes via `npm run dev`, exercising each route and language toggle before opening a PR.

## Commit & Pull Request Guidelines
Follow Conventional Commits as seen in history (`feat:`, `refactor:`, `fix:`). Each commit should address a scoped change such as “feat: enhance Dashboard cards” rather than bundling unrelated updates. PRs must include a concise summary, testing notes (commands run or scenarios covered), linked issues or roadmap items, and screenshots/gifs for UI work. Ensure new strings are mirrored across locales in `src/i18n` and mention any config steps (env vars, API keys) in the PR description.
