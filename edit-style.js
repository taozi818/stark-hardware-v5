(() => {
  const NEW = `/*
  Accio Work SiteBuilder Pro V5
  Brand: 郑在出海 | Warren | 微信：HK-1912
*/

:root {
    --primary-color: #141414;
    --accent-color: #b8860b;
    --text-color: #333333;
    --light-gray: #f4f4f4;
    --white: #ffffff;
    --max-width: 1240px;
    --hero-image: url('https://s.alicdn.com/@sc04/kf/H19c6adebd34f4d779b2e048e5952ad27G/SUS304-Stainless-Steel-Digital-Waterfall-Rain-Shower.jpg');
    --font-sans: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-sans);
    line-height: 1.7;
    color: var(--text-color);
    background-color: var(--white);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

/* Typography */
h1, h2, h3, h4 {
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--primary-color);
}

/* Layout */
.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
}

/* Header & Nav */
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 18px 0;
    transition: var(--transition);
    background: rgba(15, 15, 15, 0.55);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

header.scrolled {
    background: rgba(255, 255, 255, 0.96);
    padding: 14px 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 3px;
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 38px;
}

.nav-links a {
    text-decoration: none;
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--accent-color);
}

header.scrolled .logo,
header.scrolled .nav-links a {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 120px 0;
    color: var(--white);
    background-color: #1a1a1a;
    background-image: linear-gradient(rgba(10, 10, 10, 0.55), rgba(10, 10, 10, 0.68)), var(--hero-image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.hero-content {
    width: 100%;
}

.hero h1 {
    font-size: 52px;
    line-height: 1.25;
    margin-bottom: 24px;
    color: var(--white);
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.55);
}

.hero p {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 1px;
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.92);
    text-shadow: 0 1px 12px rgba(0, 0, 0, 0.55);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 16px 44px;
    border: 2px solid var(--white);
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: var(--transition);
}

.btn:hover {
    background: var(--white);
    color: var(--primary-color);
}

/* Sections */
section {
    padding: 120px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 70px;
}

.section-title h2 {
    font-size: 36px;
}

.section-title h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: var(--accent-color);
    margin: 24px auto 0;
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
}

.product-card {
    background: var(--white);
    border: 1px solid #ececec;
    overflow: hidden;
    text-align: center;
    transition: var(--transition);
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.10);
}

.product-card > h3 {
    font-size: 18px;
    margin-bottom: 12px;
}

.product-card > p {
    font-size: 14px;
    color: #666666;
}

.product-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: var(--light-gray);
}

.product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: var(--transition);
}

.product-card:hover .product-img img {
    transform: scale(1.05);
}

.product-info {
    padding: 26px 20px;
    text-align: center;
}

.product-info h3 {
    font-size: 16px;
}

/* Footer */
footer {
    background: #111111;
    color: #999999;
    padding: 90px 0 40px;
    font-size: 14px;
}

footer h4 {
    color: var(--white);
    font-size: 15px;
    margin-bottom: 20px;
}

footer a {
    color: #999999;
    text-decoration: none;
    transition: var(--transition);
}

footer a:hover {
    color: var(--accent-color);
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
    margin-bottom: 50px;
}

.footer-col ul {
    list-style: none;
}

.footer-col ul li {
    margin-bottom: 10px;
}

.footer-col p {
    margin-bottom: 10px;
}

.copyright {
    border-top: 1px solid #262626;
    padding-top: 30px;
    text-align: center;
    color: #666666;
}

/* Scroll Reveal */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 900px) {
    .hero h1 {
        font-size: 38px;
    }
}

@media (max-width: 768px) {
    header {
        padding: 14px 0;
        background: rgba(15, 15, 15, 0.85);
    }
    nav {
        flex-direction: column;
        gap: 10px;
    }
    .nav-links li {
        margin: 0 12px;
    }
    .nav-links a {
        font-size: 13px;
    }
    .logo {
        font-size: 20px;
    }
    .hero h1 {
        font-size: 30px;
    }
    .hero p {
        font-size: 15px;
    }
    section {
        padding: 80px 0;
    }
    .section-title {
        margin-bottom: 50px;
    }
    .section-title h2 {
        font-size: 26px;
    }
}

/* No-JS fallback: never leave content invisible */
@media (scripting: none) {
    .reveal {
        opacity: 1 !important;
        transform: none !important;
    }
}
`;

  const view = document.querySelector('.cm-content').cmTile.view;
  view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: NEW } });
  const d = view.state.doc;
  return JSON.stringify({
    len: d.length,
    head: d.sliceString(0, 70),
    tail: d.sliceString(Math.max(0, d.length - 70)),
    hasHeroVar: d.toString().indexOf('--hero-image') > -1,
    hasScriptingNone: d.toString().indexOf('scripting: none') > -1
  });
})()
