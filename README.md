# Kiran's portfolio

React 19 + TypeScript + Vite + Tailwind CSS v4 + Motion (Framer Motion).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
```

## Edit content

Everything (text, jobs, projects, skills, links) is in `src/data.ts`.
Replace `public/Sapa_Kiran_Kumar_Reddy_Resume.pdf` whenever you update your resume, and bump the `?v=` date on `resume` in `src/data.ts`.

## Deploy free

**Vercel (easiest):** push this folder to a GitHub repo → vercel.com → "Add New Project" →
import the repo → Deploy. Vite is detected automatically. You get `your-name.vercel.app`.

**GitHub Pages:** name the repo `Kirankumar4567.github.io`, push, then
Settings → Pages → Source: **GitHub Actions**. The workflow in `.github/workflows/deploy.yml`
builds and publishes on every push to `main`. Site: https://kirankumar4567.github.io
