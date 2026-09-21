# Implementation Plan: Quito, Ecuador Showcase Website (CS409 MP1)

Build a clean, compliant single-page website showcasing Quito, Ecuador, implementing **strictly and solely** the 16 core requirements and constraints defined in `README.md`. No third-party UI libraries (no Bootstrap, no jQuery, no React), no inline styles, no inline scripts, and no unnecessary bloat.

---

## User Review Required

> [!IMPORTANT]
> **Strict Rubric Adherence (No Libraries & No Inline Code):**
> 1. All JS must be pure Vanilla ES6 in [src/js/main.js](../src/js/main.js) (no jQuery, no external carousel plugins).
> 2. All styles must be in [src/css/main.scss](../src/css/main.scss) utilizing SCSS features (variables, mixin, nesting) with **zero** inline `style="..."` attributes.
> 3. FontAwesome (or similar CSS vector icon set) will be imported via standard `<link>` in `<head>` to satisfy Requirements 15 & 16 (vector icons & social media icons).

---

## Agreed Design & Content Specifications (From User Grilling)

1. **Theme & Purpose**: Informational showcase celebrating the natural and cultural beauty of Quito, Ecuador, and Pichincha Volcano.
2. **Carousel Slides (Req 6)**:
   - Slide 1: **TelefériQo** (`assets/teleferico.jpeg`) - High altitude cable car scaling the slopes of Pichincha.
   - Slide 2: **Historic Center & Churches** (`assets/quitohistorical.jpg`) - World-renowned colonial architecture & churches.
   - Slide 3: **Parque Metropolitano** (`assets/metropolitano.jpg`) - Expansive urban eucalyptus forest with panoramic Andean views.
3. **Multi-Column Quick Facts (Req 7)**:
   - 4-column card grid:
     - Col 1: **Elevation & Skies** (2,850m / 9,350ft above sea level).
     - Col 2: **Eternal Spring Climate** (Stable 18°C-22°C year-round).
     - Col 3: **UNESCO Heritage** (First city named a World Heritage site in 1978).
     - Col 4: **Active Volcano Neighbor** (Guagua & Rucu Pichincha standing guard).
4. **Resources & Info Modal (Req 11)**:
   - Modal window featuring curated official links: UNESCO World Heritage listing, Ecuador Travel official portal, Quito Turismo, and Altitude acclimatization guidelines.
5. **Fixed Background Image Section (Req 10)**:
   - Applied to the Multi-Column Facts section using `assets/bancoquito.jpg` darkened with a semi-transparent linear gradient overlay and `background-attachment: fixed`.
6. **Video & Hero Section (Req 8 & 12)**:
   - Hero section at top with vertically and horizontally centered title/tagline.
   - Embedded HTML5 `<video controls playsinline>` featuring `assets/pichinchavideo.mp4` directly accessible below the hero title.

---

## Proposed Changes

The implementation will touch only the standard project files provided in the template:

### 1. Structure: [src/index.html](../src/index.html)
Organize the entire page into full-width horizontal stripe sections:

- **Navigation (`<header>` / `<nav id="navbar">`)**:
  - Sticky nav with branding ("Quito, Ecuador") and navigation links: `#hero`, `#about`, `#carousel`, `#highlights`, `#video`, `#footer`.
  - Position indicator classes dynamically applied via JS.
  - Social media vector icons (Req 15 & 16).
- **Hero Section (`<section id="hero" class="section stripe stripe-hero">`)**:
  - Vertically and horizontally centered title and subtitle (Req 8).
  - Background image with fixed attachment (Req 10).
- **About Section (`<section id="about" class="section stripe stripe-about">`)**:
  - Centered intro text introducing Quito and the Pichincha Volcano backdrop.
  - Call-to-action button that triggers the **Modal Window** (Req 11).
- **Modal Component (`<div id="modal" class="modal">`)**:
  - Hidden by default, centered popup with backdrop overlay, close button `&times;`, and deep-dive Quito travel tips.
- **Carousel Section (`<section id="carousel" class="section stripe stripe-carousel">`)**:
  - Pure CSS/vanilla JS slider with 3 slides and previous/next navigation arrows (`&#10094;`, `&#10095;`) (Req 6).
- **Highlights Multi-Column Section (`<section id="highlights" class="section stripe stripe-columns">`)**:
  - 3-column responsive flex/grid layout highlighting key aspects of Quito (Req 7).
- **Video Section (`<section id="video" class="section stripe stripe-video">`)**:
  - Horizontally centered HTML5 `<video>` tag linking to `assets/pichinchavideo.mp4` with native controls (Req 12).
- **Footer (`<footer id="footer" class="stripe stripe-footer">`)**:
  - Centered copyright notice and scalable social media vector icons (Req 15 & 16).

