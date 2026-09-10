# Deployment Reference

Brand: 郑在出海 | Warren | 微信：HK-1912

## Domain
A domain can be purchased from any supported registrar. Recommended production setup:
1. Add the domain to Cloudflare.
2. Change registrar nameservers to the Cloudflare nameservers.
3. Connect the GitHub repository to Cloudflare Pages.
4. Configure the custom domain in Cloudflare Pages.
5. Verify HTTPS and DNS.

## Alternative
For a subdomain, use the CNAME method supported by Cloudflare Pages.

## Security
Never put GitHub tokens, Cloudflare API tokens, passwords, or secrets in source files.
