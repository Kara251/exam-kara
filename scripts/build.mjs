import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const srcDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");
const siblingAnimeDir = path.resolve(rootDir, "../26July-Anime-Test");
const animeRouteDir = path.join(distDir, "tests", "anime-summer-2026");
const animePatchDir = path.join(rootDir, "anime-route-patch");
const syncOnly = process.argv.includes("--sync-only");
const buildVersion = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
const excludedAnimeAssets = new Set([
  "17_tomb_raider_king1.webp",
  "40_toy_story_51.webp",
  "45_paw_patrol_dino_movie1.webp",
  "49_minions_monsters1.webp"
]);

async function removeAndRecreate(dir) {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });
}

async function copyDir(source, target, filter) {
  await fs.mkdir(target, { recursive: true });
  const entries = await fs.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (filter && !filter(sourcePath, entry)) {
      continue;
    }

    if (entry.isDirectory()) {
      await copyDir(sourcePath, targetPath, filter);
      continue;
    }

    if (entry.isFile()) {
      await fs.copyFile(sourcePath, targetPath);
    }
  }
}

function includeAnimeEntry(sourcePath, entry) {
  if (entry.name === ".git" || entry.name === ".claude") {
    return false;
  }

  if (entry.name === "README.md" || entry.name === ".gitignore") {
    return false;
  }

  if (/\.md$/i.test(entry.name)) {
    return false;
  }

  return true;
}

async function removeExcludedAnimeAssets() {
  const imageDir = path.join(animeRouteDir, "images");

  for (const assetName of excludedAnimeAssets) {
    await fs.rm(path.join(imageDir, assetName), { force: true });
  }
}

async function overlayAnimePatch() {
  await copyDir(animePatchDir, animeRouteDir);
}

async function replaceBuildVersionPlaceholders(filePath) {
  try {
    const source = await fs.readFile(filePath, "utf8");
    await fs.writeFile(filePath, source.replaceAll("__BUILD_VERSION__", buildVersion));
  } catch {}
}

async function applyBuildVersion() {
  await Promise.all([
    replaceBuildVersionPlaceholders(path.join(distDir, "index.html")),
    replaceBuildVersionPlaceholders(path.join(distDir, "shared-runtime.js")),
    replaceBuildVersionPlaceholders(path.join(animeRouteDir, "index.html"))
  ]);
}

async function writeUnavailableAnimePage() {
  const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anime Test Pending</title>
  <style>
    :root {
      --bg: #F2EDE4;
      --text: #1A1A1A;
      --border: #1A1A1A;
      --muted: #8A8279;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
      background: var(--bg);
      color: var(--text);
      font-family: "Noto Sans TC", sans-serif;
    }

    main {
      width: min(100%, 640px);
      border: 2px solid var(--border);
      padding: 28px;
      background: rgba(250, 248, 244, 0.96);
    }

    h1 {
      margin: 0 0 10px;
      font-family: "Noto Serif TC", serif;
      font-size: 32px;
    }

    p {
      margin: 0;
      line-height: 1.8;
      color: var(--muted);
    }
  </style>
</head>
<body>
  <main>
    <h1>Anime Test Pending</h1>
    <p>目前找不到 ../26July-Anime-Test，因此這個子路由暫時沒有同步內容。</p>
  </main>
</body>
</html>
`;

  await fs.mkdir(animeRouteDir, { recursive: true });
  await fs.writeFile(path.join(animeRouteDir, "index.html"), html);
}

async function syncAnimeRoute() {
  try {
    await fs.access(siblingAnimeDir);
    await removeAndRecreate(animeRouteDir);
    await copyDir(siblingAnimeDir, animeRouteDir, includeAnimeEntry);
    await removeExcludedAnimeAssets();
    await overlayAnimePatch();
    return { available: true };
  } catch {
    await writeUnavailableAnimePage();
    return { available: false };
  }
}

async function main() {
  if (!syncOnly) {
    await removeAndRecreate(distDir);
    await copyDir(srcDir, distDir);
  } else {
    await fs.mkdir(distDir, { recursive: true });
  }

  const status = await syncAnimeRoute();

  const manifest = {
    version: buildVersion,
    generatedAt: new Date().toISOString(),
    tests: [
      {
        slug: "anime-summer-2026",
        name: "2026 夏季番性格測驗",
        href: "/tests/anime-summer-2026/",
        source: "../26July-Anime-Test",
        synced: status.available
      }
    ]
  };

  await fs.writeFile(
    path.join(distDir, "tests-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );

  await fs.writeFile(
    path.join(distDir, "build-meta.json"),
    `${JSON.stringify({ version: buildVersion, generatedAt: manifest.generatedAt }, null, 2)}\n`
  );

  await applyBuildVersion();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
