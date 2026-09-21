# Shukhrat Malikov — Portfolio

Personal portfolio of **Shukhrat Malikov**, frontend developer (React · Next.js · React Native · TypeScript), Tashkent, Uzbekistan.

**Live:** https://malikovsh.vercel.app

## Stack

- **React 19** + **TypeScript** on **Vite 8**
- **Tailwind CSS 4** (`@tailwindcss/vite`), CSS-variable theming with light/dark modes
- **Motion** for scroll reveals and page-load choreography
- **i18next** — English and Uzbek, bundled so translations never flash
- **lucide-react** icons

## Structure

```
src/
  components/   Header, Hero, Experience, Projects, Skills, Education, Contact, Footer
  data/         profile, experience, projects, skills — content as typed data
  hooks/        useTheme, useCopy, useInView
  lib/          cn, date helpers
  locales/      en.json, uz.json
public/
  projects/     live screenshots of each platform (WebP)
```

Content lives in `src/data/*` and the copy in `src/locales/*`, so adding a project or a job means editing data, not components.

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build
```

## Deployment

Deployed on Vercel from `main`; every push produces a new deployment.
