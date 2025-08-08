# Borochi Design System

## Brand Overview

Borochi is a brand focused on intelligent energy solutions, delivering turnkey clean-energy systems for factories, business parks, and hospitals. The brand features a modern, minimalist design style that emphasizes technological innovation and sustainability.

## Project Requirements

### Landing Page Content Structure

#### Hero Section
- **Main Title**: "Powering Industry with Intelligent Energy"
- **Subtitle**: From factories to business parks and hospitals, Borochi delivers turnkey clean-energy systems that cut operating costs, unlock new revenue streams, and keep critical operations running—today and for decades to come.

#### Module 1: Tailored Architectures for Every Site
- **PV + Battery + EV Charging**: Rooftop solar from 100 kWp upward, paired with high-performance storage and fleet/visitor chargers. You use your own green power first, store the surplus, and shave peak-rate costs while showcasing sustainability.
- **Standalone Battery Trading Hubs**: For plants with spare grid capacity, we add large-scale storage that charges off-peak and sells when prices spike, creating a new profit centre and supporting grid stability.
- **PV + Storage + Heat Pumps**: Ideal for hotels, hospitals, and care homes. Solar-charged batteries and high-efficiency heat pumps deliver simultaneous cuts to electricity and heating bills while slashing emissions.

#### Module 2: Smart Energy Management & Market Access
**From Compliance to Monetisation—All in One Platform**

Our cloud EMS gives real-time oversight of generation, storage, loads, and chargers. AI schedules dispatch to maximise self-consumption, avoid high-tariff imports, and meet §14a EnWG requirements. Optional market modules let your battery join Germany's intraday and ancillary-service markets—buying low, selling high, and earning reliability payments. You gain certified audits, automated reporting, and continuous optimisation without extra headcount.

#### Module 3: Delivery, Service, and Guarantees
**Turnkey Projects Backed by Industrial-Grade Support**

- **EPC, PPA, or BOT**: Choose outright ownership or zero-CapEx power-purchase models; Borochi finances, builds, and operates to stringent VDE/DIN/IEC standards.
- **Dedicated Account & SLA**: 4-hour remote response, 24-hour on-site, and ≥99.8% system availability, with stocked spares and preventive maintenance schedules.
- **24/7 SCADA & IoT Monitoring**: Live dashboards, automated alerts, and data-driven asset-health analytics keep downtime near zero and prove savings to stakeholders.

#### Module 4: Form Section
Contact form area for lead generation.

#### Footer Content
"With local engineering teams in Berlin, Suzhou, and Singapore, Borochi combines global expertise with on-the-ground service—so your energy transition arrives on time, on budget, and with measurable returns." (can be centered in smaller text)

## Logo Guidelines

### Primary Logo
- **Usage**: On white backgrounds or dark brand color backgrounds
- **Minimum Size**: Height no less than 2.9mm, width no less than 10mm
- **Safe Zone**: Clear space around the logo should be at least the width of one 'h' from the wordmark
- **Don'ts**: 
  - Do not use in full blue or any other colors
  - Do not distort the logo
  - Do not add visual effects
  - Do not use as part of a sentence
  - Do not tilt the logo

### App Icon
- **Design**: Use only the "B" letter with white background
- **Usage**: Mobile application icon only

## Color System

### Primary Colors
- **B01** (Primary Blue): `#237ebc`
  - CMYK: 80/45/5/0
  - Usage: Brand primary color, logo color

### Secondary Colors
- **B02** (Light Blue): `#c3eaff`
  - CMYK: 21/0/0/0
  
- **R01** (Coral Red): `#ff7979`
  - CMYK: 0/70/45/0
  
- **R02** (Light Red): `#ffd1d1`
  - CMYK: 0/20/10/0
  
- **C01** (Cyan): `#68f1fa`
  - CMYK: 45/0/10/0
  
- **C02** (Light Cyan): `#cffcff`
  - CMYK: 15/0/2/0

### Neutral Colors
- **K01** (Deep Black): `#231f20`
  - CMYK: 70/65/55/70
  - Usage: Primary text color
  
