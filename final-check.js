(async () => {
  const out = {};
  const markers = ['Ausgewählte Kollektionen', 'Colecciones Destacadas', 'Bộ sưu tập nổi bật'];
  for (const l of ['de', 'es', 'vi']) {
    try {
      const r = await fetch('https://github.com/liangye9527/stark-hardware-v5/commits/main/src/' + l + '/index.html', { cache: 'no-store' });
      const t = await r.text();
      const m = t.match(/\/commit\/([0-9a-f]{40})/);
      if (!m) { out[l] = 'nosha'; continue; }
      const sha = m[1];
      const d = await (await fetch('https://github.com/liangye9527/stark-hardware-v5/commit/' + sha + '.diff', { cache: 'no-store' })).text();
      out[l] = {
        sha: sha.slice(0, 8),
        hasNew: markers.some(x => d.indexOf(x) > -1),
        hasMsg: d.indexOf('Visual and content upgrade') > -1,
        diffLen: d.length
      };
    } catch (e) { out[l] = 'err:' + e.message; }
  }
  return JSON.stringify(out);
})()
