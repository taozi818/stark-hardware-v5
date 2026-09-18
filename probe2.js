(() => {
  const el = document.querySelector('.cm-content');
  const t = el && el.cmTile;
  if (!t) return 'no cmTile';
  const keys = Object.keys(t);
  const info = { keys: keys };
  try { info.hasView = !!(t.view); } catch (e) { info.hasView = 'err'; }
  try { info.viewKeys = t.view ? Object.keys(t.view) : null; } catch (e) {}
  let v = t.view;
  if (v && v.state && v.state.doc) {
    info.docLen = v.state.doc.length;
    info.head = v.state.doc.sliceString(0, 120);
    info.tail = v.state.doc.sliceString(Math.max(0, v.state.doc.length - 120));
  }
  return JSON.stringify(info);
})()
