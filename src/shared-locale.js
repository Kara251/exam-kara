(function () {
  var STORAGE_KEY = "exam-kara-locale";
  var LOCALES = [
    { code: "tc", label: "繁中", htmlLang: "zh-Hant", script: "cjk" },
    { code: "sc", label: "简中", htmlLang: "zh-Hans", script: "cjk" },
    { code: "hx", label: "火星", htmlLang: "zh-Hant", script: "cjk" },
    { code: "wy", label: "文言", htmlLang: "lzh", script: "cjk" },
    { code: "en", label: "EN", htmlLang: "en", script: "latin" },
    { code: "yue", label: "粵語", htmlLang: "yue", script: "cjk" },
    { code: "ja", label: "日本語", htmlLang: "ja", script: "cjk" }
  ];
  var localeMap = {};

  LOCALES.forEach(function (locale) {
    localeMap[locale.code] = locale;
  });

  function normalizeLocale(value) {
    return localeMap[value] ? value : "tc";
  }

  function readQueryLocale() {
    try {
      return normalizeLocale(new URLSearchParams(window.location.search).get("lang"));
    } catch {
      return "tc";
    }
  }

  function readStoredLocale() {
    try {
      return normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      return "tc";
    }
  }

  function getLocale() {
    var queryLocale = readQueryLocale();

    if (queryLocale !== "tc" || new URLSearchParams(window.location.search).has("lang")) {
      return queryLocale;
    }

    return readStoredLocale();
  }

  function setLocale(locale) {
    var normalized = normalizeLocale(locale);

    try {
      window.localStorage.setItem(STORAGE_KEY, normalized);
    } catch {}

    return normalized;
  }

  function getConfig(locale) {
    return localeMap[normalizeLocale(locale)];
  }

  window.ExamKaraLocale = {
    locales: LOCALES.slice(),
    storageKey: STORAGE_KEY,
    normalizeLocale: normalizeLocale,
    getLocale: getLocale,
    setLocale: setLocale,
    getConfig: getConfig
  };
})();
