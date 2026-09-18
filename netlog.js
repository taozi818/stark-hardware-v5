(() => {
  window.__reqs = [];
  function describe(b) {
    if (!b) return null;
    if (typeof FormData !== 'undefined' && b instanceof FormData) {
      const entries = [];
      for (const pair of b.entries()) {
        const k = pair[0], v = pair[1];
        if (typeof v === 'string') entries.push([k, v.slice(0, 300)]);
        else entries.push([k, '[File:' + (v && v.name) + ' size=' + (v && v.size) + ' relPath=' + (v && v.webkitRelativePath) + ']']);
      }
      return { type: 'FormData', entries: entries };
    }
    if (typeof b === 'string') return { type: 'string', value: b.slice(0, 3000) };
    if (typeof Blob !== 'undefined' && b instanceof Blob) return { type: 'Blob', size: b.size };
    return { type: Object.prototype.toString.call(b) };
  }

  if (!window.__patched) {
    const of = window.fetch;
    window.fetch = function (input, init) {
      try {
        const url = typeof input === 'string' ? input : (input && input.url);
        const method = (init && init.method) || (input && input.method) || 'GET';
        const b = (init && init.body) || (input && input.body);
        window.__reqs.push({ via: 'fetch', url: String(url), method: method, body: describe(b) });
      } catch (e) { window.__reqs.push({ via: 'fetch', err: String(e) }); }
      return of.apply(this, arguments);
    };

    const oo = XMLHttpRequest.prototype.open;
    const os = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function (m, u) {
      this.__u = String(u);
      this.__m = m;
      return oo.apply(this, arguments);
    };
    XMLHttpRequest.prototype.send = function (b) {
      try {
        window.__reqs.push({ via: 'xhr', url: this.__u, method: this.__m, body: describe(b) });
      } catch (e) {}
      return os.apply(this, arguments);
    };
    window.__patched = true;
  }
  return { patched: true };
})()
