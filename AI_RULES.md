# AI Development Rules for A.W Landscapes Website

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Component Library**: shadcn/ui components
- **Routing**: React Router v6
- **State Management**: React Query for server state, React Context for simple client state
- **Build Tool**: Vite
- **Deployment**: Lovable platform
- **Testing**: Vitest with React Testing Library
- **Icons**: Lucide React icons

## Component Architecture Rules

### UI Component Library
Use **shadcn/ui** components whenever possible:
- Buttons, forms, cards, alerts, etc. should use shadcn/ui
- Extend with custom styling using Tailwind classes
- Only eject from shadcn/ui if absolutely necessary

### Icons
Use **Lucide React** icons exclusively:
- Consistent with shadcn/ui design language
- Import directly: `import { Home, User, Settings } from 'lucide-react'`

### State Management
- Use **React Query** for server state (API calls)
- Use **React Context** for global client state (user preferences, theme)
- Avoid complex state management libraries unless absolutely necessary

### Styling Guidelines
- Use **Tailwind CSS** utility classes for all styling
- Use the existing color palette in `tailwind.config.js`
- Responsive design is mandatory (mobile-first approach)
- All components must be accessible (proper contrast, ARIA attributes)

### Form Handling
- Use **React Hook Form** for all forms
- Use **Zod** for validation with proper error messages
- All forms must have proper accessibility attributes

### Animations
- Use **Framer Motion** for page transitions and complex animations
- Use CSS transitions for simple micro-interactions
- Keep animations performant and subtle

### Data Fetching
- Use **React Query** for all API calls
- Implement proper loading and error states
- Use caching strategies appropriately

### File Structure
- Components: `src/components/`
- Pages: `src/pages/`
- Hooks: `src/hooks/`
- Lib: `src/lib/`
- UI Components: `src/components/ui/`
- Layout Components: `src/components/layout/`

### Testing
- Unit test components with React Testing Library
- Test business logic with Vitest
- Ensure 80%+ test coverage for critical user flows

### Accessibility
- All interactive elements must be keyboard navigable
- Proper ARIA labels for icons and interactive elements
- Color contrast must meet WCAG 2.1 AA standards
- All images must have descriptive alt text

### Performance
- Optimize images with proper sizing and formats
- Code splitting for large components
- Lazy loading for non-critical resources
- Bundle size monitoring

### Code Quality
- Strict TypeScript with no implicit any
- ESLint and Prettier for code formatting
- Meaningful commit messages and component naming