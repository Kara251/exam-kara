(function () {
  var BUILD_VERSION = "__BUILD_VERSION__";
  var BUILD_META_PATH = "/build-meta.json";
  var STORAGE_KEY = "exam-kara-build-version";
  var SESSION_KEY = "exam-kara-build-refresh";
  var BUILD_PARAM = "__exam_kara_build";

  function safeGet(storage, key) {
    try {
      return storage.getItem(key);
    } catch {
      return "";
    }
  }

  function safeSet(storage, key, value) {
    try {
      storage.setItem(key, value);
    } catch {}
  }

  function cleanRefreshParam() {
    var url;

    try {
      url = new URL(window.location.href);
    } catch {
      return;
    }

    if (!url.searchParams.has(BUILD_PARAM)) {
      return;
    }

    url.searchParams.delete(BUILD_PARAM);
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }

  function buildRefreshUrl(version) {
    var url = new URL(window.location.href);
    url.searchParams.set(BUILD_PARAM, version);
    return url.toString();
  }

  async function clearRuntimeCaches() {
    if ("serviceWorker" in navigator && navigator.serviceWorker.getRegistrations) {
      try {
        var registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(function (registration) {
          return registration.unregister();
        }));
      } catch {}
    }

    if ("caches" in window && window.caches.keys) {
      try {
        var cacheKeys = await window.caches.keys();
        await Promise.all(cacheKeys.map(function (key) {
          return window.caches.delete(key);
        }));
      } catch {}
    }
  }

  async function fetchLatestBuildVersion() {
    try {
      var response = await fetch(BUILD_META_PATH + "?ts=" + Date.now(), {
        cache: "no-store",
        headers: {
          "cache-control": "no-store"
        }
      });

      if (!response.ok) {
        return "";
      }

      var meta = await response.json();
      return meta && meta.version ? String(meta.version) : "";
    } catch {
      return "";
    }
  }

  async function ensureFresh() {
    var storedVersion = safeGet(window.localStorage, STORAGE_KEY);
    var latestVersion = await fetchLatestBuildVersion();
    var targetVersion = latestVersion || storedVersion || BUILD_VERSION;
    var refreshToken = targetVersion + "::" + window.location.pathname;
    var alreadyRefreshed = safeGet(window.sessionStorage, SESSION_KEY) === refreshToken;
    var shouldRefresh = Boolean(
      (latestVersion && latestVersion !== BUILD_VERSION) ||
      (storedVersion && storedVersion !== BUILD_VERSION)
    );

    if (shouldRefresh && !alreadyRefreshed) {
      safeSet(window.sessionStorage, SESSION_KEY, refreshToken);
      safeSet(window.localStorage, STORAGE_KEY, targetVersion);
      await clearRuntimeCaches();
      window.location.replace(buildRefreshUrl(targetVersion));
      return false;
    }

    safeSet(window.localStorage, STORAGE_KEY, BUILD_VERSION);
    cleanRefreshParam();
    return true;
  }

  function sanitizeEmptyImageSources(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var images = scope.querySelectorAll("img[src='']");

    images.forEach(function (image) {
      image.removeAttribute("src");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      sanitizeEmptyImageSources(document);
    }, { once: true });
  } else {
    sanitizeEmptyImageSources(document);
  }

  window.ExamKaraRuntime = {
    buildVersion: BUILD_VERSION,
    clearRuntimeCaches: clearRuntimeCaches,
    ensureFresh: ensureFresh,
    fetchLatestBuildVersion: fetchLatestBuildVersion,
    sanitizeEmptyImageSources: sanitizeEmptyImageSources
  };
})();
