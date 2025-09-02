#!/bin/bash

echo "🚀 Manual GitHub Pages Deployment"
echo "================================="

# Build the site
echo "📦 Building production version..."
npm run build

# Copy build to temporary directory
echo "📁 Preparing deployment files..."
cp -r build ../temp-deploy
cd ../temp-deploy

# Initialize git in the temp directory
git init
git add .
git commit -m "Deploy Sayid Care website"

# Add remote and push to gh-pages
git remote add origin https://github.com/abdirahman-yy/sayidcare-website.git
git branch -M gh-pages
git push -f origin gh-pages

# Clean up
cd ../SayidCare
rm -rf ../temp-deploy

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at:"
echo "   - https://abdirahman-yy.github.io/sayidcare-website"
echo "   - https://sayidcare.org (after DNS setup)" 