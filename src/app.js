const tests = [
  {
    title: "2026 夏季番性格測驗",
    href: "/tests/anime-summer-2026/",
    route: "/tests/anime-summer-2026/",
    source: "../26July-Anime-Test",
    status: "live",
    statusLabel: "SYNCED",
    description: "沿用既有動漫測試的視覺與互動，掛進主站作為第一個測試頁。",
    note: "建置時會從相鄰目錄同步，不改動原始專案路徑。"
  },
  {
    title: "下一個測試位",
    href: "",
    route: "/tests/<next-slug>/",
    source: "pending",
    status: "pending",
    statusLabel: "PENDING",
    description: "後續新的測試可以直接照這個路由規則併進來。",
    note: "首頁版型已預留，新增時只需要補一個子資料夾與一筆列表資料。"
  }
];

function createTestItem(test) {
  const item = document.createElement("article");
  item.className = "test-item";

  const statusClass = test.status === "live" ? "test-status-live" : "test-status-pending";
  const action = test.href
    ? `<a class="test-link" href="${test.href}">Open Test</a>`
    : `<span class="test-link-muted">Coming Soon</span>`;

  item.innerHTML = `
    <div class="test-primary">
      <span class="test-status ${statusClass}">${test.statusLabel}</span>
      <h3 class="test-title">${test.title}</h3>
      <p class="test-description">${test.description}</p>
    </div>
    <div class="test-meta">
      <p class="test-route">ROUTE: ${test.route}</p>
      <p class="test-source">SOURCE: ${test.source}</p>
      <p class="test-note">${test.note}</p>
    </div>
    <div class="test-action">
      ${action}
    </div>
  `;

  return item;
}

function renderTests(items) {
  const testList = document.getElementById("test-list");
  testList.innerHTML = "";
  items.forEach((test) => {
    testList.appendChild(createTestItem(test));
  });
}

async function loadTests() {
  try {
    const response = await fetch("/tests-manifest.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Manifest request failed: ${response.status}`);
    }

    const manifest = await response.json();
    const syncedAnime = manifest.tests.find((test) => test.slug === "anime-summer-2026");
    if (!syncedAnime) {
      return tests;
    }

    return tests.map((test) => {
      if (test.route !== "/tests/anime-summer-2026/") {
        return test;
      }

      return {
        ...test,
        href: syncedAnime.synced ? syncedAnime.href : "",
        status: syncedAnime.synced ? "live" : "pending",
        statusLabel: syncedAnime.synced ? "SYNCED" : "WAITING",
        note: syncedAnime.synced
          ? test.note
          : "目前找不到相鄰來源專案，子路由保留但不會開放入口。"
      };
    });
  } catch {
    return tests;
  }
}

loadTests().then(renderTests);
