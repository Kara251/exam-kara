# Cloudflare Pages Deployment

## Build And Preview

```bash
npm run build
npm run dev
```

Build output is written to `dist/`.

## Create The Pages Project

```bash
npm run cf:login
npm run cf:project:create
```

## Deploy

```bash
npm run deploy:pages
```

## Route Structure

- `/` -> exam.kara251.com homepage
- `/tests/anime-summer-2026/` -> synced from `../26July-Anime-Test`

## Sync Notes

During build:

- `src/` is copied into `dist/`
- `../26July-Anime-Test` is synced into `dist/tests/anime-summer-2026/`
- `anime-route-patch/` is overlaid onto that synced route

If the sibling source project is missing, the build writes a placeholder page instead of failing the full site build.

## Custom Domain

In the Cloudflare Pages project settings, attach `exam.kara251.com` as a custom domain after the first deployment.
