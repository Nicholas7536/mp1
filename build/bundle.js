/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js"
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

document.addEventListener('DOMContentLoaded', function () {
  // ==========================================================================
  // 1. Navigation Elements & State
  // ==========================================================================
  var navbar = document.getElementById('navbar');
  var navLinks = document.querySelectorAll('.nav-menu .nav-link');
  var sections = [document.getElementById('hero'), document.getElementById('about'), document.getElementById('carousel-section'), document.getElementById('facts-section'), document.getElementById('footer-section')].filter(Boolean);

  // Helper: Set active nav link
  var setActiveLink = function setActiveLink(activeLink) {
    navLinks.forEach(function (link) {
      return link.classList.remove('active');
    });
    if (activeLink) {
      activeLink.classList.add('active');
    }
  };

  // ==========================================================================
  // 2. Sticky Navbar Resizing (Req 4) & Position Indicator (Req 3)
  // ==========================================================================
  var handleScroll = function handleScroll() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    // Navbar Resizing (Req 4): shrink when scrolled down, expand at top
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Position Indicator (Req 3): Check if user reached bottom of page
    if (windowHeight + scrollY >= documentHeight - 15) {
      if (navLinks.length > 0) {
        setActiveLink(navLinks[navLinks.length - 1]);
      }
      return;
    }

    // Position Indicator (Req 3): Highlight section directly below navbar
    var navbarBottom = navbar.getBoundingClientRect().bottom;
    var currentSection = sections[0];
    for (var i = 0; i < sections.length; i++) {
      var rect = sections[i].getBoundingClientRect();
      // Section top is at or above navbar bottom, and section bottom is below navbar bottom
      if (rect.top <= navbarBottom + 20 && rect.bottom > navbarBottom) {
        currentSection = sections[i];
        break;
      }
    }
    if (currentSection) {
      var targetHref = "#".concat(currentSection.id);
      var matchingLink = Array.from(navLinks).find(function (link) {
        return link.getAttribute('href') === targetHref;
      });
      if (matchingLink) {
        setActiveLink(matchingLink);
      }
    }
  };
  window.addEventListener('scroll', handleScroll, {
    passive: true
  });
  // Run once on load
  handleScroll();

  // ==========================================================================
  // 3. Smooth Scrolling with Sticky Navbar Offset (Req 5)
  // ==========================================================================
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        event.preventDefault();
        var targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
          var navHeight = navbar.offsetHeight;
          var elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          var offsetPosition = Math.max(0, elementPosition - navHeight + 2);
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Also handle nav logo link smooth scroll to top
  var navLogo = document.getElementById('navLogo');
  if (navLogo) {
    navLogo.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================================
  // 4. Carousel / Slider (Req 6)
  // ==========================================================================
  var slides = document.querySelectorAll('.carousel-slide');
  var prevBtn = document.getElementById('carouselPrevBtn');
  var nextBtn = document.getElementById('carouselNextBtn');
  var currentSlideIndex = 0;
  var updateSlide = function updateSlide(index) {
    if (slides.length === 0) return;
    currentSlideIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, idx) {
      if (idx === currentSlideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  };
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      updateSlide(currentSlideIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      updateSlide(currentSlideIndex + 1);
    });
  }

  // ==========================================================================
  // 5. Modal Window (Req 11)
  // ==========================================================================
  var infoModal = document.getElementById('infoModal');
  var openModalBtn = document.getElementById('openModalBtn');
  var closeModalBtn = document.getElementById('closeModalBtn');
  var modalCloseActionBtn = document.getElementById('modalCloseActionBtn');
  var openModal = function openModal() {
    if (infoModal) {
      infoModal.classList.add('open');
      document.body.classList.add('modal-open');
    }
  };
  var closeModal = function closeModal() {
    if (infoModal) {
      infoModal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
  };
  if (openModalBtn) {
    openModalBtn.addEventListener('click', openModal);
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  if (modalCloseActionBtn) {
    modalCloseActionBtn.addEventListener('click', closeModal);
  }

  // Close on overlay backdrop click
  if (infoModal) {
    infoModal.addEventListener('click', function (e) {
      if (e.target === infoModal) {
        closeModal();
      }
    });
  }

  // Close on ESC key press
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && infoModal && infoModal.classList.contains('open')) {
      closeModal();
    }
  });
});

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bancoquito.jpg */ "./assets/bancoquito.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ==========================================================================
   SCSS Variables (Req 13)
   ========================================================================== */
/* Breakpoints for responsiveness (Req 9) */
/* ==========================================================================
   SCSS Mixins (Req 13)
   ========================================================================== */
/* ==========================================================================
   Base & Reset (Req 1, 5, 8)
   ========================================================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  /* Smooth scrolling (Req 5) */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #ffffff;
}

body {
  line-height: 1.6;
  overflow-x: hidden;
}
body.modal-open {
  overflow: hidden;
}

