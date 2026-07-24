# ivanhoinacki.github.io

Personal portfolio and resume website for Ivan Hoinacki.

## Stack

- React 18
- TypeScript
- Vite
- CSS with responsive light/dark themes and light mode by default
- GitHub Pages

The application lives in [`web/`](web/). The previous Angular application was removed after the React migration.

## Local development

Requirements:

- Node.js 20
- npm 10+

```sh
cd web
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Validation

```sh
cd web
npm run typecheck
npm run build
npm audit
```

## Routes

- `/#home` — portfolio home
- `/#/resume-us` — default English resume
- `/#/resume-en` — English resume alias
- `/#/resume-pt` — currículo em português

PDF versions are available from both resume pages.

## Deployment

Pushes to `master` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. installs dependencies with Node.js 20;
2. runs type checking and a production build;
3. publishes `web/dist` to GitHub Pages.

Pull requests run the same build checks without deploying.
