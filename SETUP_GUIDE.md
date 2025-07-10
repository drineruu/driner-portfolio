# Quick Setup Guide

This guide will help you get your portfolio live on GitHub Pages in just a few steps!

## 🚀 Quick Start (5 minutes)
### Deploy to GitHub Pages

1. **Create a new repository** on GitHub (e.g., `portfolio`)

2. **Update package.json:**
   ```json
   "homepage": "https://drineruu.github.io/portfolio"
   ```

3. **Deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/drineruu/portfolio.git
   git push -u origin main
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Save


## 🎨 Next Steps (Customize Later)

### Add Your Projects
Edit `src/components/Projects.js`:
- Replace demo projects with your own
- Update GitHub links and live demo URLs
- Add project screenshots to `public/images/`

### Add Your Photo
1. Add your photo to `public/images/profile.jpg`
2. Update image references in Hero and About components

### Update Skills
Modify `src/components/Skills.js`:
- Adjust skill levels (0-100)
- Add/remove technologies
- Update categories

### Replace Resume
- Add your resume PDF to `public/resume.pdf`
- Update work experience in `src/components/Resume.js`

### Add Real Testimonials
Edit `src/components/Testimonials.js`:
- Replace with actual client feedback
- Update LinkedIn profiles

## 🛠️ Development Commands

```bash
npm start          # Start development server
npm run build      # Create production build
npm run deploy     # Deploy to GitHub Pages
```