(async () => {
  const msg = 'Visual and content upgrade - Real images and better translations';
  const input = document.getElementById('commit-message-input');
  if (!input) return 'no commit-message-input';
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  input.focus();
  setter.call(input, msg);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  await new Promise(r => setTimeout(r, 400));
  const direct = document.querySelector('input[name="pr-choice"][value="direct"]');
  if (direct && !direct.checked) { direct.click(); }
  await new Promise(r => setTimeout(r, 200));
  const radios = Array.from(document.querySelectorAll('input[name="pr-choice"]')).map(r => ({ v: r.value, checked: r.checked }));
  const btns = Array.from(document.querySelectorAll('button')).map((b, i) => ({ i: i, t: (b.textContent || '').trim().slice(0, 30), type: b.type })).filter(b => /提交更改/.test(b.t));
  return JSON.stringify({ setOk: input.value === msg, val: input.value, radios: radios, btns: btns });
})()
