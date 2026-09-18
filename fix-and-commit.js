(async () => {
  const msg = 'Visual and content upgrade - Real images and better translations';
  const K = 'https://s.alicdn.com/@sc04/kf/Hacea5b8e12b24dcb804ff5d197c689c5o/Matte-Black-High-Arc-Kitchen-Faucet-Pull.jpg';
  const S = 'https://s.alicdn.com/@sc04/kf/H1e6824632f7440a5acd7d1c2f296f314o/Modern-Matte-Black-Thermostatic-Shower-Mixer-Set.png';
  const B = 'https://s.alicdn.com/@sc04/kf/H9cad3bf47aaf46c79ad271e76469a458j/Chrome-Automatic-Sensor-Bathroom-Basin-Faucet-Touchless.jpg';

  let view = null;
  for (let i = 0; i < 20; i++) {
    const c = document.querySelector('.cm-content');
    if (c && c.cmTile && c.cmTile.view) { view = c.cmTile.view; break; }
    await new Promise(r => setTimeout(r, 500));
  }
  if (!view) return JSON.stringify({ err: 'no editor' });

  let d = view.state.doc.toString();
  const before = d;
  d = d.replace(/https:\/\/via\.placeholder\.com\/[^"'<> ]*Kitchen[^"'<> ]*/gi, K);
  d = d.replace(/https:\/\/via\.placeholder\.com\/[^"'<> ]*Shower[^"'<> ]*/gi, S);
  d = d.replace(/https:\/\/via\.placeholder\.com\/[^"'<> ]*Basin[^"'<> ]*/gi, B);
  const changed = d !== before;
  if (changed) view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: d } });
  await new Promise(r => setTimeout(r, 800));

  const remaining = (d.match(/via\.placeholder\.com/g) || []).length;
  const alicdn = (d.match(/s\.alicdn\.com/g) || []).length;

  const pbtn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改...');
  if (!pbtn) return JSON.stringify({ err: 'no page commit btn', changed: changed, remaining: remaining, alicdn: alicdn });
  pbtn.click();
  await new Promise(r => setTimeout(r, 2500));
  const input = document.getElementById('commit-message-input');
  if (!input) return JSON.stringify({ err: 'no msg input', changed: changed });
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, msg);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  const direct = document.querySelector('input[name="pr-choice"][value="direct"]');
  if (direct && !direct.checked) direct.click();
  await new Promise(r => setTimeout(r, 600));
  const cbtn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改');
  if (!cbtn) return JSON.stringify({ err: 'no modal commit btn', changed: changed });
  cbtn.click();
  await new Promise(r => setTimeout(r, 7000));
  return JSON.stringify({ changed: changed, remaining: remaining, alicdn: alicdn, url: location.href });
})()
