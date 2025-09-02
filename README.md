# Sayid Care - Assisted Living Website

A professional, responsive React website for Sayid Care, a family-owned assisted living facility in South St. Paul, Minnesota.

## Features

- **Modern React Architecture** - Built with functional components and hooks
- **Responsive Design** - Mobile-first approach that works on all devices
- **Accessibility Focused** - High contrast, keyboard navigation, semantic HTML
- **Professional Typography** - Uses Playfair Display and Inter fonts to match the brand
- **Smooth Animations** - Scroll-triggered animations and smooth scrolling navigation
- **Contact Form** - Functional contact form with validation
- **No Logo Dependency** - Clean typography-based branding as requested

## Design Elements

### Color Scheme
- **Primary**: Navy blue (#2c3e50) - matches PDF design
- **Secondary**: Blue (#2c5aa0) - for accents and buttons  
- **Accent**: Yellow (#fbbf24) - for highlights and CTAs
- **Neutral**: Grays for text and backgrounds

### Typography
- **Headlines**: Playfair Display (serif) - elegant and professional
- **Body Text**: Inter (sans-serif) - clean and readable
- **Brand**: Uppercase Playfair Display with letter spacing

### Sections
1. **Hero** - Dark navy background with compelling headline
2. **About** - Family-owned business story with key stats
3. **Services** - 6 core services with icons
4. **Facility** - Home features and accessibility
5. **Waivers** - Accepted payment options
6. **Contact** - Contact info and functional form
7. **Footer** - Complete site information

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The site will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js & Navbar.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Services.js & Services.css
│   ├── Facility.js & Facility.css
│   ├── Waivers.js & Waivers.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
public/
├── index.html
package.json
```

## Key Information

### Contact Details
- **Phone**: 651.983.1550
- **Email**: contact@sayidcare.com
- **Address**: 6 Oak Ridge Drive, South St. Paul, MN 55075

### Services Highlighted
- 24-hour personalized care
- Registered Nurse (RN) on-site
- Home-cooked meals (3x daily + snacks)
- Housekeeping and laundry
- Help with daily living activities
- Complimentary internet and cable

### Payment Options
- CADI Waiver
- Traumatic Brain Injury Waiver
- Elderly Waiver
- Private pay
- Most long-term care insurance

## Customization

### Adding Images
Replace the image placeholders in the components with actual photos:
- Hero section: Warm home environment
- Facility section: Exterior home photo
- About section: Care team photos

### Contact Form
The contact form currently simulates submission. To connect to a real backend:
1. Update the `handleSubmit` function in `Contact.js`
2. Replace the setTimeout simulation with actual API call
3. Add proper error handling

### Content Updates
All content is easily editable in the component files. Key areas:
- Services array in `Services.js`
- Features array in `Facility.js`
- Waivers array in `Waivers.js`

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License
This project is proprietary to Sayid Care.

---

**Sayid Care** - Dignified care, personalized for you 