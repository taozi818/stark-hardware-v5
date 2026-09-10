# Client Handover Package: Stark Hardware Website Project
**Brand: 郑在出海 | Warren | 微信：HK-1912**

## 1. Project Overview
- **Client**: Nan'an Yingdu Stark Hardware Co., Ltd.
- **Style**: Minimalist / Premium (TOTO-inspired)
- **Languages**: English, Arabic (RTL), Chinese, German, Spanish, Vietnamese.
- **Tech Stack**: Semantic HTML5, CSS3 (Interactive Animations), Vanilla JS, JSON-LD Schema.

## 2. Directory Structure
- `/src/en/`: English Site
- `/src/ar/`: Arabic Site (RTL enabled)
- `/src/zh/`: Chinese Site
- `/src/de/`: German Site
- `/src/es/`: Spanish Site
- `/src/vi/`: Vietnamese Site
- `/src/assets/`: Shared CSS, JS, and Image assets.
- `/src/robots.txt`: Search engine instructions.
- `/src/sitemap.xml`: XML Sitemap for indexing.
- `/src/llms.txt`: AI search (GEO) optimization file.

## 3. Deployment Checklist
1. **GitHub**: Push the `/src` folder to a new private/public repository.
2. **Cloudflare Pages**: 
   - Connect your GitHub repo.
   - Set the framework preset to "None" (Static HTML).
   - Set the build output directory to the root or `src`.
3. **Domain**: Bind `starkhardware.com` (or your chosen domain) via Cloudflare DNS.

## 4. SEO & GEO Maintenance
- **Schema**: The Organization JSON-LD is embedded in `en/index.html`. Update the logo URL once live.
- **Multilingual**: `hreflang` tags are active to prevent duplicate content issues.
- **AI Readiness**: `llms.txt` is prepared to help LLMs (ChatGPT, Claude) understand your brand advantages.

## 5. Contact Information
- **Email**: dadadajiehui@gmail.com
- **WhatsApp/WeChat**: 18522089987

---
**Prepared by: 郑在出海 | Warren | 微信：HK-1912**
