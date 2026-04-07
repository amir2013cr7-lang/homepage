# Flexbox & CSS Grid Layout Guide for Your Website

## Overview
This guide shows specific Flexbox and CSS Grid implementations used on your RS Burgers website to maintain responsive layouts across all device sizes.

---

## 1. FLEXBOX LAYOUTS

### 1.1 Navigation Bar (Responsive Hamburger Menu)

#### HTML Structure
```html
<nav class="fixed top-0 w-full">
  <div class="flex justify-between items-center">
    <!-- Left: Logo -->
    <div class="flex items-center gap-2">
      <button class="md:hidden">☰</button>  <!-- Hamburger: visible on mobile -->
      <div>RS BURGERS</div>
    </div>
    
    <!-- Center: Desktop Nav -->
    <div class="hidden md:flex items-center gap-3"><!-- Hidden on mobile -->
      <button>Home</button>
      <button>Menu</button>
      <button>Locations</button>
    </div>
    
    <!-- Right: Theme toggle -->
    <div class="flex items-center gap-4">
      <button>🌙</button>
    </div>
  </div>
</nav>
```

#### Responsive Behavior
```
Mobile (<640px):   [Hamburger] [Logo] [Theme]
                   Menu items hidden, hamburger visible

Tablet (768px):    [Logo] [Home] [Menu] [Locations] [Theme]
                   Menu items visible, hamburger hidden
                   
Desktop (1024px):  [Logo] ---- [Home] [Menu] [Locations] ---- [Theme]
                   Full spacing, centered layout
```

#### CSS Implementation
```css
/* Mobile: Stack with space-between */
nav > div {
  display: flex;
  justify-content: space-between;  /* Logo left, Theme right */
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 1rem;
}

/* Desktop: Add centering gap */
@media (min-width: 1024px) {
  nav > div {
    padding: 1rem 2rem;
    gap: 2rem;
  }
}
```

---

### 1.2 Button Row (Flexible Stacking)

#### HTML Structure
```html
<div class="flex flex-wrap gap-4">
  <button class="bg-primary">Explore Menu</button>
  <a class="bg-surface-container">Find Us</a>
</div>
```

#### Responsive Behavior
```
Mobile (<640px):
┌─────────────────┐
│ Explore Menu    │
├─────────────────┤
│ Find Us         │
└─────────────────┘
(Full width, stacked vertically)

Tablet (640-768px):
┌──────────────────────────────┐
│ Explore Menu │ Find Us       │
└──────────────────────────────┘
(Side by side, flexible widths)

Desktop (1024px+):
[Explore Menu] [Find Us]    [More items...]
(Side by side with fixed widths)
```

#### CSS Implementation
```css
/* Mobile: Stack vertically, full width */
.flex.flex-wrap.gap-4 {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.flex.flex-wrap.gap-4 > * {
  width: 100%;
  min-height: 44px;  /* Touch-friendly */
}

/* Tablet and up: Side by side */
@media (min-width: 640px) {
  .flex.flex-wrap.gap-4 {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .flex.flex-wrap.gap-4 > * {
    width: auto;
    flex: 1 1 auto;
    min-width: 150px;
  }
}
```

---

### 1.3 Menu Item Row (Price Badge Alignment)

#### HTML Structure
```html
<div class="item-card flex justify-between items-center gap-3">
  <h3>Chicken Garlic</h3>
  <span class="price-badge">350,000 L.L</span>
</div>
```

#### Responsive Behavior
```
Mobile (<640px):
┌────────────────────────────┐
│ Chicken Garlic   350,000 LL│  (Text might wrap)
└────────────────────────────┘

Desktop (1024px+):
┌──────────────────────────────────────────────┐
│ Chicken Garlic                  350,000 L.L   │
└──────────────────────────────────────────────┘
(Clean alignment with price on right)
```

#### CSS Implementation
```css
.item-card {
  display: flex;
  justify-content: space-between;  /* Name left, price right */
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.item-card h3 {
  flex: 1;  /* Takes available space */
  word-wrap: break-word;
}

.price-badge {
  flex-shrink: 0;  /* Never shrinks, always visible */
  white-space: nowrap;
}

/* On very small screens, allow wrapping */
@media (max-width: 400px) {
  .item-card {
    flex-wrap: wrap;
  }
  
  .price-badge {
    width: 100%;
    text-align: right;
  }
}
```

---

### 1.4 Footer Layout (Multi-Section)

#### HTML Structure
```html
<footer class="flex md:flex-row justify-between items-center px-12 py-16">
  <div>
    <div>RS BURGERS</div>
    <p>&copy; 2024 RS BURGERS</p>
  </div>
  
  <div class="flex flex-wrap justify-center gap-8">
    <a href="#">Privacy Policy</a>
    <a href="#">Terms of Service</a>
    <a href="#">Careers</a>
    <a href="#">Contact Us</a>
  </div>
</footer>
```

