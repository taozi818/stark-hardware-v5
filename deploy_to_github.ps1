# Stark Hardware V5 Deployment Tool
# Author: 郑在出海 | Warren | 微信：HK-1912

Write-Host "--- Stark Hardware V5 Deployment Tool ---" -ForegroundColor Cyan

# 1. Clean up local git state
git remote remove origin 2>$null
git config --local credential.helper ""

# 2. Add correct remote
$remoteUrl = "https://github.com/liangye9527/stark-hardware-v5.git"
git remote add origin $remoteUrl

# 3. Push to GitHub
Write-Host "Deploying to GitHub repository: liangye9527/stark-hardware-v5..." -ForegroundColor Yellow
git branch -M main
git add .
git commit -m "Official V5 Commercial Launch" --allow-empty
git push -u origin main --force

if ($?) {
    Write-Host "SUCCESS: Your site is now deployed to GitHub!" -ForegroundColor Green
    Write-Host "Access Link: https://github.com/liangye9527/stark-hardware-v5" -ForegroundColor Green
} else {
    Write-Host "FAILED: Deployment failed. Please ensure you have authorized GitHub in the chat." -ForegroundColor Red
}
