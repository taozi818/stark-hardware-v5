(() => {
  const hero = document.querySelector('.hero');
  const cs = hero ? getComputedStyle(hero) : null;
  const imgs = Array.from(document.images).map(i => ({ src: (i.currentSrc || i.src).slice(-45), ok: i.naturalWidth > 0, w: i.naturalWidth }));
  return JSON.stringify({
    title: document.title,
    logo: (document.querySelector('.logo') || {}).textContent,
    nav: Array.from(document.querySelectorAll('.nav-links a')).map(a => a.textContent),
    heroBgHasShower: cs ? cs.backgroundImage.indexOf('Rain-Shower') > -1 : null,
    heroBgColor: cs ? cs.backgroundColor : null,
    imgs: imgs,
    revealTotal: document.querySelectorAll('.reveal').length,
    revealHidden: document.querySelectorAll('.reveal').length - document.querySelectorAll('.reveal.active').length
  });
})()
