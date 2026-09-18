(async () => {
  const out = {};
  for (const l of ['de', 'es', 'vi']) {
    try {
      const r = await fetch('https://github.com/liangye9527/stark-hardware-v5/commits/main/src/' + l + '/index.html', { cache: 'no-store' });
      const t = await r.text();
      const msgs = (t.match(/Visual and content upgrade[^"<\\]*/g) || []).slice(0, 2);
      out[l] = { status: r.status, msgs: msgs, hasMsg: msgs.length > 0 };
    } catch (e) { out[l] = { err: String(e) }; }
  }
  for (const l of ['de', 'es', 'vi']) {
    try {
      const r = await fetch('https://raw.githubusercontent.com/liangye9527/stark-hardware-v5/main/src/' + l + '/index.html?x=' + Math.random(), { cache: 'no-store' });
      const t = await r.text();
      out['raw_' + l] = { len: t.length, alicdn: (t.match(/s\.alicdn\.com/g) || []).length };
    } catch (e) { out['raw_' + l] = { err: String(e) }; }
  }
  return JSON.stringify(out);
})()
