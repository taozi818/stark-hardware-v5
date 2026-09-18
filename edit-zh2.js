(async () => {
  const MSG = 'CRITICAL: Content and Visual Upgrade v5.1';
  const view = document.querySelector('.cm-content').cmTile.view;
  let d = view.state.doc.toString();
  const before = d;

  d = d.replace('<a href="index.html" class="logo">斯塔克卫浴</a>',
                '<a href="index.html" class="logo">STARK SANITARY | 斯塔克卫浴</a>');
  d = d.replace('灵动水生活，精工耀百年', '水之美学<br>精工智造');
  d = d.replace('20载匠心淬炼，深耕中国水暖之乡。专业智造高品质卫浴空间。',
                '20载专注卫浴五金。深耕中国水暖之乡——南安仑苍。为您定义高端卫浴空间。');

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
  return JSON.stringify({ changed: changed, logo: d.indexOf('STARK SANITARY | 斯塔克卫浴') > -1, h1: d.indexOf('水之美学<br>精工智造') > -1, url: location.href });
})()
