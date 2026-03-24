document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    if (!hamburger || !mobileMenu) return;

    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (hamburger.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Mobile Price Reveal
    const priceLinks = document.querySelectorAll('a[href="#price"]');
    const priceSection = document.getElementById('price');

    if (priceSection) {
        priceLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    if (!priceSection.classList.contains('show-price')) {
                        e.preventDefault();
                        priceSection.classList.add('show-price');
                        
                        setTimeout(() => {
                            priceSection.scrollIntoView({ behavior: 'smooth' });
                        }, 50);
                    }
                    
                    if (hamburger && hamburger.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            });
        });
    }

    // Mobile Gift Card Reveal
    const btnGcSum = document.getElementById('btn-gc-sum');
    const btnGcSrv = document.getElementById('btn-gc-srv');
    const contentGcSum = document.getElementById('gc-content-sum');
    const contentGcSrv = document.getElementById('gc-content-srv');

    if (btnGcSum && contentGcSum) {
        btnGcSum.addEventListener('click', () => {
            contentGcSum.classList.toggle('show-gc');
            // Hide the other one
            if (contentGcSrv) contentGcSrv.classList.remove('show-gc');
        });
    }

    if (btnGcSrv && contentGcSrv) {
        btnGcSrv.addEventListener('click', () => {
            contentGcSrv.classList.toggle('show-gc');
            // Hide the other one
            if (contentGcSum) contentGcSum.classList.remove('show-gc');
        });
    }
});
