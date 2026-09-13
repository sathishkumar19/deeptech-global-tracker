# Deeptech Global Tracker

A zero-cost, fully static tracker of deep-tech companies, organized as one tab
per tech sector (AI & Compute, Drones & UAV, Quantum, Semiconductors,
Spacetech, Biotech), plus a folder of research and learning notes.

See [CLAUDE.MD](./CLAUDE.MD) for the full project intent and working agreements.

No backend, no database, no live API calls — all company data lives as
hand-curated TypeScript files in `src/data/` and is baked into a static export
at build time.

## Structure

- `src/app/` — dashboard (`/`), one dynamic tab per sector (`/[sector]`,
  statically generated from `src/data/index.ts`), and `/notes`
- `src/data/` — `techRegistry` (the source of truth for sectors/tabs),
  `sectors.ts` (display metadata), and one file per sector's company data
- `notes/` — Markdown research & learning notes

## Getting started

```bash
npm install
npm run dev         # start the dashboard at localhost:3000
npm run build        # produce the static export in ./out
```

## Updating data

Edit the relevant file in `src/data/` (e.g. `src/data/quantum.ts`) directly —
there is no pipeline or API to refresh from. Figures are approximate and
manually curated; verify against primary sources before relying on them.

## Deployment

Deploys to **GitHub Pages** via `.github/workflows/deploy.yml` on every push
to `main`: build produces a static export (`next build` with
`output: "export"`), which is uploaded and published as a Pages artifact.
Enable Pages for this repo under Settings → Pages → Source → GitHub Actions.
