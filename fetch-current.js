(async () => {
  const base = 'https://raw.githubusercontent.com/liangye9527/stark-hardware-v5/main/src/';
  const out = {};
  for (const f of ['zh/index.html', 'en/index.html', 'assets/css/styles.css', 'en/products.html']) {
    try {
      const r = await fetch(base + f + '?x=' + Math.random(), { cache: 'no-store' });
      const t = await r.text();
      if (f === 'assets/css/styles.css') { out[f] = t; }
      else if (f === 'en/products.html') { out[f] = { status: r.status, len: t.length }; }
      else { out[f] = t; }
    } catch (e) { out[f] = 'ERR:' + e.message; }
  }
  return JSON.stringify(out);
})()
