(async () => {
  const base = 'https://raw.githubusercontent.com/liangye9527/stark-hardware-v5/main/';
  const out = {};
  const files = {
    css: 'src/assets/css/styles.css',
    en: 'src/en/index.html', zh: 'src/zh/index.html', ar: 'src/ar/index.html',
    de: 'src/de/index.html', es: 'src/es/index.html', vi: 'src/vi/index.html'
  };
  for (const k of Object.keys(files)) {
    try {
      const r = await fetch(base + files[k] + '?cb=' + Date.now() + Math.random(), { cache: 'no-store' });
      const t = await r.text();
      out[k] = {
        status: r.status, len: t.length,
        placeholder: (t.match(/via\.placeholder\.com/g) || []).length,
        alicdn: (t.match(/s\.alicdn\.com/g) || []).length,
        heroShowerImg: t.indexOf('SUS304-Stainless-Steel-Digital-Waterfall-Rain-Shower.jpg') > -1
      };
    } catch (e) { out[k] = { err: String(e) }; }
  }
  try {
    const r2 = await fetch(base + 'index.html?cb=' + Date.now(), { cache: 'no-store' });
    out.root = { status: r2.status, body: (await r2.text()).trim() };
  } catch (e) { out.root = { err: String(e) }; }
  try {
    const zh = await (await fetch('https://liangye9527.github.io/stark-hardware-v5/src/zh/index.html?cb=' + Date.now(), { cache: 'no-store' })).text();
    out.liveZh = { hasLogo: zh.indexOf('斯塔克卫浴') > -1, hasPlaceholder: zh.indexOf('via.placeholder.com') > -1 };
  } catch (e) { out.liveZh = { err: String(e) }; }
  return JSON.stringify(out);
})()
