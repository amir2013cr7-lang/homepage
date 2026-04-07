# CSS Media Queries & Layout Reference

## Quick Media Query Syntax

### Basic Structure
```css
/* Default (mobile) */
selector {
  property: value;
}

/* Tablet and up */
@media (min-width: 640px) {
  selector {
    property: mobile-value;
  }
}

/* Tablet */
@media (min-width: 768px) {
  selector {
    property: tablet-value;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  selector {
    property: desktop-value;
  }
}
```

---

## Breakpoints Used in Your Website

```css
/* Extra Small (Mobile) */
@media (max-width: 639px) { ... }      /* < 640px */

/* Small (Mobile-Landscape) */
@media (min-width: 640px) and (max-width: 767px) { ... }

/* Medium (Tablet) */
@media (min-width: 768px) and (max-width: 1023px) { ... }

/* Large (Desktop) */
@media (min-width: 1024px) { ... }

/* Landscape Orientation */
@media (max-height: 600px) and (orientation: landscape) { ... }

/* Touch Devices */
@media (hover: none) and (pointer: coarse) { ... }
```

---

## Flexbox Responsive Patterns

### Pattern 1: Stack on Mobile, Row on Desktop
```css
/* Default: Stack vertically */
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Desktop: Side by side */
@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    gap: 2rem;
  }
}
```

### Pattern 2: Full Width Buttons on Mobile
```css
/* Default: Full width */
button {
  width: 100%;
}

/* Desktop: Auto width */
@media (min-width: 768px) {
  button {
    width: auto;
    flex: 1;
  }
}
```

### Pattern 3: Wrap Items on Mobile
```css
.menu-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .menu-items {
    gap: 1rem;
    flex-wrap: nowrap;
  }
}
```

---

## CSS Grid Responsive Patterns

### Pattern 1: Responsive Column Grid
```css
/* Mobile: 1 column */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop: 3+ columns */
@media (min-width: 1024px) {
  .grid-layout {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Large Desktop: 4 columns */
@media (min-width: 1440px) {
  .grid-layout {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Pattern 2: Auto-Fit Grid (Recommended for Cards)
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

### Pattern 3: Two-Column Layout
```css
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
}
```

### Pattern 4: Spanning Columns (Featured Card)
```css
.featured-card {
  grid-column: 1;
}

@media (min-width: 1024px) {
  .featured-card {
    grid-column: span 2;  /* Takes 2 columns on desktop */
  }
}
```

---

## Responsive Typography

### Pattern 1: Scaling Text
```css
/* Mobile */
h1 {
  font-size: 1.875rem;  /* 30px */
  line-height: 1.2;
}

/* Tablet */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;   /* 40px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 {
    font-size: 3.5rem;   /* 56px */
  }
}
```

### Pattern 2: Responsive Line Height
```css
body {
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  body {
    font-size: 1rem;
    line-height: 1.6;
  }
}
```

---

## Responsive Spacing (Padding/Margin)

### Pattern 1: Content Padding
```css
/* Mobile: Minimal padding */
main {
  padding: 1rem;
}

/* Tablet: Medium padding */
@media (min-width: 768px) {
  main {
    padding: 1.5rem;
  }
}

/* Desktop: Full padding */
@media (min-width: 1024px) {
  main {
    padding: 2rem 3rem;
  }
}
```

### Pattern 2: Section Spacing
```css
section {
  margin: 2rem 0;
  padding: 1rem;
}

