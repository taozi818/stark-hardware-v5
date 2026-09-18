(async () => {
  const MSG = 'CRITICAL: Content and Visual Upgrade v5.1';
  const btns = () => Array.from(document.querySelectorAll('button'));
  const txt = b => (b.textContent || '').trim();
  const pbtn = btns().find(b => /^Commit changes/.test(txt(b)));
  if (!pbtn) return JSON.stringify({ err: 'no page btn', all: btns().map(txt).filter(Boolean) });
  pbtn.click();
  await new Promise(r => setTimeout(r, 3500));
  const input = document.getElementById('commit-message-input') || document.querySelector('input[name="commit-message"]');
  if (!input) return JSON.stringify({ err: 'no msg input', inputs: Array.from(document.querySelectorAll('input')).map(i => i.id + '|' + i.name + '|' + i.type) });
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, MSG);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
  await new Promise(r => setTimeout(r, 300));
  const radios = Array.from(document.querySelectorAll('input[type="radio"]'));
  const direct = radios.find(r => r.value === 'direct');
  if (direct && !direct.checked) { direct.click(); await new Promise(r => setTimeout(r, 800)); }
  const cbtn = btns().find(b => txt(b) === 'Commit changes');
  if (!cbtn) return JSON.stringify({ err: 'no modal commit btn', all: btns().map(txt).filter(Boolean), radios: radios.map(r => r.value + ':' + r.checked) });
  cbtn.click();
  await new Promise(r => setTimeout(r, 10000));
  return JSON.stringify({ done: true, msg: input.value, direct: direct ? direct.checked : null, url: location.href });
})()
