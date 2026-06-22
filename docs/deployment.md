# Cloudflare Pages deployment

## Build and preview

```bash
npm run build
npm run dev
```

## Create the Pages project

```bash
npm run cf:login
npm run cf:project:create
```

## Deploy

```bash
npm run deploy:pages
```

## Route structure

- `/` -> exam.kara251.com homepage
- `/tests/anime-summer-2026/` -> synced from `../26July-Anime-Test`

## Custom domain

In the Cloudflare Pages project settings, attach `exam.kara251.com` as a custom domain after the first deployment.
