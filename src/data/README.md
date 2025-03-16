# Data

This folder contains the data that populates my portfolio site. I decided to separate the content from the components to make it easier to update my information without having to touch the component code.

## File Structure

Currently, there's just one file:

- **index.ts**: Exports arrays of data for experiences, education, skills, and projects

## Data Organization

### Experiences

This is an array of my work experiences, with each object containing:
- Position title
- Company name
- Time period
- Description of responsibilities and achievements

I structured the description as an array of bullet points to make it easier to display in a list format.

### Education

Similar to experiences, this is an array of my educational background:
- Degree/certification
- Institution
- Time period
- Description of achievements or relevant coursework

### Skills

I organized my skills into four categories:
1. **Frontend**: JavaScript, React, HTML/CSS, TypeScript
2. **Backend**: Python, SQL, Node.js, Database Design
3. **Tools**: SPIDAcalc, Git, VS Code, Microsoft Office
4. **Other**: Technical Drawing, Project Management, Problem Solving, Data Analysis

Each skill has a proficiency level from 1-5, which is visualized in the Experience component.

### Projects

This contains information about my technical projects:
- Title and description
- Image path
- Technologies used
- Links to live demo and GitHub repository

## Why I Structured It This Way

Separating the data from the components has several advantages:

1. **Easy updates**: When I need to add a new project or update my experience, I just need to modify this file.

2. **Type safety**: All the data structures are typed using TypeScript interfaces (defined in src/types), which helps catch errors early.

3. **Reusability**: The components can be reused with different data, making the code more flexible.

## How to Update

When I need to add new information:

1. Add a new object to the appropriate array following the existing pattern
2. Make sure it follows the TypeScript interface defined in src/types
3. The components will automatically render the new information

## Future Improvements

As the site grows, I might:
- Move each data category to its own file for better organization
- Add more detailed project information
- Implement a CMS or backend API to manage the data instead of hardcoding it