/* Full-width horizontal stripes (Req 1, 8) */
.stripe {
  width: 100%;
  padding: 80px 20px;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.text-center {
  text-align: center;
  /* Horizontally centered (Req 8) */
}

.text-white {
  color: #ffffff;
}

.text-light {
  color: #e0e6ed;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}
.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background-color: #e67e22;
  margin: 10px auto 0;
  border-radius: 2px;
}

.section-description {
  font-size: 1.15rem;
  color: #596a7a;
  max-width: 750px;
  margin: 0 auto 2.5rem;
}

/* ==========================================================================
   Sticky Navbar & Navbar Resizing (Req 2, 3, 4)
   ========================================================================== */
.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar {
  background-color: rgba(26, 37, 47, 0.95);
  backdrop-filter: blur(8px);
  transition: padding 0.3s ease, background-color 0.3s ease;
  padding: 1.6rem 2rem;
  /* Initial larger padding (Req 4) */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  /* Resized smaller state on scroll (Req 4) */
}
.navbar .nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar .nav-logo {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.6rem;
  /* Initial larger font (Req 4) */
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: font-size 0.3s ease, color 0.3s ease;
}
.navbar .nav-logo i {
  color: #e67e22;
}
.navbar .nav-logo:hover {
  color: #e67e22;
}
.navbar .nav-menu {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
}
.navbar .nav-menu .nav-item {
  margin: 0;
}
.navbar .nav-menu .nav-item .nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  /* Initial larger font (Req 4) */
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  transition: font-size 0.3s ease, color 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
  border-bottom: 2px solid transparent;
  /* Active position indicator highlight (Req 3) */
}
.navbar .nav-menu .nav-item .nav-link:hover {
  color: #e67e22;
}
.navbar .nav-menu .nav-item .nav-link.active {
  color: #e67e22;
  border-bottom-color: #e67e22;
  background-color: rgba(255, 255, 255, 0.08);
}
.navbar.scrolled {
  padding: 0.6rem 2rem;
  background-color: rgba(26, 37, 47, 0.98);
}
.navbar.scrolled .nav-logo {
  font-size: 1.25rem;
}
.navbar.scrolled .nav-menu .nav-item .nav-link {
  font-size: 0.95rem;
  padding: 0.3rem 0.6rem;
}

/* ==========================================================================
   Section 1: Hero & Centered HTML5 Background Video (Req 8, 12)
   ========================================================================== */
