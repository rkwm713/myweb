# Types

This folder contains TypeScript interfaces that define the structure of data used throughout the application. I'm a big fan of TypeScript for the type safety it provides, especially when working with structured data like I have in this portfolio.

## File Structure

Currently, there's just one file:

- **index.ts**: Exports TypeScript interfaces for the main data structures

## Type Definitions

### ExperienceType

This interface defines the structure for work experience entries:

```typescript
export interface ExperienceType {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
}
```

I included an array of strings for the description to make it easy to display as bullet points in the UI.

### EducationType

Similar to ExperienceType, but for educational background:

```typescript
export interface EducationType {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
}
```

For education, I went with a single description string since I didn't need the bullet point format here.

### SkillType

This interface defines skills with a proficiency level and category:

```typescript
export interface SkillType {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}
```

I used a union type for the category to restrict it to only the valid categories I want to use.

### ProjectType

This defines the structure for project entries:

```typescript
export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}
```

The link and github properties are optional (marked with ?) since not all projects might have these.

## Why I Use TypeScript

TypeScript has been a huge help in this project for several reasons:

1. **Catch errors early**: If I try to use a property that doesn't exist or use the wrong type, TypeScript will let me know immediately.

2. **Better autocomplete**: The editor can suggest properties and methods based on the type definitions.

3. **Self-documenting code**: The interfaces serve as documentation for the data structures.

4. **Refactoring confidence**: When I need to change a data structure, TypeScript will show me all the places that need to be updated.

## How These Types Are Used

These interfaces are imported in the data file (src/data/index.ts) to ensure the data follows the correct structure. They're also used in the components to provide type safety when working with the data.

For example, in the Experience component, I can destructure properties from an experience object with confidence that they exist and have the correct types.
