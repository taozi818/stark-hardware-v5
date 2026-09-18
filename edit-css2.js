(async () => {
  const MSG = 'CRITICAL: Content and Visual Upgrade v5.1';
  const HERO = 'https://s.alicdn.com/@sc04/kf/H19c6adebd34f4d779b2e048e5952ad27G/SUS304-Stainless-Steel-Digital-Waterfall-Rain-Shower.jpg';

  const view = document.querySelector('.cm-content').cmTile.view;
  let d = view.state.doc.toString();
  const before = d;

  // .hero -> direct Alibaba URL instead of var(--hero-image)
  d = d.replace(', var(--hero-image);', ", url('" + HERO + "');");
  // .logo font-family
  d = d.replace(".logo {\n    font-size: 24px;", ".logo {\n    font-family: 'Inter', sans-serif;\n    font-size: 24px;");
  // load Inter
  if (d.indexOf('fonts.googleapis.com') === -1) {
    d = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');\n" + d;
  }

  const changed = d !== before;
  if (changed) view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: d } });
  await new Promise(r => setTimeout(r, 800));

  const okHero = d.indexOf("url('" + HERO + "')") > -1;
  const okLogo = d.indexOf("font-family: 'Inter', sans-serif;") > -1;

  const pbtn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改...');
  if (!pbtn) return JSON.stringify({ err: 'no page commit btn', changed: changed, okHero: okHero, okLogo: okLogo });
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
  return JSON.stringify({ changed: changed, okHero: okHero, okLogo: okLogo, url: location.href });
})()
