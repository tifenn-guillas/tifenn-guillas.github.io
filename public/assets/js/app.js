// NOTE: carousel (.slick) et popup (.magnificPopup) ajoutés en E3-S12
new WOW().init();

$(document).ready(function () {
    // Loader
    $('.loader').fadeOut(1000, function () {
        $(this).remove();
    });

    // Navbar
    let lastId;
    let mobileMenuItems = $('nav:first').find('li').find('.anchor');
    let desktopMenuItems = $('nav:last').find('li').find('.anchor');
    let scrollItems = mobileMenuItems.map(function () {
        const item = $($(this).attr('href'));
        if (item.length) { return item; }
    });

    collapseNavbar();
    scrollSpyNavbar();

    $(window).scroll(function () {
        collapseNavbar();
        scrollSpyNavbar();
    });

    function scrollSpyNavbar() {
        const fromTop = $(this).scrollTop();
        let cur = scrollItems.map(function () {
            if ($(this).offset().top <= fromTop + 1) {
                return this;
            } else if ((window.innerHeight + window.scrollY + 1) >= document.body.scrollHeight) {
                return this;
            }
        });
        cur = cur[cur.length - 1];
        const id = cur && cur.length ? cur[0].id : '';
        if (lastId !== id) {
            lastId = id;
            mobileMenuItems.parent().removeClass('active').end().filter('[href="#' + id + '"]').parent().addClass('active');
            desktopMenuItems.parent().removeClass('active').end().filter('[href="#' + id + '"]').parent().addClass('active');
        }
    }

    // Mobile menu
    $('#mobile-menu-button').click(function (e) {
        e.preventDefault();
        if ($('#mobile-menu-button').attr('aria-expanded') === 'true') {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    $('.li-section').click(function () {
        closeMobileMenu();
    });

    // Smooth scroll
    $('.anchor').bind('click', function (event) {
        const anchor = $(this);
        const anchorId = anchor.attr('href').split('#')[1];
        animateAnchor(anchorId, event);
    });
});

function collapseNavbar() {
    if ($('.nav-desktop').offset().top > 50 || $('.nav-mobile').offset().top > 50) {
        $('nav').removeClass('navbar-expanded').addClass('navbar-collapsed');
    } else {
        $('nav').removeClass('navbar-collapsed').addClass('navbar-expanded');
    }
}

function animateAnchor(anchorId, event) {
    const elm = $('[id=' + anchorId + ']');
    if (elm.length >= 1) {
        $('html, body').stop().animate({ scrollTop: elm.offset().top }, 1500, 'easeInOutExpo');
        if (event) { event.preventDefault(); }
    }
}

function openMobileMenu() {
    $('#mobile-menu-button-closed').hide();
    $('#mobile-menu-button-opened').show();
    $('#mobile-menu-button').attr('aria-expanded', 'true');
    $('#mobile-menu-sections').removeClass('hidden');
}

function closeMobileMenu() {
    $('#mobile-menu-button-closed').show();
    $('#mobile-menu-button-opened').hide();
    $('#mobile-menu-button').attr('aria-expanded', 'false');
    $('#mobile-menu-sections').addClass('hidden');
}
