# Quick Setup Guide

This guide will help you get your portfolio live on GitHub Pages in just a few steps!

## 🚀 Quick Start (5 minutes)

### 1. Customize Your Information

**Replace placeholders in these files:**

- `src/components/Header.js` → Line 35: `"Driner"`
- `src/components/Hero.js` → Line 20: `"Driner"` and update bio
- `src/components/About.js` → Update professional bio
- `src/components/Contact.js` → Update email, phone, location
- `public/index.html` → Update meta tags and title

### 2. Update Links

**Replace all placeholder URLs:**
- `https://github.com/yourusername` → Your GitHub profile
- `https://linkedin.com/in/yourusername` → Your LinkedIn profile  
- `your.email@example.com` → Your email address
- `+1 (555) 123-4567` → Your phone number

### 3. Deploy to GitHub Pages

1. **Create a new repository** on GitHub (e.g., `portfolio`)

2. **Update package.json:**
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

3. **Deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Save

Your portfolio will be live at: `https://yourusername.github.io/portfolio`

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

## ⚡ Pro Tips

1. **Custom Domain:** Add a `CNAME` file to `public/` with your domain
2. **Analytics:** Add Google Analytics to `public/index.html`
3. **SEO:** Update meta tags in `public/index.html`
4. **Performance:** Optimize images before adding them
5. **Mobile:** Test on mobile devices for responsiveness

## 🔧 Troubleshooting

**Build fails?**
- Check for missing commas in JSX
- Ensure all imports are correct
- Run `npm install` to install dependencies

**Deployment issues?**
- Verify homepage URL in package.json
- Check GitHub Pages settings
- Ensure gh-pages branch exists

**Styling problems?**
- Tailwind classes might be purged incorrectly
- Check `tailwind.config.js` content paths

## 📞 Need Help?

- Check the detailed README.md
- Open an issue on GitHub
- Contact: your.email@example.com

---

🎉 **Congratulations!** Your portfolio is ready to showcase your skills to the world! 