# Source Code Overview

This folder contains all the source code for my portfolio website. Here's a breakdown of what's in here and why I organized it this way.

## Main Files

- **main.tsx**: The entry point of the application. Nothing fancy here - just renders the App component into the DOM.

- **App.tsx**: The main component that brings everything together. I structured this as a single-page application with different sections that you can scroll through. I also added smooth scrolling for the anchor links to make navigation feel nicer.

- **index.css**: Global styles and Tailwind imports. I kept this minimal since most styling is done with Tailwind classes directly in the components.

- **vite-env.d.ts**: Type definitions for Vite-specific environment variables.

## Folders

- **assets/**: Contains images and other static files. I kept this separate to make asset management cleaner.

- **components/**: Where all the React components live. I created a separate component for each major section of the site (Hero, About, Projects, etc.) to keep the code modular and easier to maintain.

- **data/**: Contains the data for my experiences, education, skills, and projects. I separated this from the components to make it easier to update my information without touching the component logic.

- **types/**: TypeScript interfaces for the data structures. Having these defined separately makes it easier to ensure consistency across the application.

## Why I Structured It This Way

I'm a big fan of separation of concerns, so I wanted to keep the data, components, and types separate. This makes it much easier to:

1. Update my information without touching component code
2. Reuse components with different data
3. Maintain type safety throughout the application

The component structure follows the visual sections of the site, which I find makes the codebase more intuitive to navigate. Each component is responsible for its own section, and the App component just brings them all together.

For styling, I went with Tailwind CSS because it lets me style components directly in the JSX without having to switch between files. This speeds up development a lot for me.
