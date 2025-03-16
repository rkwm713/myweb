# Assets

This folder contains the static assets used in my portfolio site. I've kept it pretty minimal for now, just including the essential images needed for the site.

## Current Assets

- **favicon.svg**: The site favicon that appears in browser tabs. I went with a simple code icon that matches the theme of the site.

- **profile.png**: My profile picture used in the About section. I added some styling and animations to this in the About component to make it more visually interesting.

- **garden.png**: Screenshot of my Community Garden Management Platform project. This is displayed in the Projects section carousel.

## Image Optimization

I've tried to keep the image sizes reasonable to ensure fast loading times. For the project screenshots, I made sure they were:
- Properly cropped to show the important parts of the UI
- Compressed to reduce file size without losing too much quality
- Consistent aspect ratios to maintain a clean look in the carousel

## Future Plans

As I add more projects, I'll add more screenshots here. I might also add:
- Icons for different technologies I use
- Background patterns or textures
- More personal photos
- Logo variations

## Asset Usage

The assets are imported directly in the components where they're needed. For example, in the About component:

```typescript
import profileImage from '../assets/profile.png';
```

This approach lets Vite handle the asset optimization and generates the correct paths in the build output.

## Notes to Self

- Remember to compress new images before adding them
- Keep consistent naming conventions (lowercase, hyphens for spaces)
- Consider using SVGs where possible for better scaling
- If the asset collection grows a lot, consider organizing into subfolders