- **K02** (Medium Gray): `#ada7a9`
  - CMYK: 35/30/25/0
  
- **K03** (Light Gray): `#e9e6e6`
  - CMYK: 7/7/7/0
  
- **White**: `#ffffff`
  - CMYK: 0/0/0/0

## Typography System

### Headlines
- **Font**: Playfair Display Extrabold
- **Usage**: Main titles, headlines
- **Line Height**: Font size × 1.2

### Subheadlines
- **Font**: Barlow Bold
- **Usage**: Subheadings, emphasis text
- **Font Size**: Headline font size ÷ 2.25
- **Line Height**: Font size × 1.1

### Body Text
- **Font**: Barlow Regular
- **Usage**: Body content
- **Font Size**: Subheadline font size × (1/1.3)
- **Line Height**: Font size × 1.3
- **Color**: K01 (Deep Black) or White

## Visual Elements

### Solar Ring
- **Shape**: 3/4 circle
- **Usage**: Emphasize important content
- **Color Schemes**: 
  - Scheme 1: R01 (Coral Red) outline + white background
  - Scheme 2: C01 (Cyan) outline + B01 (Primary Blue) background

### Visual Element A
- **Shapes**: Full circle, half circle, 1/4 circle
- **Design**: Black LCD screen effect with blue lines
- **Usage**: Enhance product identity and aesthetic impact

### Visual Element B
- **Shape**: Half circle with 1/8th cut off by canvas edge
- **Concept**: Represents energy, change, and communication
- **Colors**: Supports various color combinations from brand palette

## Design Principles

### Minimalism
- Keep designs clean and simple
- Avoid over-decoration
- Value whitespace

### Consistency
- Follow color guidelines strictly
- Maintain consistent typography usage
- Apply visual elements consistently

### Functionality
- Design serves function
- Ensure readability and usability
- Focus on user experience

## Next.js Landing Page Implementation

### Page Structure
1. **Hero Section**
   - Main title: Playfair Display Extrabold, large size
   - Subtitle: Barlow Bold, medium size
   - Description: Barlow Regular
   - CTA button: Use B01 primary color

2. **Modules 1-3: Product Features**
   - Titles: Barlow Bold
   - Content: Barlow Regular
   - Use Solar Ring elements to highlight each module
   - Card-based layout with white background and subtle shadows

3. **Module 4: Contact Form**
   - Clean form design
   - Input fields using brand color scheme
   - Submit button using B01 primary color

4. **Footer Section**
   - Footer content centered, smaller Barlow Regular font

### Color Application
- **Main Background**: White (#ffffff)
- **Primary Text**: K01 (#231f20)
- **Accent Color**: B01 (#237ebc) for buttons, links, important elements
- **Secondary Accents**: C01 (#68f1fa) and R01 (#ff7979) for icons and decorative elements
- **Section Backgrounds**: Use light tones B02 (#c3eaff), C02 (#cffcff), R02 (#ffd1d1) to differentiate modules

### Visual Elements Application
- **Solar Ring**: Use beside each module title with different color schemes
- **Visual Element A**: As section dividers and decoration
- **Visual Element B**: As dynamic decorative elements at page edges

### Layout Guidelines
- **Responsive Design**: Mobile-first approach
- **Whitespace**: Generous padding and margins
- **Visual Hierarchy**: Clear hierarchy through font sizes, colors, and spacing
- **Readability**: Ensure text readability across different backgrounds

### Component Design Standards
- **Buttons**: 
  - Primary: B01 background + white text
  - Secondary: Transparent background + B01 border + B01 text
- **Cards**: White background, subtle shadow, rounded corners
- **Form Elements**: Clean borders, brand color on focus
- **Icons**: Linear style, using brand color palette

### Technical Implementation
- **Font Loading**: Google Fonts or local font files
- **Color System**: CSS custom properties or Tailwind configuration
- **Component Library**: Custom components based on brand guidelines
- **Animations**: Subtle hover effects and scroll animations