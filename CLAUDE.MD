# Project intent

**deeptech-global-tracker** is a zero-cost, fully static tracker of deep-tech
companies, organized as one tab per tech sector, plus a folder of research and
learning notes.

## Hard constraints

- **Static only.** No backend, no API routes, no database, no live data
  fetching, no scheduled jobs. Everything is pre-rendered at build time.
- **Zero-cost hosting: GitHub Pages.** No Vercel/Netlify project, no serverless
  functions.
- Data is **hand-curated TypeScript modules** committed to the repo, not
  fetched from any API. Figures (funding, specs) are approximate and
  illustrative — update them by editing the files directly.

## Stack decisions

- **Node/TypeScript**, Next.js App Router, built with `output: "export"`
  (static export — no server at runtime).
- **Tailwind CSS** for styling.
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub
  Pages on every push to `main`.

## Data model

- `src/data/<sector>.ts` — one file per tech sector, each exporting an array
  of `TechCompany` records (see `src/types/index.ts`).
- `src/data/index.ts` — `techRegistry`, keyed by sector slug
  (`ai-compute`, `drones-uav`, `quantum`, `semiconductors`, `spacetech`,
  `biotech`). This is the single source of truth for which sectors/tabs exist.
- `src/data/sectors.ts` — per-sector display metadata (label, description,
  which `specs` columns to render as a sector's matrix table).
- Each `TechCompany` has common fields (funding, country, TRL, etc.) plus a
  `specs` bag of sector-specific dense attributes (e.g. qubit count for
  quantum, payload capacity for drones/spacetech).

## Folder structure

```
src/app/            Next.js pages: dashboard, [sector]/ (dynamic per-sector
                    tab, statically generated for every key in techRegistry),
                    notes
src/data/           hand-curated sector data + the techRegistry + sector meta
src/components/     shared UI components
src/lib/            helpers over techRegistry (getSectorData, getAllCompanies, ...)
src/types/          shared TypeScript types
notes/              Markdown research & learning notes
```

## Working agreements

- Add a new sector by: creating `src/data/<sector>.ts`, adding it to
  `techRegistry` in `src/data/index.ts`, and adding its metadata to
  `src/data/sectors.ts`. The nav and dashboard derive from `techRegistry`
  automatically — don't hardcode sector lists elsewhere.
- No `fs`/network calls in data loading — sector data is imported as regular
  TS modules so it works under static export.
- Notes in `notes/` are plain Markdown, not rendered into the app.
- Do not reintroduce a pipeline, API route, database, or Vercel config unless
  this constraint is explicitly revisited.
