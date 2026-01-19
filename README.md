# Tiara of Persia - Restaurant Website

A beautiful React website for Tiara of Persia restaurant, featuring Persian, Greek, and Turkish cuisine.

## Features

- Responsive design for all devices
- Smooth scroll animations with GSAP
- Modern UI with elegant gold and dark color scheme
- Interactive menu and gallery sections
- Mobile-friendly navigation

## Tech Stack

- React 18
- Vite
- GSAP (GreenSock Animation Platform)
- CSS3 with custom properties

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173/tiara/ in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The site will automatically deploy when you push to the `main` branch

### Option 2: Manual Deployment

1. Update the `homepage` in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/tiara"
   ```

2. Update the `base` in `vite.config.js` if your repository name is different:
   ```javascript
   base: '/your-repo-name/'
   ```

3. Run:
   ```bash
   npm run deploy
   ```

## Configuration

To change the repository name (base URL):

1. Edit `vite.config.js`:
   ```javascript
   base: '/your-repo-name/'
   ```

2. Edit `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

## License

This project was created for demonstration purposes.
