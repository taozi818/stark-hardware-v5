(() => {
  const el = document.querySelector('.cm-content');
  if (!el) return 'no .cm-content';
  const fiberKey = Object.keys(el).find(k => k.startsWith('__reactFiber$'));
  if (!fiberKey) return 'no fiber key; keys=' + Object.keys(el).join(',');
  let f = el[fiberKey];
  let depth = 0;
  const trail = [];
  while (f && depth < 50) {
    depth++;
    const name = (f.type && (f.type.displayName || f.type.name)) || String(f.elementType || f.tag);
    trail.push(f.tag + ':' + name);
    const cands = [];
    if (f.stateNode && typeof f.stateNode === 'object' && !(f.stateNode instanceof Node)) cands.push(['stateNode', f.stateNode]);
    if (f.memoizedProps && typeof f.memoizedProps === 'object') cands.push(['memoizedProps', f.memoizedProps]);
    if (f.memoizedState && typeof f.memoizedState === 'object') cands.push(['memoizedState', f.memoizedState]);
    for (const pair of cands) {
      const src = pair[0], obj = pair[1];
      let keys = [];
      try { keys = Object.keys(obj); } catch (e) { continue; }
      for (const k of keys) {
        let v;
        try { v = obj[k]; } catch (e) { continue; }
        if (v && typeof v === 'object' && v.state && v.state.doc && typeof v.dispatch === 'function') {
          return JSON.stringify({ found: src + '.' + k, depth: depth, trail: trail });
        }
      }
    }
    f = f.return;
  }
  return JSON.stringify({ found: null, trail: trail });
})()
