# Heecshi Discord Bot Website

<div align="center">

![Heecshi](public/img/Logos/favicon.png)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, responsive website for the Heecshi Discord bot built with Next.js and Tailwind CSS. Experience seamless navigation, beautiful animations, and a user-friendly interface.

[Demo](https://heecshi.com) · [Report Bug](https://github.com/yourusername/heecshi-website/issues) · [Request Feature](https://github.com/yourusername/heecshi-website/issues)

</div>

## 📌 Table of Contents
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Development](#-development)
- [📊 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👥 Authors](#-authors)
- [🙏 Acknowledgments](#-acknowledgments)

## ✨ Features

- 🎨 Modern UI with glassmorphism effects
- 🌟 Smooth page transitions and animations
- 🖱️ Custom interactive cursor
- 🎭 Dynamic particle background
- 📱 Fully responsive design
- 🚀 Optimized performance
- 🌐 SEO friendly
- 🎯 Easy navigation
- 📜 Terms of Service and Privacy Policy pages
- 🌙 Dark mode support
- 🔒 Security best practices
- 🌍 Internationalization ready

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [React Context](https://reactjs.org/docs/context.html)
- **Meta Tags**: [Next SEO](https://github.com/garmeeh/next-seo)
- **Containerization**: [Docker](https://www.docker.com/)
- **Package Manager**: [npm](https://www.npmjs.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Code Formatting**: [Prettier](https://prettier.io/)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/heecshi-website.git
   cd heecshi-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The site will be available at `http://localhost:3000`

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t heecshi-website .
   ```

2. Run the container:
   ```bash
   docker run -p 80:80 heecshi-website
   ```

## 🎨 Customization

### Theme Configuration
The website's theme is fully customizable through:
- `tailwind.config.js` - Colors, fonts, and design tokens
- `src/styles/globals.css` - Global styles and CSS variables
- `src/theme/index.js` - Theme context and dark mode settings

### Components
Our modular components include:
- `CustomCursor`: Interactive cursor with hover effects
- `AnimatedBackground`: Dynamic particle system background
- `ScrollProgress`: Progress indicator and scroll-to-top button
- `PageTransition`: Smooth page transition animations
- `ThemeToggle`: Dark/Light mode switcher
- `LanguageSelector`: Internationalization support

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 💻 Desktop (1200px+)
- 💻 Laptop (1024px)
- 📱 Tablet (768px)
- 📱 Mobile (320px+)
- 📱 Different screen orientations

## 🔧 Development

### Available Scripts

- `npm run dev`: Starts development server
- `npm run build`: Creates production build
- `npm start`: Serves production build
- `npm run lint`: Runs ESLint
- `npm run format`: Formats code with Prettier
- `npm run test`: Runs Jest tests
- `npm run analyze`: Analyzes bundle size

### Project Structure
```
heecshi-website/
├── public/
│   ├── img/
│   └── locales/
├── src/
│   ├── components/
│   │   ├── common/
│   │   └── layout/
│   ├── pages/
│   ├── styles/
│   ├── theme/
│   ├── utils/
│   └── config/
├── tests/
├── Dockerfile
├── docker-compose.yml
└── tailwind.config.js
```

## 📊 Performance

Our website achieves high performance scores:
- 🚀 98+ Performance
- ♿ 100 Accessibility
- 🔍 100 SEO
- ✨ 98+ Best Practices

### Optimizations
- Image optimization with Next.js Image
- Code splitting and lazy loading
- CSS purging with Tailwind
- Efficient caching strategies
- Minified production build

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Hoocshi** - *Project Owner* - [GitHub Profile](https://github.com/Hoocs151)
- **AI** - *Boss :D* - 🤖

## 🙏 Acknowledgments

- Special thanks to all contributors
- Amazing open-source community
- [Shields.io](https://shields.io/) for badges
- [Heroicons](https://heroicons.com/) for icons
- [unDraw](https://undraw.co/) for illustrations