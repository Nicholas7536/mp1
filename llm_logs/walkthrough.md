# Walkthrough: Quito & Pichincha Showcase Website (CS409 MP1)

We have built a single-page website strictly implementing the 16 features specified in [README.md](../README.md) celebrating Quito, Ecuador and Pichincha Volcano.

---

## Features Implemented & Verification

### 1. Layout (Full-Width Horizontal Stripes)
- Structured into full-width (`width: 100%`) horizontal stripes:
  - Header & Sticky Navbar (`#mainHeader`)
  - Hero & Video Stripe (`#hero`)
  - About & Modal Stripe (`#about`)
  - Carousel Slider Stripe (`#carousel-section`)
  - 4-Column Quick Facts with Fixed Background (`#facts-section`)
  - Footer & Social Links Stripe (`#footer-section`)

### 2 & 4. Sticky Navbar & Dynamic Resizing
- Navbar stays pinned at the top: `position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;`.
- At top of page: larger padding (`1.6rem 2rem`) and larger font sizes (`1.6rem` logo, `1.1rem` links).
- When scrolling down (`scrollY > 40`): smoothly shrinks via CSS transitions to `0.6rem 2rem` with smaller font sizes (`1.25rem` logo, `0.95rem` links).

### 3. Position Indicator
- In [src/js/main.js](../src/js/main.js), dynamically computes which section lies directly below the navbar on scroll and applies the `.active` class to the corresponding nav link.
- **Bottom Edge Case Handled**: When scrolled to the bottom of the page (`windowHeight + scrollY >= documentHeight - 15`), it automatically highlights the last menu item (`Connect` / `#footer-section`).

### 5. Smooth Scrolling
- Implemented `html { scroll-behavior: smooth; }` along with a custom JS smooth-scroll handler that calculates target section offsets minus navbar height, ensuring headers are never obscured by the sticky navbar.

### 6. Carousel Slider
- 3 distinct slides using the provided assets:
  - **Slide 1**: TelefériQo (`assets/teleferico.jpeg`)
  - **Slide 2**: Historic Center & Churches (`assets/quitohistorical.jpg`)
  - **Slide 3**: Parque Metropolitano (`assets/metropolitano.jpg`)
- Side navigation arrows (`#carouselPrevBtn` & `#carouselNextBtn`) cycle through slides smoothly with CSS3 fade animations (`@keyframes slideFadeIn`).

### 7. Multi-Column Layout
- 4-column card grid in `#facts-section` showcasing:
  1. *2,850m Elevation*
  2. *Eternal Spring Climate*
  3. *1st UNESCO World Heritage Site*
  4. *Pichincha Volcano*

### 8. Centering
- **Horizontal Centering**: All section headers, copy, carousels, and cards are horizontally centered.
- **Vertical Centering**: Hero section (`.stripe-hero`) utilizes Flexbox vertical centering (`@mixin flex-center(column); min-height: 100vh;`), keeping the title, video, and caption vertically centered even as outer element dimensions change.

### 9. Responsiveness
- SCSS media queries optimized across the specified resolutions:
  - `1920x1080` (Desktop Large)
  - `1366x768` (Desktop Medium)
  - `1280x720` (Desktop Small)
  - `1024x768` (Tablet Landscape - 2 column reflow)
  - `768x1024` (Tablet Portrait - responsive nav and cards)
  - `< 580px` (Mobile stack)

### 10. Fixed-Position Background Image
- `#facts-section` uses `background-image: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url("../assets/bancoquito.jpg");` with `background-attachment: fixed; background-size: cover; background-position: center;`.

### 11. Modal Window
- Triggered by the `"Explore Official Resources & Tips"` button.
- Displays official links (UNESCO, Quito Turismo, Ecuador Travel) and high-altitude health tips.
- Can be closed via the close `&times;` button, the footer button, clicking the backdrop, or pressing the `Escape` key.
- Disables body scroll using the `.modal-open` class without inline styles.

### 12. HTML5 Video
- Embedded `<video class="hero-video-bg" autoplay loop muted playsinline poster="assets/bancoquito.jpg">` showcasing `assets/pichinchavideo.mp4` seamlessly looping as the full-bleed background behind the Hero headline and subtitle.
- Includes a semi-transparent dark gradient overlay (`.hero-overlay`) ensuring high contrast and readability for the text while keeping the video active and visible.

### 13. SCSS Features
- Used SCSS variables (`$primary-color`, `$accent-color`, etc.), mixins (`@mixin flex-center`, `@mixin respond-below`), and selector nesting throughout [src/css/main.scss](../src/css/main.scss).

### 14. CSS3 Animations
- Keyframe animations `@keyframes modalFadeIn` and `@keyframes slideFadeIn`, plus CSS3 hover transitions on buttons, links, cards, and arrows.

### 15 & 16. Vector & Social Media Icons
- FontAwesome 6 icons integrated for section illustrations and social links in the footer (Facebook, Instagram, X/Twitter, YouTube).

---

## Strict Rules Verification

| Rule | Requirement | Status |
|---|---|---|
| Rule 3 | No libraries (Bootstrap, jQuery, React, etc.) | **PASSED** (Pure Vanilla JS & SCSS) |
| Rule 4 | No inline styling (`style="..."`) | **PASSED** (0 occurrences in project) |
| Rule 5 | No inline scripts (`<script>...</script>`) | **PASSED** (0 inline script tags) |
| Rule 6 | No HTML tables for layout | **PASSED** (CSS Grid & Flexbox used) |

---

## Build Verification

```powershell
npm run build
# Result: webpack 5.110.1 compiled successfully with 0 errors
```
