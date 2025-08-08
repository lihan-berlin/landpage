# Borochi Landing Page

A sophisticated, modern landing page for Borochi - an intelligent energy solutions company. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎥 Video hero section with animated elements
- ⚡ Interactive solar ring animations
- 📱 Fully responsive design
- 🎨 Brand-consistent color scheme and typography
- 📧 Contact form with validation
- 🚀 Optimized performance and SEO

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Playfair Display & Barlow (Google Fonts)
- **Animations**: CSS animations with Tailwind

## Brand Guidelines

This project follows Borochi's comprehensive design system including:

- **Primary Colors**: Brand Blue (#237ebc), Coral Red (#ff7979), Cyan (#68f1fa)
- **Typography**: Playfair Display for headlines, Barlow for body text
- **Visual Elements**: Solar Ring animations and geometric shapes
- **Design Principles**: Minimalism, consistency, and functionality

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Hero section with video
│   │   ├── modules.tsx    # Product modules
│   │   ├── contact.tsx    # Contact form
│   │   └── footer.tsx     # Footer
│   └── ui/               # Reusable UI components
│       ├── button.tsx     # Button component
│       ├── card.tsx       # Card component
│       ├── section.tsx    # Section wrapper
│       └── solar-ring.tsx # Animated solar ring
└── styles/
    └── globals.css        # Global styles and CSS variables
```

## Sections Overview

### Hero Section
- Full-screen video background
- Animated solar ring elements
- Call-to-action buttons with smooth scrolling

### Product Modules
Three main service offerings:
1. **Tailored Architectures** - PV, Battery, EV Charging solutions
2. **Smart Energy Management** - AI-powered energy optimization
3. **Delivery & Service** - Industrial-grade support and guarantees

### Contact Form
- Lead generation form with validation
- Company information display
- Interactive form submission

### Footer
- Company information and global presence
- Navigation links and legal pages

## Customization

### Colors
Brand colors are defined in `tailwind.config.ts` and can be customized:

```typescript
colors: {
  'brand-blue': '#237ebc',
  'brand-coral': '#ff7979',
  'brand-cyan': '#68f1fa',
  // ... other brand colors
}
```

### Typography
Font configurations are in `src/app/layout.tsx`:

```typescript
const playfairDisplay = Playfair_Display({ /* config */ });
const barlow = Barlow({ /* config */ });
```

### Animations
Custom animations are defined in `tailwind.config.ts` and `globals.css`.

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Performance Features

- Image optimization with Next.js Image component
- Font optimization with Google Fonts
- Video compression and optimization
- Lazy loading for images and animations
- SEO optimization with metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Borochi. All rights reserved. 