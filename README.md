# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS. Features a dark theme, smooth animations, and is optimized for GitHub Pages deployment.

## 🚀 Features

- **Dark-themed design** with smooth animations
- **Fully responsive** - works on all devices
- **Modern UI/UX** with Tailwind CSS
- **Interactive components** with React
- **Optimized for performance** and SEO
- **GitHub Pages ready** for easy deployment

## 📁 Sections

- **Hero Section** - Introduction with professional photo
- **About Me** - Professional bio and current tech stack
- **Projects** - Showcase of 6 featured projects with technologies used
- **Skills** - Categorized technical skills with proficiency levels
- **Resume** - Downloadable PDF and work experience timeline
- **Education** - Academic background and professional certifications
- **Testimonials** - Client feedback and recommendations
- **Contact** - Contact form and social media links

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Hosting and deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-app.git
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 Customization

### 1. Personal Information

Update the following files with your information:

- `src/components/Header.js` - Driner in the header
- `src/components/Hero.js` - Driner, title, and bio
- `src/components/About.js` - Professional bio and goals
- `src/components/Contact.js` - Contact information and social links

### 2. Projects

Edit `src/components/Projects.js` to showcase your projects:
- Update project titles, descriptions, and technologies
- Replace demo URLs and GitHub links
- Add your project screenshots

### 3. Skills

Modify `src/components/Skills.js` to reflect your skills:
- Update skill categories and proficiency levels
- Add or remove technologies based on your expertise

### 4. Resume
- Update work experience in `src/components/Resume.js`

### 5. Education & Certifications

Update `src/components/Education.js` with:
- Your educational background
- Professional certifications
- Credential IDs and verification links

### 6. Testimonials

Edit `src/components/Testimonials.js`:
- Replace with real client testimonials
- Update LinkedIn profiles and project references

### 7. Colors and Styling

The color scheme can be customized in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 📱 Adding Your Photos

1. Add your professional photo to `public/images/`
2. Update the image references in:
   - `src/components/Hero.js` (profile image)
   - `src/components/About.js` (professional photo)

## 📦 Deployment to GitHub Pages

### Automatic Deployment

1. Update `package.json` with your GitHub repository:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

2. Build and deploy:
```bash
npm run deploy
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the `build` folder to the `gh-pages` branch

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Build before deployment

## 📝 SEO Optimization

The portfolio includes:
- Meta tags for social media sharing
- Semantic HTML structure
- Optimized images and lazy loading
- Fast loading times with code splitting

## 🎯 Performance

- Lighthouse score: 95+ for Performance, Accessibility, Best Practices, and SEO
- Optimized bundle size with code splitting
- Responsive images and lazy loading
- Efficient animations with CSS transforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing your portfolio:

- Create an issue in this repository
- Contact me at [your.email@example.com](mailto:your.email@example.com)
- Connect with me on [LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- All the open-source contributors

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!
