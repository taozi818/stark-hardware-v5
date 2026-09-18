# Task: Stark Hardware site "looks empty" -> visual/content upgrade

## Scope (original)
1. `src/zh/index.html`: logo -> 斯塔克卫浴; nav -> 首页/公司简介/产品中心/联系我们; hero -> real Alibaba image; 3 Featured Collections images -> real Alibaba URLs.
2. `src/assets/css/styles.css`: hero must render without a local image; better spacing / font weights ("Premium").
3. Root `index.html` redirect must keep working.
4. Other languages if possible.
5. Commit message exactly: `Visual and content upgrade - Real images and better translations`.
6. Do edits via GitHub "Edit file" UI.

## Root cause of "empty" look
- CSS hero pointed at missing local `../img/hero-bg.jpg` -> white hero text on near-white page.
- All product images were `via.placeholder.com` (broken).
- `.reveal` starts `opacity:0` until scrolled.

## Completed (7 files, all committed to main)
| # | File | Change | Status |
|---|------|--------|--------|
| 1 | `src/assets/css/styles.css` | rewrote: `--hero-image` = Alibaba shower JPG, dark gradient overlay, `background-color:#1a1a1a` fallback, glass dark header, heavier weights (600), larger spacing (120px sections / 38px nav), `object-fit:cover` product imgs, responsive 768px, `@media (scripting:none)` reveal fallback, CJK font stack | DONE (6432 B) |
| 2 | `src/zh/index.html` | logo 斯塔克卫浴, nav 公司简介, 3 real collection images, 0 placeholders | DONE (5252 B) |
| 3 | `src/en/index.html` | 3 placeholder images -> real Alibaba images | DONE (7071 B, 3 alicdn, 0 placeholder) |
| 4 | `src/ar/index.html` | real images verified | DONE |
| 5 | `src/de/index.html` | was a 1.7 KB stub -> full page (hero, about, advantages, products w/ real imgs, footer) | DONE (commit 4816db8) |
| 6 | `src/es/index.html` | was a 1.4 KB stub -> full page (translated) | DONE (commit d87ffdb) |
| 7 | `src/vi/index.html` | was a 1.4 KB stub -> full page (translated) | DONE (commit da5d41f) |
| - | `index.html` (root) | already correct: `<meta http-equiv="refresh" content="0; url=src/en/index.html">` | NO CHANGE NEEDED |

## Live verification (https://liangye9527.github.io/stark-hardware-v5/src/zh/index.html)
- title = 斯塔克卫浴 | 专业卫浴水暖五金制造商
- logo = 斯塔克卫浴 ; nav = 首页 / 公司简介 / 产品中心 / 联系我们
- `.hero` background-image contains `Rain-Shower` (real image), background-color rgb(26,26,26)
- 3 product images loaded, naturalWidth = 600 / 2048 / 790 (all OK)

## Technique notes
- GitHub CodeMirror view reachable at `document.querySelector('.cm-content').cmTile.view` -> deterministic full-doc replace via `view.dispatch({changes:{from:0,to:len,insert:NEW}})`.
- Commit dialog: click page button `提交更改...`, set `#commit-message-input` via native value setter + input event, ensure `input[name=pr-choice][value=direct]`, then click modal button `提交更改`.
- `raw.githubusercontent.com` lagged ~minutes; authoritative check is `/commits/main/<path>` then `/commit/<sha>.diff`.

## Artifacts
- Scripts: `edit-style.js`, `edit-zh.js`, `edit-de.js`, `edit-es.js`, `edit-vi.js`, `fix-and-commit.js`, `commit.js`, `verify-all.js`
- Screenshot: see final report CDN URL
