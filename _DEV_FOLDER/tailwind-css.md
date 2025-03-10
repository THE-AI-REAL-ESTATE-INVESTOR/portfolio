# Tailwind CSS Quick Reference Guide

![AI REI](https://github.com/THE-AI-REAL-ESTATE-INVESTOR/portfolio/blob/main/chat-app/public/airei.jpg?raw=true)

## 🌟 Basic Layout & Positioning

### Container and Spacing
```jsx
// Center content in the viewport
<div className="container mx-auto"> // Main container
<div className="max-w-screen-xl mx-auto"> // Constrained width

// Padding & Margin
p-{size}  // padding all sides (p-2, p-4, p-8)
px-{size} // padding left/right
py-{size} // padding top/bottom
m-{size}  // margin all sides
mx-{size} // margin left/right
my-{size} // margin top/bottom
```

### Flex Layout (Most Common)
```jsx
// Basic Flex Container
<div className="flex">          // Row layout (default)
<div className="flex flex-col"> // Column layout

// Alignment
items-center     // Vertical center (cross-axis)
items-start      // Top align
items-end        // Bottom align
justify-center   // Horizontal center (main-axis)
justify-between  // Space between items
justify-around   // Space around items

// Spacing Between Items
gap-2           // Small gap (0.5rem)
gap-4           // Medium gap (1rem)
gap-8           // Large gap (2rem)
```

### Grid Layout
```jsx
// Basic Grid
grid                    // Display grid
grid-cols-2            // 2 columns
grid-cols-3            // 3 columns
grid-cols-12           // 12 columns
gap-4                  // Gap between grid items

// Responsive Grid
sm:grid-cols-2         // 2 columns on small screens
md:grid-cols-3         // 3 columns on medium screens
lg:grid-cols-4         // 4 columns on large screens
```

## 🎨 Styling Elements

### Box Model
```jsx
// Borders
border                 // Add border
border-2               // Thicker border
border-gray-200        // Gray border
rounded               // Small border radius
rounded-lg            // Larger border radius
rounded-full          // Circular/pill

// Shadows
shadow-sm             // Small shadow
shadow                // Medium shadow
shadow-lg             // Large shadow
shadow-xl             // Extra large shadow
```

### Colors & Background
```jsx
// Text Colors
text-black
text-white
text-gray-500
text-blue-600

// Background Colors
bg-white
bg-gray-100
bg-blue-500
bg-opacity-50        // 50% opacity

// Hover States
hover:bg-blue-600
hover:text-white
hover:scale-105
```

## 📱 Responsive Design

### Breakpoints
```jsx
sm:  // 640px and up
md:  // 768px and up
lg:  // 1024px and up
xl:  // 1280px and up
2xl: // 1536px and up

// Examples
<div className="
  flex-col        // Mobile first (stacked)
  sm:flex-row     // Side by side on small screens and up
  md:gap-8        // Larger gap on medium screens
  lg:px-8         // More padding on large screens
">
```

## 🎯 Positioning

### Fixed & Absolute Positioning
```jsx
// Fixed Position (relative to viewport)
fixed            // Fixed positioning
top-0            // Stick to top
bottom-0         // Stick to bottom
inset-0          // All sides 0

// Absolute Position (relative to parent)
absolute         // Absolute positioning
relative         // Make parent relative
top-4            // 1rem from top
right-4          // 1rem from right
```

## 💫 Animations & Transitions

### Basic Transitions
```jsx
transition       // Default transition
duration-300     // 300ms duration
ease-in-out      // Smooth easing
hover:scale-105  // Grow on hover
hover:rotate-3   // Slight rotation on hover
```

## 🔥 Common Patterns

### Cards
```jsx
<div className="
  p-6 
  bg-white 
  rounded-lg 
  shadow-md 
  hover:shadow-lg 
  transition
">

### Buttons
<button className="
  px-4 
  py-2 
  bg-blue-500 
  text-white 
  rounded 
  hover:bg-blue-600 
  transition
">

### Navigation
<nav className="
  fixed 
  top-0 
  w-full 
  bg-white 
  shadow-md 
  px-6 
  py-4
">
```

## 🏗 Component Composition Patterns

### Navigation Bar Pattern
```jsx
// 1. Main Navigation Container
<nav className="bg-black shadow-lg">               // Black background with shadow
  
  // 2. Content Width Constraint
  <div className="max-w-6xl mx-auto px-4">        // Center with max width and padding
    
    // 3. Flex Layout Container
    <div className="flex justify-between">         // Space items between
      
      // 4. Left Side Group
      <div className="flex space-x-7">            // Flex with spacing between items
        
        // 5. Logo/Brand Section
        <div className="flex items-center py-4 px-2">
          <h1 className="text-white text-2xl font-bold">
            Brand
          </h1>
        </div>

        // 6. Navigation Items
        <div className="flex items-center py-4 px-2">
          {/* Navigation links or components */}
        </div>
      </div>
    </div>
  </div>
</nav>

// Breaking down the classes:
// bg-black          -> Black background
// shadow-lg         -> Large shadow effect
// max-w-6xl         -> Maximum width constraint
// mx-auto          -> Center horizontally
// px-4             -> Horizontal padding
// flex             -> Flex container
// justify-between  -> Space between items
// space-x-7        -> Spacing between flex items
// items-center     -> Center items vertically
// py-4             -> Vertical padding
// px-2             -> Horizontal padding
// text-white       -> White text
// text-2xl         -> Large text size
// font-bold        -> Bold text weight
```

### Component Layout Patterns

#### 1. Basic Page Layout
```jsx
// Page Container
<div className="min-h-screen bg-gray-100">        // Full height background
  <Navbar />                                       // Navigation component
  <main className="container mx-auto px-4 py-8">   // Main content
    <Component />
  </main>
</div>
```

#### 2. Nested Component Structure
```jsx
// Parent Component
<div className="space-y-4">                       // Vertical spacing between children
  <Header />
  <Content />
  <Footer />
</div>

// Header Component
<header className="bg-black shadow-lg">
  <nav className="max-w-6xl mx-auto px-4">
    {/* Navigation content */}
  </nav>
</header>
```

### Common Layout Combinations

#### 1. Navbar with Responsive Content
```jsx
// Navbar.tsx
<nav className="bg-black shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Logo />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4">
        <NavLinks />
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <MobileMenuButton />
      </div>
    </div>
  </div>
</nav>
```

### Tips for Component Organization

1. **Layer Structure:**
   ```
   Navigation (top)
   └─ Container (width constraint)
      └─ Flex Layout
         ├─ Left Section
         │  └─ Brand/Logo
         └─ Right Section
            └─ Navigation Items
   ```

2. **Responsive Considerations:**
   ```jsx
   // Mobile-first approach
   <div className="
     flex-col          // Stack on mobile
     md:flex-row      // Side by side on medium screens
     items-center     // Center items
     justify-between  // Space between on larger screens
   ">
   ```

3. **Component Spacing:**
   ```jsx
   // Consistent spacing between components
   <div className="space-y-4 md:space-y-0 md:space-x-4">
     <Component1 />
     <Component2 />
   </div>
   ```

4. **State Management Classes:**
   ```jsx
   // Example of dynamic classes
   <nav className={`
     bg-black 
     shadow-lg
     ${isScrolled ? 'fixed top-0 w-full' : ''}
   `}>
   ```

Remember:
- Always structure components from outside in
- Use consistent spacing patterns
- Consider mobile-first approach
- Keep related elements grouped with flex or grid
- Use semantic HTML elements (nav, header, main)

## 🛠 Tips & Tricks

1. Use `space-y-{size}` for vertical spacing between elements
2. Use `divide-y` to add dividers between elements
3. Use `aspect-ratio` for responsive squares/rectangles
4. Use `object-cover` for image fitting
5. Use `truncate` for text overflow
6. Use `ring` for focus states
7. Use `backdrop-blur` for frosted glass effect

## 🎮 Interactive States

```jsx
// Mouse States
hover:      // On hover
focus:      // On focus
active:     // On click
disabled:   // When disabled

// Dark Mode
dark:       // Dark mode styles
dark:hover: // Dark mode hover

// Screen States
motion-safe:   // When animations are enabled
motion-reduce: // When animations are reduced
print:        // Print styles
```

Remember:
- Always start mobile-first
- Use responsive prefixes to build up
- Combine utilities for complex layouts
- Use arbitrary values when needed [square-[350px]]

Need more? Visit [Tailwind CSS Docs](https://tailwindcss.com/docs) 

## 🎨 Technology-Specific Styling

### Skill Tags Pattern
```jsx
// Container with gradient background
<div className="
  w-full max-w-6xl mx-auto 
  p-8 
  bg-gradient-to-br 
  from-blue-900 via-blue-800 to-indigo-900 
  rounded-xl 
  shadow-2xl
">

// Category Headers
<h3 className="
  text-xl 
  font-bold 
  capitalize 
  text-white 
  mb-4 
  border-b border-blue-700 
  pb-2
">

// Skill Tags with Technology-Specific Colors
<span className="
  px-4 py-2                    // Padding
  text-sm font-medium          // Text styling
  rounded-full                 // Pill shape
  bg-gradient-to-r            // Base gradient
  from-[color]-500 to-[color]-600  // Technology-specific colors
  text-white shadow-lg        // Text and shadow
  transform                   // Enable transforms
  transition-all duration-300 // Smooth transitions
  hover:scale-110            // Grow on hover
  hover:shadow-xl            // Larger shadow on hover
  hover:-translate-y-1       // Slight lift on hover
  active:scale-95           // Shrink when clicked
  cursor-pointer            // Show pointer cursor
  border border-white/10    // Subtle border
  backdrop-blur-sm         // Frosted glass effect
">

// Common Technology Color Combinations
HTML:        from-orange-500 to-red-500
CSS:         from-blue-400 to-blue-600
JavaScript:  from-yellow-400 to-yellow-600
React:       from-cyan-400 to-blue-500
Node.js:     from-green-400 to-green-600
Python:      from-blue-500 to-yellow-500
AWS:         from-orange-400 to-orange-600
Docker:      from-blue-400 to-blue-600
```

### Animation Combinations
```jsx
// Hover Effects
hover:scale-110 hover:shadow-xl hover:-translate-y-1  // Grow, add shadow, and lift
hover:rotate-3 hover:scale-105                        // Rotate and grow
hover:brightness-110 hover:contrast-110               // Adjust colors

// Active States
active:scale-95    // Shrink when clicked
active:rotate-0    // Reset rotation
active:shadow-inner // Inner shadow effect

// Transitions
transition-all     // Transition all properties
duration-300       // 300ms duration
ease-in-out       // Smooth easing
```

### Glass Effect Patterns
```jsx
// Frosted Glass
backdrop-blur-sm
bg-white/10
border border-white/20

// Colored Glass
backdrop-blur-md
bg-blue-500/30
border border-blue-200/20

// Dark Glass
backdrop-blur-lg
bg-gray-900/40
border border-gray-700/30
``` 