---

### 2. Styles: [src/css/main.scss](../src/css/main.scss)
Utilize SCSS features strictly without inline CSS or library overhead:

- **SCSS Variables & Mixins (Req 13)**:
  - Palette variables: `$primary-color`, `$secondary-color`, `$dark-bg`, `$light-bg`, `$text-color`.
  - Breakpoint mixins for the required resolutions (1920x1080, 1366x768, 1280x720, 1024x768, 768x1024).
  - Centering mixin (`@mixin flex-center`).
- **Sticky Navbar & Dynamic Resizing (Req 2, 4)**:
  - `position: fixed; top: 0; width: 100%;` with smooth transition on `padding` and `font-size`.
  - `.scrolled` state modifier that shrinks height, padding, and logo/link font size.
  - Active indicator link styling (e.g. underline / highlight color) (Req 3).
- **Layout & Centering (Req 1, 8)**:
  - Full-width horizontal stripe containers (`width: 100%`).
  - Text and content horizontally centered (`text-align: center`, `margin: 0 auto`).
  - Hero element vertically centered using Flexbox (`display: flex; align-items: center; justify-content: center; min-height: 80vh`).
- **Fixed-Position Background Image (Req 10)**:
  - `background-attachment: fixed; background-position: center; background-size: cover;` applied to the hero/feature section.
- **Carousel Styles (Req 6)**:
  - Slider track, overflow hidden, active slide display or transform transition, left/right arrow buttons.
- **Multi-Column Grid (Req 7, 9)**:
  - CSS Flexbox / Grid with 3 columns on desktop, transitioning gracefully on 768px tablet width.
- **Modal Styles & CSS3 Animations (Req 11, 14)**:
  - Fixed full-screen overlay with semi-transparent background.
  - Centered dialog box with CSS `@keyframes` fade-in / slide-down animation.
- **Media Queries (Req 9)**:
  - Breakpoints tested for 1920x1080, 1366x768, 1280x720, 1024x768, and 768x1024.

---

### 3. Logic: [src/js/main.js](../src/js/main.js)
Pure Vanilla JS implementation:

- **Smooth Scroll (Req 5)**:
  - Event listener on navbar `<a>` anchors preventing default jump and calling `element.scrollIntoView({ behavior: 'smooth' })`.
- **Navbar Resizing on Scroll (Req 4)**:
  - `window.addEventListener('scroll', ...)` toggling `.scrolled` class when `window.scrollY > 50`.
- **Reading Position Indicator (Req 3)**:
  - On scroll, calculates which section is directly below navbar bottom.
  - Edge case handled: detects if scrolled to bottom of document (`window.innerHeight + window.scrollY >= document.body.offsetHeight - 5`) and forcefully highlights the last menu item.
- **Carousel Logic (Req 6)**:
  - Minimal state `currentSlideIndex`, next/prev functions, updating slide visibility or offset.
- **Modal Interaction (Req 11)**:
  - Open modal on button click, close on close button click or outside click (`window.onclick`).

---

## Verification Plan

### Automated Build Verification
1. Run `npm run build` in PowerShell to ensure Webpack compiles HTML, SCSS, assets, and JS cleanly with 0 errors.

### Manual Verification of Requirements (Checklist)
1. **Layout**: Confirm full-width horizontal stripes including header and footer.
2. **Sticky Navbar**: Scroll down; verify navbar stays pinned to top.
3. **Position Indicator**: Scroll down slowly; check that active link updates to match the current section, and highlights the last item when scrolled to bottom.
4. **Navbar Resizing**: Observe navbar and text shrinking when scrolling down from top.
5. **Smooth Scrolling**: Click each nav link; observe smooth scroll animation.
6. **Carousel**: Click left and right arrows; verify cycle through all 3 slides.
7. **Multi-Column**: Verify section with 3 columns side-by-side.
8. **Centering**: Verify horizontal centering across stripes and vertical centering of hero element.
9. **Responsiveness**: Resize browser to 1920x1080, 1366x768, 1280x720, 1024x768, and 768x1024.
10. **Fixed Background**: Scroll past background image section to verify parallax/fixed effect.
11. **Modal**: Click trigger button; verify modal fades in; click close button; verify it closes.
12. **Video**: Verify HTML5 video plays and controls are functional.
13. **SCSS**: Confirm variables and mixins are compiled.
14. **CSS3 Animations**: Confirm modal and transition animations trigger properly.
15. **Vector Icons & Social Media**: Verify FontAwesome icons render in header and footer.
16. **Rules Check**: Ensure zero inline styles (`style="..."`), zero inline scripts, no forbidden libraries.