#### Responsive Behavior
```
Mobile (<640px):
┌─────────────────────────┐
│    RS BURGERS           │
│  © 2024 RS BURGERS      │
├─────────────────────────┤
│  Privacy Policy         │
│  Terms of Service       │
│  Careers                │
│  Contact Us             │
└─────────────────────────┘

Desktop (1024px+):
┌────────────────────────────────────────────────────────┐
│ RS BURGERS          Privacy Policy  Terms  Careers  Us │
│ © 2024 RS BURGERS                                      │
└────────────────────────────────────────────────────────┘
```

#### CSS Implementation
```css
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 2rem 1rem;
}

/* Inner links wrapper */
footer .flex.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* Desktop: Horizontal layout */
@media (min-width: 1024px) {
  footer {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 4rem;
    gap: 2rem;
  }
  
  footer .flex.flex-wrap {
    gap: 2rem;
  }
}
```

---

## 2. CSS GRID LAYOUTS

### 2.1 Hero Section (Two-Column Grid)

#### HTML Structure
```html
<section class="relative min-h-[870px]">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <!-- Left: Text -->
    <div class="z-10 relative">
      <h1>Best Burgers In Qmatiyeh.</h1>
      <p>RS Burger brings you juicy, flame-grilled burgers...</p>
      <div class="flex flex-wrap gap-4">
        <button>Explore Menu</button>
        <a>Find Us</a>
      </div>
    </div>
    
    <!-- Right: Image -->
    <div class="relative flex items-center justify-center">
      <img src="burger.jpg" alt="Signature Burger">
    </div>
  </div>
</section>
```

#### Responsive Behavior
```
Mobile (<640px):
┌─────────────────────┐
│                     │
│     Hero Text       │
│   (Centered)        │
│                     │
├─────────────────────┤
│                     │
│    Burger Image     │
│   (90% width)       │
│                     │
└─────────────────────┘

Desktop (1024px+):
┌─────────────────────────────────────────────┐
│                                             │
│     Hero Text    │    Burger Image         │
│   Left aligned   │   Right aligned         │
│                  │   Larger, rotated      │
│                                             │
└─────────────────────────────────────────────┘
```

#### CSS Implementation
```css
/* Mobile: Single column */
.grid {
  display: grid;
  grid-template-columns: 1fr;  /* 1 column */
  gap: 1rem;
  align-items: center;
}

.min-h-\[870px\] {
  min-height: auto;
  padding: 2rem 1rem;
}

/* Desktop: Two columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr;  /* 2 equal columns */
    gap: 3rem;
    min-height: 870px;
    padding: 2rem 3rem;
  }
  
  .grid > *:first-child {
    order: 1;  /* Text on left */
  }
  
  .grid > *:last-child {
    order: 2;  /* Image on right */
  }
}
```

---

### 2.2 Feature Cards Grid (Responsive Columns)

#### HTML Structure
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Large featured card spanning 2 columns -->
  <div class="md:col-span-2 relative group">
    <h3>SIGNATURE BURGERS</h3>
    <p>Hand-pressed beef...</p>
  </div>
  
  <!-- Secondary cards -->
  <div class="relative group">
    <h3>SPECIAL SIDES</h3>
    <p>Golden and crispy...</p>
  </div>
  
  <div class="relative group">
    <h3>DRINKS & EXTRAS</h3>
    <p>Refresh yourself...</p>
  </div>
</div>
```

#### Responsive Behavior
```
Mobile (<640px):
┌─────────────────────┐
│ Signature Burgers   │  (Full width)
├─────────────────────┤
│ Special Sides      │  (Full width)
├─────────────────────┤
│ Drinks & Extras    │  (Full width)
└─────────────────────┘

Tablet (768-1023px):
┌─────────────────────────────────┐
│ Signature Burgers (span 2 cols) │
├──────────────────┬──────────────┤
│ Special Sides    │ Drinks       │
└──────────────────┴──────────────┘

Desktop (1024px+):
┌────────────────────────────────────────┐
│ Signature Burgers (span 2) │ Drinks    │
├────────────────────────────┼───────────┤
│ Special Sides              │ Extras    │
└────────────────────────────┴───────────┘
```

#### CSS Implementation
```css
/* Mobile: 1 column */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.md\:col-span-2 {
  grid-column: span 1;  /* Normal width */
}

/* Tablet: 3 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .md\:col-span-2 {
    grid-column: span 2;  /* Featured card spans 2 columns */
  }
}

/* Desktop: Adjust if needed */
@media (min-width: 1024px) {
  .grid {
    gap: 2rem;
  }
}
```

---

### 2.3 Menu Items Grid (3-Column Layout)

#### HTML Structure
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="item-card">
    <h3>Chicken Garlic</h3>
    <span>350,000 L.L</span>
  </div>
  <!-- 5 more items... -->
</div>
```

