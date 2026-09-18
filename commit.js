(async () => {
  const msg = 'Visual and content upgrade - Real images and better translations';
  const pbtn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改...');
  if (!pbtn) return JSON.stringify({ err: 'no page commit btn' });
  pbtn.click();
  await new Promise(r => setTimeout(r, 2500));
  const input = document.getElementById('commit-message-input');
  if (!input) return JSON.stringify({ err: 'no commit msg input' });
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, msg);
  input.dispatchEvent(new Event('input', { bubbles: true }));
  const direct = document.querySelector('input[name="pr-choice"][value="direct"]');
  if (direct && !direct.checked) direct.click();
  await new Promise(r => setTimeout(r, 600));
  const cbtn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改');
  if (!cbtn) return JSON.stringify({ err: 'no modal commit btn', msgVal: input.value });
  cbtn.click();
  await new Promise(r => setTimeout(r, 7000));
  return JSON.stringify({ msgOk: input.value === msg, url: location.href, title: document.title });
})()
