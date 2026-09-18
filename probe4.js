(async () => {
  const btn = Array.from(document.querySelectorAll('button')).find(b => /提交更改/.test(b.textContent || ''));
  if (!btn) return 'no btn';
  btn.click();
  await new Promise(r => setTimeout(r, 2000));
  const dlg = document.querySelector('dialog');
  const ta = Array.from(document.querySelectorAll('textarea')).map(t => ({ id: t.id, name: t.name, aria: t.getAttribute('aria-label'), ph: t.placeholder }));
  const inp = Array.from(document.querySelectorAll('input')).filter(e => e.type !== 'hidden').map(e => ({ id: e.id, name: e.name, aria: e.getAttribute('aria-label'), ph: e.placeholder, val: (e.value || '').slice(0, 30), type: e.type }));
  const form = document.querySelector('form[action*="commit"]') ? document.querySelector('form[action*="commit"]').getAttribute('action') : null;
  return JSON.stringify({ dlgOpen: dlg ? dlg.open : null, ta: ta, inp: inp, formAction: form });
})()