#### Responsive Behavior
```
Mobile (< 640px):
┌──────────────┐
│ Item 1       │
├──────────────┤
│ Item 2       │
├──────────────┤
│ Item 3       │
└──────────────┘

Tablet (640-1023px):
┌──────────────┬──────────────┐
│ Item 1       │ Item 2       │
├──────────────┼──────────────┤
│ Item 3       │ Item 4       │
├──────────────┼──────────────┤
│ Item 5       │ Item 6       │
└──────────────┴──────────────┘

Desktop (1024px+):
┌──────────────┬──────────────┬──────────────┐
│ Item 1       │ Item 2       │ Item 3       │
├──────────────┼──────────────┼──────────────┤
│ Item 4       │ Item 5       │ Item 6       │
└──────────────┴──────────────┴──────────────┘
```

#### CSS Implementation
```css
/* Mobile: 1 column */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

/* Small tablets: 2 columns */
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

/* Large desktop: More gaps */
@media (min-width: 1440px) {
  .grid {
    gap: 2rem;
  }
}
```

---

## 3. HYBRID FLEXBOX + GRID PATTERNS

### 3.1 Section Header (Text + Description)

#### HTML Structure
```html
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
  <div>
    <h2>OUR MENU</h2>
    <div class="h-1.5 w-24 bg-primary"></div>
  </div>
  <p>Handcrafted burgers, crispy sides...</p>
</div>
```

#### CSS Implementation
```css
/* Mobile: Stack vertically */
.flex {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
}

/* Desktop: Side by side */
@media (min-width: 768px) {
  .flex {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
  }
}
```

---

### 3.2 Item Card with Flex Alignment

#### HTML Structure
```html
<div class="item-card flex justify-between items-start gap-3">
  <div>
    <h3>Francisco</h3>
    <p class="description">Grilled Chicken, Corn...</p>
  </div>
  <span class="price-badge">$4.50</span>
</div>
```

#### CSS Implementation
```css
.item-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;  /* Align to top */
  gap: 1rem;
  padding: 1.1rem 1.25rem;
}

/* Description text */
.item-card .description {
  font-size: 0.85rem;
  line-height: 1.4;
  flex: 1;  /* Takes available space */
}

/* Price stays fixed-width */
.price-badge {
  flex-shrink: 0;  /* Never shrinks */
  white-space: nowrap;  /* Doesn't wrap */
}

/* On mobile, allow wrapping if needed */
@media (max-width: 500px) {
  .item-card {
    flex-wrap: wrap;
  }
  
  .item-card .description {
    width: 100%;
  }
}
```

---

## 4. COMBINING FLEXBOX + GRID FOR COMPLEX LAYOUTS

### 4.1 Category Navigation (Horizontal Scroll on Mobile)

#### HTML Structure
```html
<div class="flex overflow-x-auto gap-3 no-scrollbar">
  <a class="nav-chip">🔥 News Items</a>
  <a class="nav-chip">Sandwiches</a>
  <a class="nav-chip">Chicken Burgers</a>
  <!-- More items... -->
</div>
```

#### CSS Implementation
```css
/* Mobile: Horizontal scroll */
.flex {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  gap: 0.75rem;
  padding-bottom: 0.5rem;
}

.nav-chip {
  padding: 0.5rem 0.8rem;
  font-size: 0.7rem;
  white-space: nowrap;  /* Prevent wrapping */
  flex-shrink: 0;  /* Don't shrink items */
}

/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Desktop: Wrap normally */
@media (min-width: 1024px) {
  .flex {
    overflow: visible;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-chip {
    flex-shrink: 1;
  }
}
```

---

## 5. ADVANCED: AUTO-FIT GRID (Best for Future-Proofing)

When you add new sections, this pattern automatically adjusts:

```css
.auto-fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* Adjusts automatically:
   - 1 column if < 250px
   - 2 columns if 250-500px
   - 3 columns if 500-750px
   - 4 columns if 750px+
   All without media queries!
*/
```

---

## 6. COMMON ISSUES & SOLUTIONS

### Issue 1: Content Overflow on Small Screens
```css
/* ❌ DON'T: Fixed width */
.card {
  width: 300px;
}

/* ✅ DO: Max width */
.card {
  width: 100%;
  max-width: 300px;
}
```

### Issue 2: Uneven Grid Columns
```css
/* ❌ DON'T: Exact columns */
.grid {
  grid-template-columns: 250px 250px 250px;
}

/* ✅ DO: Responsive columns */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Issue 3: Wrapping Text in Flex Container
```css
/* ❌ DON'T: No wrapping */
.flex-item {
  flex: 1;
  min-width: 0;  /* Missing! */
}

/* ✅ DO: Allow text wrapping */
.flex-item {
  flex: 1;
  min-width: 0;  /* Allows wrapping */
  word-wrap: break-word;
}
```

---

## 7. QUICK COPY-PASTE TEMPLATES

### Template 1: Responsive 2-Column Section
```css
.two-column-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .two-column-section {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}
```

### Template 2: Responsive 3-Column Grid
```css
.three-column-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .three-column-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .three-column-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
```

### Template 3: Flexible Button Row
```css
.button-row {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .button-row {
    flex-direction: row;
    gap: 1rem;
  }
  
  .button-row > * {
    flex: 1;
    min-width: 150px;
  }
}
```

---

**Your website now uses modern, responsive Flexbox and Grid layouts! 🚀**
