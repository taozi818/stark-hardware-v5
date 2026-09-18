(async () => {
  const out = {};
  const urls = {
    css: 'https://raw.githubusercontent.com/liangye9527/stark-hardware-v5/main/src/assets/css/styles.css?cb=' + Date.now(),
  };
  for (const k of Object.keys(urls)) {
    try {
      const r = await fetch(urls[k], { cache: 'no-store' });
      const t = await r.text();
      out[k] = { status: r.status, len: t.length, hasHeroVar: t.indexOf('--hero-image') > -1, hasScriptingNone: t.indexOf('scripting: none') > -1, head: t.slice(0, 90) };
    } catch (e) { out[k] = { err: String(e) }; }
  }
  return JSON.stringify(out);
})()
