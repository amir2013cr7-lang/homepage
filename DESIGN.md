# High-Energy Culinary Design System: Editorial Specification

## 1. Overview & Creative North Star: "The Kinetic Kitchen"
This design system moves away from the sterile, modular look of traditional QSR (Quick Service Restaurant) apps. Our Creative North Star is **The Kinetic Kitchen**. 

The goal is to capture the heat, movement, and sensory explosion of a high-end grill. We achieve this by rejecting rigid grids in favor of **Intentional Asymmetry**. Instead of perfectly centered elements, we use overlapping food photography that "breaks" container boundaries and high-contrast typography scales that feel like a modern food magazine. The digital experience should feel as fast and bold as the flavors on the menu.

---

## 2. Colors: Tonal Energy & The "No-Line" Rule
We use color not just for branding, but to simulate appetite and depth.

### The Palette
*   **Primary (The Heat):** `primary` (#b71029) and `primary_container` (#ff7576). Use these for high-energy actions.
*   **Secondary (The Zest):** `secondary` (#815100) and `secondary_container` (#ffc885). These orange-gold tones provide warmth and appetite stimulation.
*   **Neutral (The Charcoal):** `on_surface` (#212e4b) provides the deep, sophisticated contrast against the "Cool Steam" of our `surface` (#f6f6ff).

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section content. Boundaries must be defined solely through background color shifts. 
*   *Example:* A featured burger card (`surface_container_lowest`) should sit on a `surface_container_low` background. The contrast in lightness creates the "edge," not a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
*   **Base:** `surface` (#f6f6ff)
*   **Subtle Recess:** `surface_container_low` (#edf0ff) for grouping related menu categories.
*   **Elevated Content:** `surface_container_highest` (#d1dcff) for persistent navigation or floating carts.

### The "Glass & Gradient" Rule
To add "soul," use a subtle linear gradient on primary CTAs: transitioning from `primary` (#b71029) at the bottom-right to `primary_container` (#ff7576) at the top-left. For floating "Order Now" bars, apply a **Glassmorphism** effect: `surface` at 80% opacity with a `20px` backdrop blur.

---

## 3. Typography: Editorial Authority
We pair the geometric friendliness of **Plus Jakarta Sans** for impact with the high-readability of **Be Vietnam Pro** for utility.

*   **Display (The Headline):** Use `display-lg` (3.5rem) for hero value propositions. Set with `-0.02em` letter spacing to feel tight and custom.
*   **Headline (The Dish):** `headline-lg` (2rem) in **Plus Jakarta Sans Bold**. This is your primary tool for menu item titles.
*   **Body (The Story):** `body-lg` (1rem) in **Be Vietnam Pro**. Used for ingredient descriptions to ensure maximum legibility at high speeds.
*   **Labels (The Detail):** `label-md` (0.75rem) in **Plus Jakarta Sans Semi-Bold**, all-caps, for nutritional info or "Spicy" tags.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden unless used for "floating" action buttons.

*   **The Layering Principle:** Place a `surface_container_lowest` card on top of a `surface_container_low` section. This creates a soft, natural "lift" mimicking a clean countertop.
*   **Ambient Shadows:** For floating elements (like a checkout modal), use an extra-diffused shadow: `0 20px 40px rgba(33, 46, 75, 0.06)`. Note the use of `on_surface` (#212e4b) as the shadow tint rather than pure black.
*   **The Ghost Border:** If a distinction is absolutely required for accessibility, use `outline_variant` (#a0add0) at **15% opacity**.

---

## 5. Components: Fluidity & Impact

### Buttons: The "Pill"
*   **Primary:** Background: `primary` / Text: `on_primary`. Roundedness: `full`. Padding: `spacing-4` (1.4rem) horizontal.
*   **Secondary:** Background: `secondary_container` / Text: `on_secondary_container`. Use for "Add to Cart" or "Customize."
*   **Interaction:** On hover, shift background to `primary_dim`.

### Cards: The Product Hero
*   **Style:** No borders. Background: `surface_container_lowest`. 
*   **Visuals:** Use the `roundedness-lg` (2rem). 
*   **Photography:** Food images should be "cut out" (PNGs) and overlap the top edge of the card by `spacing-5` (1.7rem) to create a 3D pop effect.

### Selection Chips
*   **Design:** Use `surface_container_high` for unselected and `primary` for selected. 
*   **Spacing:** `spacing-2` (0.7rem) internal padding. No dividers between chips; use `spacing-3` (1rem) gap.

### Input Fields
*   **Style:** Minimalist. Use `surface_container_low` as the fill. 
*   **State:** On focus, transition the background to `surface_container_highest` and change the label color to `primary`.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use "Dynamic Cropping" for food photography. Show the texture of the bun or the glisten of the sauce.
*   **DO** use the `spacing-10` (3.5rem) to `spacing-16` (5.5rem) range for section breathing room. High energy requires space to move.
*   **DO** use the `tertiary` (#745700) gold tones for loyalty points and "Premium" badges.

### Don’t:
*   **DON’T** use 100% black. Always use `on_surface` (#212e4b) for text to maintain a high-end, "charcoal" feel.
*   **DON’T** use `roundedness-none`. Everything in this system should feel approachable and friendly; sharp corners are prohibited.
*   **DON’T** use "Standard" list dividers. Separate menu items using `spacing-6` (2rem) of vertical white space or a subtle shift to `surface_container_low`.

---

## 7. High-Quality Food Photography Guide
To maintain the "Editorial" feel, photography must follow these rules:
1.  **Macro Focus:** Shallow depth of field to emphasize freshness.
2.  **Top-Down or 45-Degree:** Consistency in angle across the menu.
3.  **Natural Lighting:** Hard shadows (mimicking a kitchen heat lamp) but with soft edges.
4.  **Composition:** Food should feel "active"—a drip of sauce, a steam plume, or a bite taken out.