@media (min-width: 768px) {
  section {
    margin: 3rem 0;
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  section {
    margin: 4rem 0;
    padding: 3rem;
  }
}
```

---

## Responsive Images

### Pattern 1: Full-Width Responsive Image
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### Pattern 2: Container-Based Sizing
```css
.image-container {
  width: 100%;
  max-width: 400px;  /* Mobile max */
}

@media (min-width: 768px) {
  .image-container {
    max-width: 600px;
  }
}

@media (min-width: 1024px) {
  .image-container {
    max-width: 800px;
  }
}
```

### Pattern 3: Picture Element (Different Images for Different Sizes)
```html
<picture>
  <!-- Mobile image -->
  <source media="(max-width: 639px)" srcset="burger-mobile.jpg">
  
  <!-- Tablet image -->
  <source media="(max-width: 1023px)" srcset="burger-tablet.jpg">
  
  <!-- Desktop image -->
  <img src="burger-desktop.jpg" alt="Burger">
</picture>
```

---

## Hide/Show Elements Responsively

### Pattern 1: Hide on Mobile, Show on Desktop
```css
/* Default: hidden */
.desktop-only {
  display: none;
}

/* Show on desktop */
@media (min-width: 1024px) {
  .desktop-only {
    display: block;
  }
}
```

### Pattern 2: Show on Mobile, Hide on Desktop
```css
/* Default: visible */
.mobile-only {
  display: block;
}

/* Hide on desktop */
@media (min-width: 1024px) {
  .mobile-only {
    display: none;
  }
}
```

---

## Touch-Friendly Sizing

```css
/* Ensure 44x44px minimum touch targets */
@media (hover: none) and (pointer: coarse) {
  button, a {
    min-height: 44px;
    min-width: 44px;
    padding: 0.75rem 1rem;
  }
  
  /* Spacing between touch targets */
  button + button {
    margin-left: 0.5rem;
  }
}
```

---

## Landscape Mode Adjustments

```css
/* Optimize for landscape */
@media (max-height: 600px) and (orientation: landscape) {
  /* Reduce vertical spacing */
  header {
    padding: 0.5rem 1rem;
  }
  
  main {
    padding-top: 3rem;
  }
  
  section {
    padding: 1rem;
  }
  
  /* Scale down text */
  h1 {
    font-size: 1.5rem;
  }
  
  /* Hide non-essential elements */
  .decorative-element {
    display: none;
  }
}
```

---

## Real-World Examples from Your Site

### Example 1: Navigation Bar
```css
/* Mobile: Compact nav */
@media (max-width: 639px) {
  nav > div {
    padding: 0.75rem 0.5rem;
  }
  nav .text-2xl {
    font-size: 1.125rem;
  }
}

/* Desktop: Full nav */
@media (min-width: 1024px) {
  nav > div {
    padding: 1rem 2rem;
  }
}
```

### Example 2: Hero Section
```css
/* Mobile: Single column */
@media (max-width: 639px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .hero-text h1 {
    font-size: 1.875rem;
  }
}

/* Desktop: Two columns */
@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  .hero-text h1 {
    font-size: 3.5rem;
  }
}
```

### Example 3: Menu Grid
```css
/* Mobile: 1 column */
@media (max-width: 639px) {
  .menu-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

/* Tablet: 2 columns */
@media (min-width: 640px) and (max-width: 1023px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
```

---

## Common CSS Properties for Responsive Design

| Property | Mobile Value | Desktop Value | Purpose |
|----------|--------------|---------------|---------|
| `font-size` | 0.875rem | 1.125rem | Readability scaling |
| `padding` | 1rem | 2rem | Content spacing |
| `gap` | 0.75rem | 1.5rem | Element spacing |
| `max-width` | 100% | 90% | Content width |
| `grid-template-columns` | 1fr | repeat(3, 1fr) | Grid columns |
| `flex-direction` | column | row | Layout direction |
| `height` | auto | 300px | Predictable sizing |
| `display` | none/block | flex/grid | Visibility control |

---

## Debugging Responsive Design

### Check Breakpoint
```css
/* Add temporary borders to identify issues */
@media (max-width: 639px) {
  * { border: 1px solid red; }  /* Remove after debugging */
}
```

### Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Horizontal scrolling | Fixed width elements | Use `max-width: 100%` |
| Text too large | No font scaling | Add media queries for font-size |
| Overlapping elements | Fixed positioning | Use `position: relative` for mobile |
| Illegible buttons | Small touch targets | Ensure min 44x44px |
| Broken layout | Wrong grid setup | Use `grid-template-columns: 1fr` on mobile |

---

## Testing Checklist

- [ ] Test at 320px (smallest phone)
- [ ] Test at 375px (iPhone default)
- [ ] Test at 425px (larger phone)
- [ ] Test at 768px (tablet portrait)
- [ ] Test at 1024px (tablet landscape)
- [ ] Test at 1440px (desktop)
- [ ] Test orientation change (rotate device)
- [ ] Test zoom levels (100%, 150%, 200%)
- [ ] Verify touch targets are ≥44px
- [ ] Check font sizes are readable
- [ ] Verify no horizontal scrolling

---

**Keep this reference handy for future responsive design work!**
