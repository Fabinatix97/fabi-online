# fabi-online

Willkommen 👋 In diesem Repo findest du den Source-Code für meine [persönliche Website](https://www.fabi-online.de).

Die Website wurde mit [Nuxt](https://github.com/nuxt) entwickelt, einem Framework, welches auf [Vue.js](https://github.com/vuejs) aufsetzt.

## Set-up

```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Build the application for production
npm run build

# Build the application for static hosting services (static site generation)
npx nuxi generate
```

Für die Typprüfung `npm run typecheck` ausführen. Die Vue-Komponenten werden mit
`vue-tsc` und TypeScript 5 geprüft; Nuxt-Konfiguration und Server-Code zusätzlich
mit TypeScript 7. `vue-tsc` und die ESLint-TypeScript-Tools unterstützen TypeScript 7
noch nicht als einzigen Compiler.

## Allgemeines

- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
