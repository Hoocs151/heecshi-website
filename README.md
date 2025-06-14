# Heecshi Discord Bot Website

A modern, responsive website for the Heecshi Discord bot built with React and Tailwind CSS.

![Heecshi](public/img/Logos/favicon.png)

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

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Meta Tags**: React Helmet Async
- **Build Tool**: Create React App
- **Containerization**: Docker

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/heecshi-website.git
   cd heecshi-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
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

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`. You can modify the colors by updating the color palette in the configuration file.

### Components
- `CustomCursor`: Interactive cursor with hover effects
- `AnimatedBackground`: Dynamic particle system background
- `ScrollProgress`: Progress indicator and scroll-to-top button
- `PageTransition`: Smooth page transition animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop devices
- Tablets
- Mobile phones
- Different screen orientations

## 🔧 Development

### Available Scripts

- `npm start`: Runs the development server
- `npm build`: Creates a production build
- `npm test`: Runs the test suite
- `npm run eject`: Ejects from Create React App

### Project Structure

```
heecshi-website/
├── public/
│   └── img/
├── src/
│   ├── Components/
│   ├── layouts/
│   ├── pages/
│   ├── utils/
│   └── App.js
├── Dockerfile
└── tailwind.config.js
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ✨ Authors

- **Hoocshi** - *Project Owner*
- **AI** - *:D*

## 🎉 Acknowledgments

Special thanks to all contributors and the amazing open-source community.