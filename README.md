# CreerWebConsulting - Professional Consulting Website

## Overview

This is a modern, responsive React-based website for CreerWebConsulting, a technology consulting business specializing in web app development, cloud architecture, AI integration, mobile development, and website design. The website showcases the company's services, portfolio, and expertise to potential clients.

## Features

- **Modern UI Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Service Showcases**: Detailed pages for each service offering
- **Portfolio Gallery**: Filterable project showcase
- **Contact Form**: Interactive form for client inquiries
- **About Section**: Company background and team information

## Tech Stack

- React.js
- React Router for navigation
- Styled Components for styling
- Framer Motion for animations
- React Icons for UI icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/creer-web-consulting.git
   cd creer-web-consulting
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Deployment

### Building for Production

To create a production build:

```
npm run build
```

This will create a `build` directory with optimized production files.

### Deployment Options

- **Netlify**: Connect your GitHub repository or upload the build folder
- **Vercel**: Import your project from GitHub
- **AWS S3**: Upload the build folder to an S3 bucket configured for static website hosting
- **GitHub Pages**: Deploy using gh-pages package

## Customization

### Adding Portfolio Projects

Add new projects to the projects array in `src/pages/Portfolio.js`.

### Updating Services

Modify the service details in `src/pages/Services.js`.

### Changing Images

Replace placeholder images in the `public/images/` directory with your own images.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or inquiries about this website, please contact:
- Email: info@creerweb.com
- Phone: (555) 123-4567
