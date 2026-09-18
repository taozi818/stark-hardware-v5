(() => {
  const dlg = document.querySelector('dialog');
  const inputs = Array.from(document.querySelectorAll('input, textarea')).map(e => ({
    id: e.id, name: e.name, ph: e.placeholder, aria: e.getAttribute('aria-label'),
    val: (e.value || '').slice(0, 40), type: e.type
  }));
  const btns = Array.from(document.querySelectorAll('button')).map(b => ({
    t: (b.textContent || '').trim().slice(0, 40), id: b.id, name: b.name
  })).filter(b => /提交|commit|Commit/.test(b.t));
  let rad = Array.from(document.querySelectorAll('input[type=radio]')).map(r => ({ id: r.id, val: r.value, checked: r.checked, aria: r.getAttribute('aria-label') }));
  return JSON.stringify({ hasDialog: !!dlg, dlgOpen: dlg ? dlg.open : null, inputs: inputs, commitBtns: btns, radios: rad });
})()
