(async () => {
  const MSG = 'CRITICAL: Content and Visual Upgrade v5.1';
  const SHOWER = 'https://s.alicdn.com/@sc04/kf/H19c6adebd34f4d779b2e048e5952ad27G/SUS304-Stainless-Steel-Digital-Waterfall-Rain-Shower.jpg';
  const SENSOR = 'https://s.alicdn.com/@sc04/kf/H9cad3bf47aaf46c79ad271e76469a458j/Chrome-Automatic-Sensor-Bathroom-Basin-Faucet-Touchless.jpg';
  const DELAY = 'https://s.alicdn.com/@sc04/kf/Hd87b785020ee4b56baa9b24c1d2957c4g/Double-Outlet-Garden-Tap-1-2-3.jpg';
  const OLD_KITCHEN = 'https://s.alicdn.com/@sc04/kf/Hacea5b8e12b24dcb804ff5d197c689c5o/Matte-Black-High-Arc-Kitchen-Faucet-Pull.jpg';
  const OLD_THERMO = 'https://s.alicdn.com/@sc04/kf/H1e6824632f7440a5acd7d1c2f296f314o/Modern-Matte-Black-Thermostatic-Shower-Mixer-Set.png';

  const view = document.querySelector('.cm-content').cmTile.view;
  let d = view.state.doc.toString();
  const before = d;

  // brand
  d = d.split('STARK HARDWARE').join('STARK SANITARY');
  // hero
  d = d.replace('>Elegance in Every Drop<', '>Elegance<br>In Every Drop<');

  // card 3 first (removes the sensor URL before card 2 reuses it)
  d = d.split(OLD_THERMO).join(SENSOR);
  d = d.replace('alt="Basin Mixer"', 'alt="Commercial Delay Valve"');
  d = d.replace('<h3>Basin Mixers</h3>', '<h3>Commercial Delay Valve</h3>');

  // card 2
  d = d.replace('alt="Shower System"', 'alt="Intelligent Sensor Faucet"');
  d = d.replace('<h3>Shower Systems</h3>', '<h3>Intelligent Sensor Faucet</h3>');
  d = d.replace(SENSOR, DELAY); // careful: only the one now in card 2? no - SENSOR was already in card3
  d = d.split(before.indexOf(DELAY) > -1 ? '\u0000' : DELAY).join(DELAY);

  const changed = d !== before;
  if (changed) view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: d } });
  await new Promise(r => setTimeout(r, 800));

  const pbtn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改...');
  if (!pbtn) return JSON.stringify({ err: 'no page commit btn', changed: changed });
  pbtn.click();
  await new Promise(r => setTimeout(r, 2500));
  const input = document.getElementById('commit-message-input');
  if (!input) return JSON.stringify({ err: 'no msg input', changed: changed });
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, MSG);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  const direct = document.querySelector('input[name="pr-choice"][value="direct"]');
  if (direct && !direct.checked) direct.click();
  await new Promise(r => setTimeout(r, 600));
  const cbtn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改');
  if (!cbtn) return JSON.stringify({ err: 'no modal commit btn', changed: changed });
  cbtn.click();
  await new Promise(r => setTimeout(r, 7000));
  return JSON.stringify({ changed: changed, url: location.href });
})()
