(async () => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === '提交更改');
  if (!btn) return 'no modal commit btn';
  btn.click();
  await new Promise(r => setTimeout(r, 5000));
  return JSON.stringify({ url: location.href, title: document.title });
})()
