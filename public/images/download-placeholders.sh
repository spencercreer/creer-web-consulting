#!/bin/bash

# Create directories if they don't exist
mkdir -p images/portfolio
mkdir -p images/services
mkdir -p images/about

# Download placeholder images for services
curl -o images/services/web-development.jpg https://source.unsplash.com/random/600x400/?webdevelopment
curl -o images/services/cloud-architecture.jpg https://source.unsplash.com/random/600x400/?cloud
curl -o images/services/ai-integration.jpg https://source.unsplash.com/random/600x400/?ai
curl -o images/services/mobile-development.jpg https://source.unsplash.com/random/600x400/?mobile
curl -o images/services/website-design.jpg https://source.unsplash.com/random/600x400/?webdesign

# Download placeholder images for portfolio
curl -o images/portfolio/project1.jpg https://source.unsplash.com/random/800x600/?website
curl -o images/portfolio/project2.jpg https://source.unsplash.com/random/800x600/?webapp
curl -o images/portfolio/project3.jpg https://source.unsplash.com/random/800x600/?mobileapp
curl -o images/portfolio/project4.jpg https://source.unsplash.com/random/800x600/?cloud
curl -o images/portfolio/project5.jpg https://source.unsplash.com/random/800x600/?ai
curl -o images/portfolio/project6.jpg https://source.unsplash.com/random/800x600/?design

# Download placeholder images for about section
curl -o images/about/about-img.jpg https://source.unsplash.com/random/600x800/?professional
curl -o images/hero-bg.jpg https://source.unsplash.com/random/1920x1080/?technology

# Download logo placeholder
curl -o logo192.png https://via.placeholder.com/192x192/4a90e2/ffffff?text=CWC
curl -o logo512.png https://via.placeholder.com/512x512/4a90e2/ffffff?text=CWC
curl -o favicon.ico https://via.placeholder.com/64x64/4a90e2/ffffff?text=C

echo "Placeholder images downloaded successfully!"
