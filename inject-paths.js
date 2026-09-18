(() => {
  const MAP = [
    "src/en/index.html",
    "src/ar/index.html",
    "src/zh/index.html",
    "src/de/index.html",
    "src/es/index.html",
    "src/vi/index.html",
    "src/assets/css/styles.css",
    "src/assets/js/main.js",
    "src/robots.txt",
    "src/sitemap.xml",
    "src/llms.txt"
  ];

  function onEvt(e) {
    const inp = e.target;
    if (!inp || inp.id !== 'upload-manifest-files-input') return;
    const files = Array.from(inp.files || []);
    if (!files.length) return;
    if (files.length === window.__starkCount && files[0] && files[0].name.indexOf('/') !== -1) {
      window.__starkRenamed = files.map(function (f) { return f.name; });
      return;
    }
    const dt = new DataTransfer();
    files.forEach(function (f, i) {
      const p = MAP[i] || f.name;
      dt.items.add(new File([f], p, { type: f.type || 'application/octet-stream' }));
    });
    inp.files = dt.files;
    window.__starkCount = files.length;
    window.__starkRenamed = Array.from(inp.files).map(function (f) { return f.name; });
  }

  if (window.__starkOnEvt) {
    document.removeEventListener('input', window.__starkOnEvt, true);
    document.removeEventListener('change', window.__starkOnEvt, true);
  }
  window.__starkOnEvt = onEvt;
  document.addEventListener('input', onEvt, true);
  document.addEventListener('change', onEvt, true);

  return { installed: true, map: MAP.length };
})()
