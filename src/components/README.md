# Components

This folder contains all the React components that make up my portfolio site. I've broken down the UI into logical sections, with each component responsible for a specific part of the page.

## Page Sections

### Navbar.tsx
The fixed navigation bar at the top of the page. I made this responsive with a hamburger menu for mobile. It changes background on scroll to improve readability when content scrolls underneath it.

### Hero.tsx
The main landing section - first thing visitors see. I wanted to make a strong first impression, so I included my name, title, and a brief tagline. The animated elements help draw attention without being too flashy.

### About.tsx
This is where I share more about myself, my background, and skills. I included some interactive elements like the hoverable skill cards and a fun fact cycler to make it more engaging. The profile image has some decorative elements to add visual interest.

### Projects.tsx
Showcases my technical projects. I implemented this as a carousel with auto-rotation to save space while still highlighting each project. Each project card includes:
- Project image
- Title and description
- Technologies used
- Links to live demo and source code
- A code snippet toggle to show some actual code

### Experience.tsx
Displays my work experience, education, and skills in a tabbed interface. This keeps the information organized without overwhelming the visitor. The skill bars provide a quick visual representation of my proficiency levels.

### Contact.tsx
The contact form and my contact information. I added a simple form validation and submission animation. For now, it's just a frontend mockup - I'll hook it up to a real backend service later.

### Footer.tsx
A simple footer with my name and a scroll-to-top button.

## Special Components

### StarBackground.tsx
This was a fun one to build! It creates the animated star field background using HTML canvas. The stars move slowly and connect with lines when they're close to each other. I think it adds a nice touch of personality to the site without being distracting.

## Component Design Philosophy

I tried to follow these principles when building the components:

1. **Self-contained**: Each component handles its own state and styling
2. **Responsive**: Everything works well on mobile, tablet, and desktop
3. **Interactive**: Added hover effects, animations, and transitions to make the site feel alive
4. **Consistent**: Used the same design language and color scheme throughout

## Styling Approach

I used Tailwind CSS for all the styling, which made it super quick to iterate on the design. For complex animations and effects, I used a combination of:
- Tailwind's built-in transition and transform utilities
- Custom animations defined in the tailwind.config.js
- Inline styles for dynamic values (like the skill bar percentages)

## Future Improvements

Some things I might refactor or add:
- Extract some of the larger components into smaller sub-components
- Add more interactive elements to the Projects section
- Implement dark/light theme toggle
- Add more accessibility features
