(async () => {
  const base = 'https://raw.githubusercontent.com/liangye9527/stark-hardware-v5/main/src/';
  const out = {};
  for (const l of ['de', 'es', 'vi']) {
    const r = await fetch(base + l + '/index.html?cb=' + Date.now() + Math.random(), { cache: 'no-store' });
    out[l] = await r.text();
  }
  return JSON.stringify(out);
})()
