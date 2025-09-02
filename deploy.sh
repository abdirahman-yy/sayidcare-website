#!/bin/bash

echo "🚀 Sayid Care Website Deployment Script"
echo "========================================"

echo "📦 Building production version..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Build folder created at: ./build"
    echo "📊 Build size:"
    du -sh build/
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Drag ./build folder to netlify.com"
    echo "2. Run 'npm run deploy' (after GitHub setup)"
    echo "3. Upload ./build folder to your hosting provider"
    echo ""
    echo "🔗 Your website will be available at: https://sayidcare.org"
    echo "📧 Contact form: Opens user's email client (no setup required)"
    echo ""
    echo "✨ Deployment ready! Check DEPLOYMENT_GUIDE.md for detailed instructions."
else
    echo "❌ Build failed! Check errors above."
    exit 1
fi 