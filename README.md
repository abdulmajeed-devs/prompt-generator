# Prompt Generator Tool

A professional prompt generation tool for creating SEO website prompts, image generation prompts, and Medium article prompts.

## File Structure

The application has been reorganized into separate files for better management and maintainability:

```
prompt generator/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
├── prompt-h.html       # Original single-file version (backup)
└── README.md           # This file
```

## Files Overview

### index.html
- Contains the HTML structure and markup
- Links to external CSS file (`styles.css`)
- Links to external JavaScript file (`script.js`)
- Organized into three main tabs:
  - SEO Website Prompt
  - Image Generation Prompt
  - Medium Article Prompt

### styles.css
- All styling for the application
- CSS custom properties (variables) for theming
- Responsive design rules
- Component-specific styles for:
  - Language dropdowns
  - Country checkboxes
  - Theme selection cards
  - Form elements
  - Output sections

### script.js
- All JavaScript functionality including:
  - Language and country data
  - Theme pages configuration
  - Tab switching logic
  - Form validation and data collection
  - Prompt generation functions for all three types
  - Copy to clipboard functionality

## How to Use

1. Open `index.html` in a web browser
2. Select the tab for the type of prompt you want to generate:
   - **SEO Website Prompt**: For generating complete website structures
   - **Image Generation Prompt**: For social media image creation
   - **Medium Article Prompt**: For blog article generation
3. Fill in the required fields
4. Click the generate button
5. Copy the generated prompt using the "Copy to Clipboard" button

## Benefits of This Structure

### ✅ Better Organization
- Separation of concerns (HTML, CSS, JavaScript)
- Easier to locate and edit specific functionality

### ✅ Improved Maintainability
- Changes to styles only require editing `styles.css`
- JavaScript updates are isolated to `script.js`
- HTML structure is cleaner and easier to read

### ✅ Better Performance
- CSS and JavaScript files can be cached by the browser
- Faster subsequent page loads

### ✅ Easier Collaboration
- Multiple developers can work on different files simultaneously
- Version control is more effective with separate files

### ✅ Scalability
- Easy to add new features or components
- Simple to extend functionality
- Better code reusability

## Browser Compatibility

This tool works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Features

- **Multi-language Support**: 32+ languages
- **Country Targeting**: 80+ countries with language filtering
- **Theme Selection**: 6 website themes (Blog, Business, Service, E-commerce, Portfolio, Landing)
- **SEO Optimization**: Built-in SEO best practices
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Copy to Clipboard**: One-click copy functionality

## Version

v3.0 - Advanced SEO & Multi-Region Support

## Notes

The original single-file version (`prompt-h.html`) has been kept as a backup and reference.
