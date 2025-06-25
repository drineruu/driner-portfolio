# Driner Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS. This portfolio showcases personal projects, skills, education, and professional experience with a clean and interactive design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design using Tailwind CSS
- **Interactive Components**: Smooth animations and interactive elements
- **Multi-section Layout**: Organized sections including:
  - Hero section with introduction
  - About me
  - Skills showcase
  - Education background
  - Projects portfolio
  - Testimonials
  - Contact information
- **Resume Integration**: Direct access to downloadable resume
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React & React Icons
- **Build Tool**: React Scripts
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/drineruu/driner-portfolio.git
   cd driner-portfolio/portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── driner-chibi.png        # Character image
│   ├── driner-resume.pdf       # Resume file
│   ├── resume.pdf              # Additional resume
│   └── ...                     # Other public assets
├── src/
│   ├── components/
│   │   ├── About.js            # About section component
│   │   ├── Contact.js          # Contact form/info component
│   │   ├── Education.js        # Education background
│   │   ├── Footer.js           # Footer component
│   │   ├── Header.js           # Navigation header
│   │   ├── Hero.js             # Hero/landing section
│   │   ├── Projects.js         # Projects showcase
│   │   ├── Resume.js           # Resume section
│   │   ├── Skills.js           # Skills display
│   │   └── Testimonials.js     # Testimonials section
│   ├── assets/                 # Images and other assets
│   ├── App.js                  # Main App component
│   ├── App.css                 # App-specific styles
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment config
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project documentation
```

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Deploys the built app to GitHub Pages

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The app automatically deploys when you push to the `main` or `master` branch. The GitHub Actions workflow:

1. Installs dependencies
2. Builds the project
3. Deploys to GitHub Pages

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

The live site will be available at: `https://drineruu.github.io/driner-portfolio`

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the component files in `src/components/` to update your personal information
2. **Resume**: Replace `public/driner-resume.pdf` with your own resume
3. **Images**: Add your images to `public/` or `src/assets/images/`
4. **Styling**: Modify Tailwind classes in components or update `tailwind.config.js`

### Configuration

- **Homepage URL**: Update the `homepage` field in `package.json`
- **Site Title**: Modify the `title` in `public/index.html`
- **Favicon**: Replace `public/favicon.ico` with your own

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For any questions or suggestions, feel free to reach out through the contact form on the website or connect with me on social media.

---

Built with ❤️ using React and Tailwind CSS 