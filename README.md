# Muhammad Bilal Maulidan - Portfolio Website

A clean, elegant, and fully responsive portfolio website showcasing projects, skills, and experience.

## Features

✨ **Modern Design**
- Minimalist and elegant UI with smooth animations
- Gradient accents and professional typography
- Fully responsive across all devices

🌙 **Dark Mode**
- Toggle between light and dark themes
- Theme preference saved to browser localStorage
- Eye-friendly dark mode for night viewing

📱 **Responsive Layout**
- Mobile-first approach
- Optimized for desktop, tablet, and mobile devices
- Flexible grid layouts

🚀 **Multiple Pages**
- **Homepage**: Hero section with featured projects
- **About**: Skills, experience, and interests
- **Projects**: Complete project portfolio with descriptions
- **Contact**: Quick links to get in touch

⌨️ **Keyboard Shortcuts**
- `Alt + H` - Go to Home
- `Alt + A` - Go to About
- `Alt + P` - Go to Projects
- `Alt + T` - Toggle Dark/Light Mode

## Project Structure

```
portfolio/
├── index.html          # Homepage
├── about.html          # About page with skills & experience
├── projects.html       # Projects showcase
├── styles.css          # All styling (with dark mode support)
├── script.js           # Interactive features & dark mode toggle
└── README.md           # This file
```

## Getting Started

### Option 1: Open Directly in Browser
Simply double-click `index.html` or open it with your preferred browser.

### Option 2: Use a Local Server
If you have Python installed:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Or with Node.js:
```bash
npx http-server
```

### Option 3: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Customization

### Update Your Information

1. **Name & Title**: Edit the hero section in `index.html`
2. **About Section**: Customize the bio in `about.html`
3. **Skills**: Update the skills grid in `about.html`
4. **Experience**: Add your work experience in `about.html`
5. **Projects**: Edit projects in `projects.html` with:
   - Project title and description
   - Technologies used (tags)
   - Links to live demo and GitHub repo

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Change main accent color */
    --secondary-color: #ec4899;    /* Change secondary accent */
    /* ... other variables ... */
}
```

### Add Project Images

Replace the emoji placeholders (`🚀`, `📱`, etc.) in `projects.html` with actual images:
```html
<img src="path/to/image.jpg" alt="Project image">
```

### Update Contact Links

Edit the contact section in `index.html`:
- Replace email with your actual email
- Update LinkedIn profile URL
- Update GitHub profile URL

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: No external dependencies or frameworks
- **Fast Loading**: Pure HTML, CSS, and JavaScript
- **Optimized**: Minimal CSS with efficient selectors

## Features Demo

### Dark Mode
Click the moon icon (🌙) in the navigation to toggle dark mode. Your preference is saved automatically.

### Smooth Scrolling
Click any navigation link or "Get In Touch" button to smoothly scroll to sections.

### Responsive Design
Resize your browser window to see the responsive layout adapt seamlessly.

## Tips for Best Results

1. **Add Profile Picture**: Replace the avatar placeholder with your actual photo
2. **Keep It Updated**: Regularly update your projects and skills
3. **Add Social Links**: Update the contact section with your social profiles
4. **Customize Colors**: Match the color scheme to your personal brand
5. **Add Real Projects**: Include links to actual projects or deployments

## Future Enhancements

Potential additions to consider:
- Blog section for technical articles
- Contact form with email integration
- Project filtering by technology
- Resume/CV download
- Testimonials section
- More interactive animations

## License

This portfolio template is free to use and modify for your personal or commercial projects.

---

**Created with ✨ and built with pure HTML, CSS, and JavaScript**

Made with care for Muhammad Bilal Maulidan's portfolio.