.stripe-hero {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 140px 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Vertically and horizontally centered (Req 8) */
  background-color: #0f172a;
}
.stripe-hero .hero-video-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  -o-object-fit: cover;
     object-fit: cover;
  z-index: 0;
  pointer-events: none;
}
.stripe-hero .hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.72));
  z-index: 1;
}
.stripe-hero .hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  width: 100%;
  text-align: center;
  margin: auto;
}
.stripe-hero .hero-title {
  font-size: 3.6rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.8);
}
.stripe-hero .hero-subtitle {
  font-size: 1.35rem;
  color: #e0e6ed;
  margin-bottom: 2.2rem;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  line-height: 1.5;
}
.stripe-hero .btn-hero {
  background-color: #e67e22;
  color: #ffffff;
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.stripe-hero .btn-hero:hover {
  background-color: #c96a17;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  color: #ffffff;
}

/* ==========================================================================
   Section 2: About & Modal Trigger (Req 1, 8, 11)
   ========================================================================== */
.stripe-about {
  background-color: #ffffff;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}
.btn.btn-primary {
  background-color: #2b5c8f;
  color: #ffffff;
}
.btn.btn-primary:hover {
  background-color: #1e4268;
}
.btn.btn-secondary {
  background-color: #64748b;
  color: #ffffff;
}
.btn.btn-secondary:hover {
  background-color: #475569;
}

/* Modal Window & CSS3 Animations (Req 11, 14) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 2000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
}
.modal-overlay.open {
  display: flex;
}
.modal-overlay .modal-dialog {
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 580px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: modalFadeIn 0.35s ease-out;
  /* CSS3 animation (Req 14) */
}
.modal-overlay .modal-header {
  background-color: #2b5c8f;
  color: #ffffff;
  padding: 1.2rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-overlay .modal-header .modal-title {
  font-size: 1.3rem;
  margin: 0;
}
.modal-overlay .modal-header .modal-close {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.8rem;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s ease;
}
.modal-overlay .modal-header .modal-close:hover {
  color: #e67e22;
}
.modal-overlay .modal-body {
  padding: 1.6rem;
  text-align: left;
}
.modal-overlay .modal-body h4 {
  color: #2b5c8f;
  margin-bottom: 0.6rem;
  margin-top: 1rem;
}
.modal-overlay .modal-body h4:first-child {
  margin-top: 0;
}
.modal-overlay .modal-body .resource-list {
  list-style: none;
  margin-bottom: 1rem;
}
.modal-overlay .modal-body .resource-list li {
  margin-bottom: 0.7rem;
}
.modal-overlay .modal-body .resource-list li a {
  color: #2b5c8f;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}
.modal-overlay .modal-body .resource-list li a:hover {
  color: #e67e22;
  text-decoration: underline;
}
.modal-overlay .modal-body p {
  color: #596a7a;
  font-size: 0.95rem;
}
.modal-overlay .modal-footer {
  padding: 1rem 1.6rem;
  background-color: #f8fafc;
  text-align: right;
  border-top: 1px solid #e2e8f0;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-25px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
/* ==========================================================================
   Section 3: Carousel Slider (Req 6, 14)
   ========================================================================== */
.stripe-carousel {
  background-color: #f8fafc;
}
.stripe-carousel .carousel-container {
  position: relative;
  max-width: 820px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
}
.stripe-carousel .carousel-track {
  position: relative;
  width: 100%;
  min-height: 480px;
}
.stripe-carousel .carousel-slide {
  display: none;
  width: 100%;
}
.stripe-carousel .carousel-slide.active {
  display: block;
  animation: slideFadeIn 0.5s ease-in-out;
  /* CSS3 animation (Req 14) */
}
.stripe-carousel .carousel-slide .carousel-image {
  width: 100%;
  height: 400px;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.stripe-carousel .carousel-slide .carousel-caption {
  padding: 1.5rem;
  background-color: #ffffff;
  text-align: center;
}
.stripe-carousel .carousel-slide .carousel-caption h3 {
  color: #2b5c8f;
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
}
.stripe-carousel .carousel-slide .carousel-caption p {
  color: #596a7a;
  font-size: 1rem;
}
.stripe-carousel .carousel-nav-btn {
  position: absolute;
  top: 200px;
  /* Aligns with middle of 400px image */
  transform: translateY(-50%);
  background-color: rgba(26, 37, 47, 0.7);
  color: #ffffff;
  border: none;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 10;
}
.stripe-carousel .carousel-nav-btn:hover {
  background-color: #e67e22;
  transform: translateY(-50%) scale(1.1);
}
.stripe-carousel .carousel-nav-btn.prev {
  left: 15px;
}
.stripe-carousel .carousel-nav-btn.next {
  right: 15px;
}

@keyframes slideFadeIn {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
/* ==========================================================================
   Section 4: Multi-Column Layout & Fixed Background Image (Req 7, 10)
   ========================================================================== */
.stripe-fixed-bg {
  background-image: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  /* Fixed-position background image (Req 10) */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  padding: 100px 20px;
}

.multi-column-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 4 columns (Req 7 - 3 or more) */
  gap: 1.8rem;
  margin-top: 2rem;
}
.multi-column-grid .info-card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  padding: 2rem 1.5rem;
  color: #2c3e50;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.multi-column-grid .info-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}
.multi-column-grid .info-card .card-icon {
  font-size: 2.4rem;
  color: #e67e22;
  margin-bottom: 1rem;
}
.multi-column-grid .info-card .card-title {
  font-size: 1.25rem;
  color: #2b5c8f;
  margin-bottom: 0.8rem;
}
.multi-column-grid .info-card .card-text {
  font-size: 0.95rem;
  color: #596a7a;
  line-height: 1.5;
}

/* ==========================================================================
   Section 5: Footer & Social Media Icons (Req 1, 8, 15, 16)
   ========================================================================== */
.stripe-footer {
  background-color: #1a252f;
  color: #ffffff;
  padding: 50px 20px 30px;
}
.stripe-footer .footer-title {
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
}
.stripe-footer .footer-description {
  font-size: 0.95rem;
  color: #e0e6ed;
  margin-bottom: 1.5rem;
}
.stripe-footer .social-links {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 1.8rem;
}
.stripe-footer .social-links .social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.stripe-footer .social-links .social-icon:hover {
  background-color: #e67e22;
  transform: translateY(-3px);
}
.stripe-footer .footer-copy {
  font-size: 0.85rem;
  color: #718096;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* ==========================================================================
   Responsiveness Breakpoints (Req 9)
   Tested across 1920x1080, 1366x768, 1280x720, 1024x768, 768x1024
   ========================================================================== */
@media screen and (max-width: 1024px) {
  .multi-column-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .carousel-slide .carousel-image {
    height: 350px;
  }
}
@media screen and (max-width: 768px) {
  .navbar {
    padding: 0.9rem 1.2rem;
  }
  .navbar .nav-container {
    flex-direction: row;
    justify-content: space-between;
  }
  .navbar .nav-logo {
    font-size: 1.3rem;
  }
  .navbar .nav-menu {
    gap: 0.6rem;
  }
  .navbar .nav-menu .nav-item .nav-link {
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
  }
  .navbar.scrolled {
    padding: 0.5rem 1.2rem;
  }
  .navbar.scrolled .nav-logo {
    font-size: 1.15rem;
  }
  .navbar.scrolled .nav-menu .nav-item .nav-link {
    font-size: 0.85rem;
  }

  .stripe-hero {
    padding-top: 130px;
  }
  .stripe-hero .hero-title {
    font-size: 2.3rem;
  }
  .stripe-hero .hero-subtitle {
    font-size: 1.15rem;
  }

  .multi-column-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  .carousel-slide .carousel-image {
    height: 320px;
  }

  .carousel-nav-btn {
    top: 160px;
  }
}
@media screen and (max-width: 580px) {
  .navbar .nav-container {
    flex-direction: column;
    gap: 0.5rem;
  }

  .navbar .nav-menu {
    flex-wrap: wrap;
    justify-content: center;
  }

  .multi-column-grid {
    grid-template-columns: 1fr;
  }

  .carousel-slide .carousel-image {
    height: 240px;
  }

  .carousel-nav-btn {
    top: 120px;
  }

  .stripe-fixed-bg {
    background-attachment: scroll;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["/* ==========================================================================\n   SCSS Variables (Req 13)\n   ========================================================================== */\n$primary-color: #2b5c8f;\n$primary-hover: #1e4268;\n$accent-color: #e67e22;\n$text-dark: #2c3e50;\n$text-muted: #596a7a;\n$text-white: #ffffff;\n$text-light: #e0e6ed;\n$bg-light: #f8fafc;\n$bg-white: #ffffff;\n$bg-dark: #1a252f;\n$border-color: #e2e8f0;\n$shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);\n$shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);\n$shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.25);\n$font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n$transition-speed: 0.3s;\n\n/* Breakpoints for responsiveness (Req 9) */\n$bp-desktop-large: 1920px;\n$bp-desktop-medium: 1366px;\n$bp-desktop-small: 1280px;\n$bp-tablet-landscape: 1024px;\n$bp-tablet-portrait: 768px;\n\n/* ==========================================================================\n   SCSS Mixins (Req 13)\n   ========================================================================== */\n@mixin flex-center($direction: column) {\n    display: flex;\n    flex-direction: $direction;\n    align-items: center;\n    justify-content: center;\n}\n\n@mixin respond-below($width) {\n    @media screen and (max-width: $width) {\n        @content;\n    }\n}\n\n/* ==========================================================================\n   Base & Reset (Req 1, 5, 8)\n   ========================================================================== */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    scroll-behavior: smooth; /* Smooth scrolling (Req 5) */\n    font-family: $font-family;\n    color: $text-dark;\n    background-color: $bg-white;\n}\n\nbody {\n    line-height: 1.6;\n    overflow-x: hidden;\n\n    &.modal-open {\n        overflow: hidden;\n    }\n}\n\n/* Full-width horizontal stripes (Req 1, 8) */\n.stripe {\n    width: 100%;\n    padding: 80px 20px;\n    box-sizing: border-box;\n}\n\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 100%;\n}\n\n.text-center {\n    text-align: center; /* Horizontally centered (Req 8) */\n}\n\n.text-white {\n    color: $text-white;\n}\n\n.text-light {\n    color: $text-light;\n}\n\n.section-title {\n    font-size: 2.2rem;\n    font-weight: 700;\n    margin-bottom: 1rem;\n    position: relative;\n    display: inline-block;\n\n    &::after {\n        content: '';\n        display: block;\n        width: 60px;\n        height: 3px;\n        background-color: $accent-color;\n        margin: 10px auto 0;\n        border-radius: 2px;\n    }\n}\n\n.section-description {\n    font-size: 1.15rem;\n    color: $text-muted;\n    max-width: 750px;\n    margin: 0 auto 2.5rem;\n}\n\n/* ==========================================================================\n   Sticky Navbar & Navbar Resizing (Req 2, 3, 4)\n   ========================================================================== */\n.header-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1000;\n}\n\n.navbar {\n    background-color: rgba(26, 37, 47, 0.95);\n    backdrop-filter: blur(8px);\n    transition: padding $transition-speed ease, background-color $transition-speed ease;\n    padding: 1.6rem 2rem; /* Initial larger padding (Req 4) */\n    box-shadow: $shadow-md;\n\n    .nav-container {\n        max-width: 1200px;\n        margin: 0 auto;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .nav-logo {\n        color: $text-white;\n        text-decoration: none;\n        font-size: 1.6rem; /* Initial larger font (Req 4) */\n        font-weight: 700;\n        display: flex;\n        align-items: center;\n        gap: 0.6rem;\n        transition: font-size $transition-speed ease, color $transition-speed ease;\n\n        i {\n            color: $accent-color;\n        }\n\n        &:hover {\n            color: $accent-color;\n        }\n    }\n\n    .nav-menu {\n        display: flex;\n        list-style: none;\n        gap: 1.5rem;\n        align-items: center;\n\n        .nav-item {\n            margin: 0;\n\n            .nav-link {\n                color: $text-white;\n                text-decoration: none;\n                font-size: 1.1rem; /* Initial larger font (Req 4) */\n                font-weight: 500;\n                padding: 0.4rem 0.8rem;\n                border-radius: 4px;\n                transition: font-size $transition-speed ease, color $transition-speed ease, border-color $transition-speed ease, background-color $transition-speed ease;\n                border-bottom: 2px solid transparent;\n\n                &:hover {\n                    color: $accent-color;\n                }\n\n                /* Active position indicator highlight (Req 3) */\n                &.active {\n                    color: $accent-color;\n                    border-bottom-color: $accent-color;\n                    background-color: rgba(255, 255, 255, 0.08);\n                }\n            }\n        }\n    }\n\n    /* Resized smaller state on scroll (Req 4) */\n    &.scrolled {\n        padding: 0.6rem 2rem;\n        background-color: rgba(26, 37, 47, 0.98);\n\n        .nav-logo {\n            font-size: 1.25rem;\n        }\n\n        .nav-menu .nav-item .nav-link {\n            font-size: 0.95rem;\n            padding: 0.3rem 0.6rem;\n        }\n    }\n}\n\n/* ==========================================================================\n   Section 1: Hero & Centered HTML5 Background Video (Req 8, 12)\n   ========================================================================== */\n.stripe-hero {\n    position: relative;\n    overflow: hidden;\n    min-height: 100vh;\n    padding: 140px 20px 80px;\n    @include flex-center(column); /* Vertically and horizontally centered (Req 8) */\n    background-color: #0f172a;\n\n    .hero-video-bg {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        min-width: 100%;\n        min-height: 100%;\n        width: auto;\n        height: auto;\n        transform: translate(-50%, -50%);\n        object-fit: cover;\n        z-index: 0;\n        pointer-events: none;\n    }\n\n    .hero-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(\n            rgba(15, 23, 42, 0.55),\n            rgba(15, 23, 42, 0.72)\n        );\n        z-index: 1;\n    }\n\n    .hero-content {\n        position: relative;\n        z-index: 2;\n        max-width: 900px;\n        width: 100%;\n        text-align: center;\n        margin: auto;\n    }\n\n    .hero-title {\n        font-size: 3.6rem;\n        font-weight: 800;\n        color: $text-white;\n        margin-bottom: 1rem;\n        letter-spacing: -0.5px;\n        text-shadow: 0 3px 12px rgba(0, 0, 0, 0.8);\n    }\n\n    .hero-subtitle {\n        font-size: 1.35rem;\n        color: $text-light;\n        margin-bottom: 2.2rem;\n        max-width: 780px;\n        margin-left: auto;\n        margin-right: auto;\n        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);\n        line-height: 1.5;\n    }\n\n    .btn-hero {\n        background-color: $accent-color;\n        color: $text-white;\n        font-size: 1.1rem;\n        padding: 0.9rem 2.2rem;\n        text-decoration: none;\n        border-radius: 6px;\n        box-shadow: $shadow-md;\n        display: inline-flex;\n        align-items: center;\n        gap: 0.5rem;\n        transition: background-color $transition-speed ease, transform $transition-speed ease, box-shadow $transition-speed ease;\n\n        &:hover {\n            background-color: darken($accent-color, 8%);\n            transform: translateY(-3px);\n            box-shadow: $shadow-lg;\n            color: $text-white;\n        }\n    }\n}\n\n/* ==========================================================================\n   Section 2: About & Modal Trigger (Req 1, 8, 11)\n   ========================================================================== */\n.stripe-about {\n    background-color: $bg-white;\n}\n\n.btn {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.85rem 1.8rem;\n    font-size: 1rem;\n    font-weight: 600;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    transition: background-color $transition-speed ease, transform $transition-speed ease, box-shadow $transition-speed ease;\n\n    &:hover {\n        transform: translateY(-2px);\n        box-shadow: $shadow-md;\n    }\n\n    &.btn-primary {\n        background-color: $primary-color;\n        color: $text-white;\n\n        &:hover {\n            background-color: $primary-hover;\n        }\n    }\n\n    &.btn-secondary {\n        background-color: #64748b;\n        color: $text-white;\n\n        &:hover {\n            background-color: #475569;\n        }\n    }\n}\n\n/* Modal Window & CSS3 Animations (Req 11, 14) */\n.modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.65);\n    z-index: 2000;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n    backdrop-filter: blur(4px);\n\n    &.open {\n        display: flex;\n    }\n\n    .modal-dialog {\n        background-color: $bg-white;\n        border-radius: 10px;\n        max-width: 580px;\n        width: 100%;\n        box-shadow: $shadow-lg;\n        overflow: hidden;\n        animation: modalFadeIn 0.35s ease-out; /* CSS3 animation (Req 14) */\n    }\n\n    .modal-header {\n        background-color: $primary-color;\n        color: $text-white;\n        padding: 1.2rem 1.6rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        .modal-title {\n            font-size: 1.3rem;\n            margin: 0;\n        }\n\n        .modal-close {\n            background: none;\n            border: none;\n            color: $text-white;\n            font-size: 1.8rem;\n            cursor: pointer;\n            line-height: 1;\n            transition: color $transition-speed ease;\n\n            &:hover {\n                color: $accent-color;\n            }\n        }\n    }\n\n    .modal-body {\n        padding: 1.6rem;\n        text-align: left;\n\n        h4 {\n            color: $primary-color;\n            margin-bottom: 0.6rem;\n            margin-top: 1rem;\n\n            &:first-child {\n                margin-top: 0;\n            }\n        }\n\n        .resource-list {\n            list-style: none;\n            margin-bottom: 1rem;\n\n            li {\n                margin-bottom: 0.7rem;\n\n                a {\n                    color: $primary-color;\n                    text-decoration: none;\n                    font-weight: 500;\n                    display: inline-flex;\n                    align-items: center;\n                    gap: 0.5rem;\n                    transition: color $transition-speed ease;\n\n                    &:hover {\n                        color: $accent-color;\n                        text-decoration: underline;\n                    }\n                }\n            }\n        }\n\n        p {\n            color: $text-muted;\n            font-size: 0.95rem;\n        }\n    }\n\n    .modal-footer {\n        padding: 1rem 1.6rem;\n        background-color: $bg-light;\n        text-align: right;\n        border-top: 1px solid $border-color;\n    }\n}\n\n@keyframes modalFadeIn {\n    from {\n        opacity: 0;\n        transform: translateY(-25px) scale(0.96);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0) scale(1);\n    }\n}\n\n/* ==========================================================================\n   Section 3: Carousel Slider (Req 6, 14)\n   ========================================================================== */\n.stripe-carousel {\n    background-color: $bg-light;\n\n    .carousel-container {\n        position: relative;\n        max-width: 820px;\n        margin: 0 auto;\n        border-radius: 12px;\n        overflow: hidden;\n        box-shadow: $shadow-md;\n        background-color: $bg-white;\n    }\n\n    .carousel-track {\n        position: relative;\n        width: 100%;\n        min-height: 480px;\n    }\n\n    .carousel-slide {\n        display: none;\n        width: 100%;\n\n        &.active {\n            display: block;\n            animation: slideFadeIn 0.5s ease-in-out; /* CSS3 animation (Req 14) */\n        }\n\n        .carousel-image {\n            width: 100%;\n            height: 400px;\n            object-fit: cover;\n            display: block;\n        }\n\n        .carousel-caption {\n            padding: 1.5rem;\n            background-color: $bg-white;\n            text-align: center;\n\n            h3 {\n                color: $primary-color;\n                font-size: 1.4rem;\n                margin-bottom: 0.4rem;\n            }\n\n            p {\n                color: $text-muted;\n                font-size: 1rem;\n            }\n        }\n    }\n\n    .carousel-nav-btn {\n        position: absolute;\n        top: 200px; /* Aligns with middle of 400px image */\n        transform: translateY(-50%);\n        background-color: rgba(26, 37, 47, 0.7);\n        color: $text-white;\n        border: none;\n        width: 46px;\n        height: 46px;\n        border-radius: 50%;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.2rem;\n        transition: background-color $transition-speed ease, transform $transition-speed ease;\n        z-index: 10;\n\n        &:hover {\n            background-color: $accent-color;\n            transform: translateY(-50%) scale(1.1);\n        }\n\n        &.prev {\n            left: 15px;\n        }\n\n        &.next {\n            right: 15px;\n        }\n    }\n}\n\n@keyframes slideFadeIn {\n    from {\n        opacity: 0.4;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n/* ==========================================================================\n   Section 4: Multi-Column Layout & Fixed Background Image (Req 7, 10)\n   ========================================================================== */\n.stripe-fixed-bg {\n    background-image: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(\"../assets/bancoquito.jpg\");\n    background-attachment: fixed; /* Fixed-position background image (Req 10) */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    color: $text-white;\n    padding: 100px 20px;\n}\n\n.multi-column-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr); /* 4 columns (Req 7 - 3 or more) */\n    gap: 1.8rem;\n    margin-top: 2rem;\n\n    .info-card {\n        background-color: rgba(255, 255, 255, 0.95);\n        border-radius: 10px;\n        padding: 2rem 1.5rem;\n        color: $text-dark;\n        box-shadow: $shadow-md;\n        transition: transform $transition-speed ease, box-shadow $transition-speed ease;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        &:hover {\n            transform: translateY(-6px);\n            box-shadow: $shadow-lg;\n        }\n\n        .card-icon {\n            font-size: 2.4rem;\n            color: $accent-color;\n            margin-bottom: 1rem;\n        }\n\n        .card-title {\n            font-size: 1.25rem;\n            color: $primary-color;\n            margin-bottom: 0.8rem;\n        }\n\n        .card-text {\n            font-size: 0.95rem;\n            color: $text-muted;\n            line-height: 1.5;\n        }\n    }\n}\n\n/* ==========================================================================\n   Section 5: Footer & Social Media Icons (Req 1, 8, 15, 16)\n   ========================================================================== */\n.stripe-footer {\n    background-color: $bg-dark;\n    color: $text-white;\n    padding: 50px 20px 30px;\n\n    .footer-title {\n        font-size: 1.4rem;\n        margin-bottom: 0.4rem;\n    }\n\n    .footer-description {\n        font-size: 0.95rem;\n        color: $text-light;\n        margin-bottom: 1.5rem;\n    }\n\n    .social-links {\n        display: flex;\n        justify-content: center;\n        gap: 1.2rem;\n        margin-bottom: 1.8rem;\n\n        .social-icon {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 42px;\n            height: 42px;\n            border-radius: 50%;\n            background-color: rgba(255, 255, 255, 0.1);\n            color: $text-white;\n            text-decoration: none;\n            font-size: 1.1rem;\n            transition: background-color $transition-speed ease, transform $transition-speed ease;\n\n            &:hover {\n                background-color: $accent-color;\n                transform: translateY(-3px);\n            }\n        }\n    }\n\n    .footer-copy {\n        font-size: 0.85rem;\n        color: #718096;\n        border-top: 1px solid rgba(255, 255, 255, 0.1);\n        padding-top: 1.2rem;\n        max-width: 600px;\n        margin: 0 auto;\n    }\n}\n\n/* ==========================================================================\n   Responsiveness Breakpoints (Req 9)\n   Tested across 1920x1080, 1366x768, 1280x720, 1024x768, 768x1024\n   ========================================================================== */\n@include respond-below($bp-tablet-landscape) {\n    .multi-column-grid {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 1.5rem;\n    }\n\n    .hero-title {\n        font-size: 2.5rem;\n    }\n\n    .carousel-slide .carousel-image {\n        height: 350px;\n    }\n}\n\n@include respond-below($bp-tablet-portrait) {\n    .navbar {\n        padding: 0.9rem 1.2rem;\n\n        .nav-container {\n            flex-direction: row;\n            justify-content: space-between;\n        }\n\n        .nav-logo {\n            font-size: 1.3rem;\n        }\n\n        .nav-menu {\n            gap: 0.6rem;\n\n            .nav-item .nav-link {\n                font-size: 0.9rem;\n                padding: 0.25rem 0.5rem;\n            }\n        }\n\n        &.scrolled {\n            padding: 0.5rem 1.2rem;\n\n            .nav-logo {\n                font-size: 1.15rem;\n            }\n\n            .nav-menu .nav-item .nav-link {\n                font-size: 0.85rem;\n            }\n        }\n    }\n\n    .stripe-hero {\n        padding-top: 130px;\n\n        .hero-title {\n            font-size: 2.3rem;\n        }\n\n        .hero-subtitle {\n            font-size: 1.15rem;\n        }\n    }\n\n    .multi-column-grid {\n        grid-template-columns: repeat(2, 1fr);\n        gap: 1.2rem;\n    }\n\n    .carousel-slide .carousel-image {\n        height: 320px;\n    }\n\n    .carousel-nav-btn {\n        top: 160px;\n    }\n}\n\n@media screen and (max-width: 580px) {\n    .navbar .nav-container {\n        flex-direction: column;\n        gap: 0.5rem;\n    }\n\n    .navbar .nav-menu {\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n\n    .multi-column-grid {\n        grid-template-columns: 1fr;\n    }\n\n    .carousel-slide .carousel-image {\n        height: 240px;\n    }\n\n    .carousel-nav-btn {\n        top: 120px;\n    }\n\n    .stripe-fixed-bg {\n        background-attachment: scroll;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bancoquito.jpg */ "./assets/bancoquito.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pichinchavideo.mp4 */ "./assets/pichinchavideo.mp4"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/teleferico.jpeg */ "./assets/teleferico.jpeg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/quitohistorical.jpg */ "./assets/quitohistorical.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/metropolitano.jpg */ "./assets/metropolitano.jpg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Quito, Ecuador & Pichincha Volcano</title>\n    <!-- Scalable vector icons (FontAwesome) -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\" />\n</head>\n<body>\n\n    <!-- Sticky Navigation Bar (Req 2, 3, 4, 15, 16) -->\n    <header class=\"header-nav\" id=\"mainHeader\">\n        <nav class=\"navbar\" id=\"navbar\">\n            <div class=\"nav-container\">\n                <a href=\"#hero\" class=\"nav-logo\" id=\"navLogo\">\n                    <i class=\"fa-solid fa-mountain-sun\"></i> Quito & Pichincha\n                </a>\n                <ul class=\"nav-menu\" id=\"navMenu\">\n                    <li class=\"nav-item\">\n                        <a href=\"#hero\" class=\"nav-link active\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#about\" class=\"nav-link\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#carousel-section\" class=\"nav-link\">Highlights</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#facts-section\" class=\"nav-link\">Quick Facts</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a href=\"#footer-section\" class=\"nav-link\">Connect</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </header>\n\n    <!-- Section 1: Hero & Background HTML5 Video Section (Req 1, 8, 12) -->\n    <section class=\"stripe stripe-hero\" id=\"hero\">\n        <video class=\"hero-video-bg\" autoplay loop muted playsinline poster=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n            <source src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" type=\"video/mp4\" />\n            Your browser does not support the video tag.\n        </video>\n        <div class=\"hero-overlay\"></div>\n        <div class=\"hero-content\">\n            <h1 class=\"hero-title\">Quito, Ecuador</h1>\n            <p class=\"hero-subtitle\">The Historic Andean Capital in the Shadow of Pichincha Volcano</p>\n            <a href=\"#about\" class=\"btn btn-hero\">\n                <i class=\"fa-solid fa-compass\"></i> Discover Quito\n            </a>\n        </div>\n    </section>\n\n    <!-- Section 2: About & Modal Trigger Section (Req 1, 8, 11) -->\n    <section class=\"stripe stripe-about\" id=\"about\">\n        <div class=\"container text-center\">\n            <h2 class=\"section-title\">Discover the Middle of the World</h2>\n            <p class=\"section-description\">\n                Perched high in the Andes mountains at an elevation of 2,850 meters, Quito is the closest capital city to the equator. Surrounded by dramatic volcanic peaks and home to the best-preserved historic center in the Americas, it offers an unforgettable blend of natural wonder and cultural legacy.\n            </p>\n            <button class=\"btn btn-primary\" id=\"openModalBtn\">\n                <i class=\"fa-solid fa-circle-info\"></i> Explore Official Resources & Tips\n            </button>\n        </div>\n    </section>\n\n    <!-- Modal Window (Req 11, 14) -->\n    <div class=\"modal-overlay\" id=\"infoModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modalTitle\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title\" id=\"modalTitle\">Official Resources & Visitor Tips</h3>\n                <button class=\"modal-close\" id=\"closeModalBtn\" aria-label=\"Close modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <h4>Helpful Travel & Heritage Links</h4>\n                <ul class=\"resource-list\">\n                    <li>\n                        <a href=\"https://whc.unesco.org/en/list/2/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <i class=\"fa-solid fa-landmark\"></i> UNESCO World Heritage Center - City of Quito\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://visitquito.ec/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <i class=\"fa-solid fa-compass\"></i> Quito Turismo - Official Tourism Board\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://ecuador.travel/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <i class=\"fa-solid fa-plane-departure\"></i> Ecuador Travel - Ministry of Tourism\n                        </a>\n                    </li>\n                </ul>\n                <h4>High Altitude Tips (2,850m+)</h4>\n                <p>\n                    Stay hydrated, take it easy on your first day, and wear sun protection—the equatorial sun at high altitudes is intense! If you plan to hike Rucu Pichincha from TelefériQo, start early in the morning before mountain clouds roll in.\n                </p>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" id=\"modalCloseActionBtn\">Close</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- Section 3: Carousel Slider Section (Req 1, 6, 8) -->\n    <section class=\"stripe stripe-carousel\" id=\"carousel-section\">\n        <div class=\"container text-center\">\n            <h2 class=\"section-title\">Iconic Destinations</h2>\n            <p class=\"section-description\">\n                Explore three must-visit places in Quito, from towering peaks to historic plazas and urban parks.\n            </p>\n            <div class=\"carousel-container\" id=\"carousel\">\n                <button class=\"carousel-nav-btn prev\" id=\"carouselPrevBtn\" aria-label=\"Previous Slide\">\n                    <i class=\"fa-solid fa-chevron-left\"></i>\n                </button>\n\n                <div class=\"carousel-track\">\n                    <!-- Slide 1: Teleferiqo -->\n                    <div class=\"carousel-slide active\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"TelefériQo Cable Car ascending Pichincha Volcano\" class=\"carousel-image\" />\n                        <div class=\"carousel-caption\">\n                            <h3>TelefériQo Quito</h3>\n                            <p>One of the highest cable cars in the world, taking you up to Cruz Loma on Pichincha at 3,945m.</p>\n                        </div>\n                    </div>\n\n                    <!-- Slide 2: Historical Center -->\n                    <div class=\"carousel-slide\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Colonial churches and architecture in Historic Quito\" class=\"carousel-image\" />\n                        <div class=\"carousel-caption\">\n                            <h3>Historic Center & Churches</h3>\n                            <p>Magnificent colonial architecture including the iconic Basílica del Voto Nacional and San Francisco.</p>\n                        </div>\n                    </div>\n\n                    <!-- Slide 3: Parque Metropolitano -->\n                    <div class=\"carousel-slide\">\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Parque Metropolitano Guangüiltagua overlooking Quito\" class=\"carousel-image\" />\n                        <div class=\"carousel-caption\">\n                            <h3>Parque Metropolitano</h3>\n                            <p>Nearly 1,400 acres of peaceful eucalyptus trails offering sweeping views of the Andean valleys.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <button class=\"carousel-nav-btn next\" id=\"carouselNextBtn\" aria-label=\"Next Slide\">\n                    <i class=\"fa-solid fa-chevron-right\"></i>\n                </button>\n            </div>\n        </div>\n    </section>\n\n    <!-- Section 4: Multi-Column Facts with Fixed Background Image (Req 1, 7, 8, 10, 15) -->\n    <section class=\"stripe stripe-fixed-bg\" id=\"facts-section\">\n        <div class=\"container text-center\">\n            <h2 class=\"section-title text-white\">Quito at a Glance</h2>\n            <p class=\"section-description text-light\">\n                Discover key facts about Ecuador's highland capital nestled against the volcanic Andes.\n            </p>\n            <div class=\"multi-column-grid\">\n                <!-- Column 1: Elevation -->\n                <div class=\"info-card\">\n                    <div class=\"card-icon\">\n                        <i class=\"fa-solid fa-mountain\"></i>\n                    </div>\n                    <h3 class=\"card-title\">2,850m Elevation</h3>\n                    <p class=\"card-text\">\n                        The second-highest official capital city in the world, sitting right in the Guayllabamba river basin in the northern Andes.\n                    </p>\n                </div>\n\n                <!-- Column 2: Climate -->\n                <div class=\"info-card\">\n                    <div class=\"card-icon\">\n                        <i class=\"fa-solid fa-cloud-sun\"></i>\n                    </div>\n                    <h3 class=\"card-title\">Eternal Spring</h3>\n                    <p class=\"card-text\">\n                        Thanks to its equatorial altitude, Quito enjoys steady daytime temperatures between 18°C and 22°C all 365 days of the year.\n                    </p>\n                </div>\n\n                <!-- Column 3: UNESCO -->\n                <div class=\"info-card\">\n                    <div class=\"card-icon\">\n                        <i class=\"fa-solid fa-award\"></i>\n                    </div>\n                    <h3 class=\"card-title\">1st UNESCO Site</h3>\n                    <p class=\"card-text\">\n                        In 1978, UNESCO declared Quito the very first World Cultural Heritage city alongside Krakow, Poland for its preservation.\n                    </p>\n                </div>\n\n                <!-- Column 4: Volcano -->\n                <div class=\"info-card\">\n                    <div class=\"card-icon\">\n                        <i class=\"fa-solid fa-volcano\"></i>\n                    </div>\n                    <h3 class=\"card-title\">Pichincha Volcano</h3>\n                    <p class=\"card-text\">\n                        Its active stratovolcano neighbor features two summits: Rucu (4,698m) and Guagua (4,784m), visible from across the city.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Section 5: Footer & Social Media (Req 1, 8, 15, 16) -->\n    <footer class=\"stripe stripe-footer\" id=\"footer-section\">\n        <div class=\"container text-center\">\n            <h3 class=\"footer-title\">Quito & Pichincha Showcase</h3>\n            <p class=\"footer-description\">Celebrating the culture, geography, and beauty of Ecuador's capital.</p>\n            <div class=\"social-links\">\n                <a href=\"https://www.facebook.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-icon\" aria-label=\"Facebook\">\n                    <i class=\"fa-brands fa-facebook-f\"></i>\n                </a>\n                <a href=\"https://www.instagram.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-icon\" aria-label=\"Instagram\">\n                    <i class=\"fa-brands fa-instagram\"></i>\n                </a>\n                <a href=\"https://www.twitter.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-icon\" aria-label=\"X (Twitter)\">\n                    <i class=\"fa-brands fa-x-twitter\"></i>\n                </a>\n                <a href=\"https://www.youtube.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"social-icon\" aria-label=\"YouTube\">\n                    <i class=\"fa-brands fa-youtube\"></i>\n                </a>\n            </div>\n            <p class=\"footer-copy\">&copy; 2026 CS409 MP1 Showcase. All rights reserved.</p>\n        </div>\n    </footer>\n\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./assets/pichinchavideo.mp4"
/*!***********************************!*\
  !*** ./assets/pichinchavideo.mp4 ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "afaff95118839acee414.mp4";

/***/ },

/***/ "./assets/teleferico.jpeg"
/*!********************************!*\
  !*** ./assets/teleferico.jpeg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "3dd89c7e351a2e9c731d.jpeg";

/***/ },

/***/ "./assets/bancoquito.jpg"
/*!*******************************!*\
  !*** ./assets/bancoquito.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "aaf673177b7ac2b8b3de.jpg";

/***/ },

/***/ "./assets/metropolitano.jpg"
/*!**********************************!*\
  !*** ./assets/metropolitano.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "fd231539b248ae177184.jpg";

/***/ },

/***/ "./assets/quitohistorical.jpg"
/*!************************************!*\
  !*** ./assets/quitohistorical.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "5c63294d141ca68e3637.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map