document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Navigation Elements & State
    // ==========================================================================
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    const sections = [
        document.getElementById('hero'),
        document.getElementById('about'),
        document.getElementById('carousel-section'),
        document.getElementById('facts-section'),
        document.getElementById('footer-section')
    ].filter(Boolean);

    // Helper: Set active nav link
    const setActiveLink = (activeLink) => {
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLink) {
            activeLink.classList.add('active');
        }
    };

    // ==========================================================================
    // 2. Sticky Navbar Resizing (Req 4) & Position Indicator (Req 3)
    // ==========================================================================
    const handleScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

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
        const navbarBottom = navbar.getBoundingClientRect().bottom;
        let currentSection = sections[0];

        for (let i = 0; i < sections.length; i++) {
            const rect = sections[i].getBoundingClientRect();
            // Section top is at or above navbar bottom, and section bottom is below navbar bottom
            if (rect.top <= navbarBottom + 20 && rect.bottom > navbarBottom) {
                currentSection = sections[i];
                break;
            }
        }

        if (currentSection) {
            const targetHref = `#${currentSection.id}`;
            const matchingLink = Array.from(navLinks).find(
                link => link.getAttribute('href') === targetHref
            );
            if (matchingLink) {
                setActiveLink(matchingLink);
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load
    handleScroll();

    // ==========================================================================
    // 3. Smooth Scrolling with Sticky Navbar Offset (Req 5)
    // ==========================================================================
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.getElementById(targetId.substring(1));
                if (targetElement) {
                    const navHeight = navbar.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = Math.max(0, elementPosition - navHeight + 2);

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Also handle nav logo link smooth scroll to top
    const navLogo = document.getElementById('navLogo');
    if (navLogo) {
        navLogo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================================================
    // 4. Carousel / Slider (Req 6)
    // ==========================================================================
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');
    let currentSlideIndex = 0;

    const updateSlide = (index) => {
        if (slides.length === 0) return;
        currentSlideIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, idx) => {
            if (idx === currentSlideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            updateSlide(currentSlideIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateSlide(currentSlideIndex + 1);
        });
    }

    // ==========================================================================
    // 5. Modal Window (Req 11)
    // ==========================================================================
    const infoModal = document.getElementById('infoModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');

    const openModal = () => {
        if (infoModal) {
            infoModal.classList.add('open');
            document.body.classList.add('modal-open');
        }
    };

    const closeModal = () => {
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
        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                closeModal();
            }
        });
    }

    // Close on ESC key press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && infoModal && infoModal.classList.contains('open')) {
            closeModal();
        }
    });
});
