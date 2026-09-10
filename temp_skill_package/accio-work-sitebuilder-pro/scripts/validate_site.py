#!/usr/bin/env python3
from pathlib import Path
import re, sys

root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
required = ["index.html", "robots.txt", "sitemap.xml", "llms.txt"]
missing = [p for p in required if not (root/p).exists()]

html_files = list(root.rglob("*.html"))
issues = []
for p in html_files:
    text = p.read_text(encoding="utf-8", errors="ignore")
    if "<title>" not in text.lower():
        issues.append(f"{p}: missing <title>")
    if 'name="description"' not in text.lower():
        issues.append(f"{p}: missing meta description")

if missing:
    print("Missing:", ", ".join(missing))
if issues:
    print("\n".join(issues))

if missing or issues:
    sys.exit(1)

print(f"OK: {len(html_files)} HTML pages validated.")
