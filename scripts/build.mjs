import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const srcDir = path.join(rootDir, "src");
const testsSrcDir = path.join(rootDir, "tests-src");
const distDir = path.join(rootDir, "dist");
const localAnimeDir = path.join(testsSrcDir, "anime-summer-2026");
const localGalgameDir = path.join(testsSrcDir, "galgame-test");
const localHumanChallengeDir = path.join(testsSrcDir, "human-challenge");
const animeRouteDir = path.join(distDir, "tests", "anime-summer-2026");
const galgameRouteDir = path.join(distDir, "tests", "galgame-test");
const humanChallengeRouteDir = path.join(distDir, "tests", "human-challenge");
const legacyGalgameRouteDir = path.join(distDir, "tests", "galgame-match");
const vendorDir = path.join(distDir, "vendor");
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

function includeSiblingEntry(sourcePath, entry) {
  if (entry.name === ".git" || entry.name === ".claude") {
    return false;
  }

  if (entry.name === ".DS_Store") {
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

async function replaceBuildVersionPlaceholders(filePath) {
  try {
    const source = await fs.readFile(filePath, "utf8");
    await fs.writeFile(filePath, source.replaceAll("__BUILD_VERSION__", buildVersion));
  } catch {}
}

async function collectHtmlFiles(dir) {
  const files = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        files.push(...await collectHtmlFiles(entryPath));
      } else if (entry.isFile() && /\.html$/i.test(entry.name)) {
        files.push(entryPath);
      }
    }
  } catch {}

  return files;
}

function lineNumberFor(source, index) {
  return source.slice(0, index).split("\n").length;
}

async function assertNoEmptyImageSources(dirs) {
  const files = (await Promise.all(dirs.map(collectHtmlFiles))).flat();
  const failures = [];
  const emptySrcPattern = /\bsrc\s*=\s*(["'])\s*\1/gi;

  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    let match;

    while ((match = emptySrcPattern.exec(source)) !== null) {
      failures.push(`${path.relative(rootDir, file)}:${lineNumberFor(source, match.index)}`);
    }
  }

  if (failures.length) {
    throw new Error(`Empty image/script src attributes are not allowed:\n${failures.join("\n")}`);
  }
}

async function applyBuildVersion() {
  await Promise.all([
    replaceBuildVersionPlaceholders(path.join(distDir, "index.html")),
    replaceBuildVersionPlaceholders(path.join(distDir, "shared-runtime.js")),
    replaceBuildVersionPlaceholders(path.join(animeRouteDir, "index.html")),
    replaceBuildVersionPlaceholders(path.join(galgameRouteDir, "index.html")),
    replaceBuildVersionPlaceholders(path.join(humanChallengeRouteDir, "index.html"))
  ]);
}

async function writeRedirectPage(targetDir, href) {
  await removeAndRecreate(targetDir);
  await fs.writeFile(
    path.join(targetDir, "index.html"),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${href}">
  <meta name="robots" content="noindex">
  <title>Redirecting…</title>
  <script>location.replace(${JSON.stringify(href)});</script>
</head>
<body>
  <p>Redirecting to <a href="${href}">${href}</a>…</p>
</body>
</html>
`
  );
}

async function syncAnimeRoute() {
  await fs.access(localAnimeDir);
  await removeAndRecreate(animeRouteDir);
  await copyDir(localAnimeDir, animeRouteDir, includeSiblingEntry);
  await removeExcludedAnimeAssets();
  return { available: true };
}

async function syncGalgameRoute() {
  await fs.access(localGalgameDir);
  await removeAndRecreate(galgameRouteDir);
  await copyDir(localGalgameDir, galgameRouteDir, includeSiblingEntry);
  await writeRedirectPage(legacyGalgameRouteDir, "/tests/galgame-test/");
  return { available: true };
}

async function syncHumanChallengeRoute() {
  await fs.access(localHumanChallengeDir);
  await removeAndRecreate(humanChallengeRouteDir);
  await copyDir(localHumanChallengeDir, humanChallengeRouteDir, includeSiblingEntry);
  return { available: true };
}

async function copyVendorAssets() {
  await fs.mkdir(vendorDir, { recursive: true });
  await fs.copyFile(
    path.join(rootDir, "node_modules", "altcha", "dist", "main", "altcha.js"),
    path.join(vendorDir, "altcha.js")
  );
}

async function main() {
  if (!syncOnly) {
    await removeAndRecreate(distDir);
    await copyDir(srcDir, distDir);
  } else {
    await fs.mkdir(distDir, { recursive: true });
  }

  const animeStatus = await syncAnimeRoute();
  const galgameStatus = await syncGalgameRoute();
  const humanChallengeStatus = await syncHumanChallengeRoute();
  await copyVendorAssets();
  await assertNoEmptyImageSources([srcDir, testsSrcDir, distDir]);

  const manifest = {
    version: buildVersion,
    generatedAt: new Date().toISOString(),
    tests: [
      {
        slug: "anime-summer-2026",
        name: "2026 夏季番性格測驗",
        href: "/tests/anime-summer-2026/",
        source: "tests-src/anime-summer-2026",
        synced: animeStatus.available
      },
      {
        slug: "galgame-test",
        name: "GalGame 命定路線測驗",
        href: "/tests/galgame-test/",
        source: "tests-src/galgame-test",
        synced: galgameStatus.available
      },
      {
        slug: "human-challenge",
        name: "你能闖過幾個人機測試",
        href: "/tests/human-challenge/",
        source: "tests-src/human-challenge",
        synced: humanChallengeStatus.available
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
