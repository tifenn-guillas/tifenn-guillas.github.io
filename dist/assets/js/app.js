const uri = new URI();

$(document).ready(function () {
    // Loader
    $('.loader').fadeOut(1000, function () {
        $(this).remove();
    });

    // Navbar
    let lastId;
    // All list items
    let mobileMenuItems = $('nav:first').find('li').find('a');
    let desktopMenuItems = $('nav:last').find('li').find('a');
    // Anchors corresponding to menu items
    let scrollItems = $('nav:first').find('.li-section').map(function() {
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
        // Get container scroll position
        const fromTop = $(this).scrollTop();

        // Get id of current scroll item
        let cur = scrollItems.map(function(){
            if ($(this).offset().top <= fromTop + 1) {
                return this;
                // Page bottom reached
            } else if ((window.innerHeight + window.scrollY + 1) >= document.body.scrollHeight) {
                return this;
            }
        });

        // Get the id of the current element
        cur = cur[cur.length-1];
        const id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            mobileMenuItems
                .parent().removeClass('active')
                .end().filter('[href="#'+id+'"]').parent().addClass('active');
            desktopMenuItems
                .parent().removeClass('active')
                .end().filter('[href="#'+id+'"]').parent().addClass('active');
        }
    }

    // WOW animations
    new WOW().init();

    // Mobile menu
    $('#mobile-menu-button').click(function(e) {
        e.preventDefault();
        if ($('#mobile-menu-button').attr('aria-expanded') === 'true') {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    $('.li-section').click(function() {
        closeMobileMenu();
    });

    // Carousel
    $('.carousel').slick({
        infinite: true
    });

    // Popup for portfolio
    $('.image-popup').magnificPopup({
        type: 'inline',
        gallery:{
            enabled:true
        },
        mainClass: 'mfp-zoom-in'
    });
    $('.popup-modal-close').click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    // jQuery smooth scrolling
    $('.anchor').bind('click', function (event) {
        const anchor = $(this);
        const anchorId = anchor.attr('href').split('#')[1];
        animateAnchor(anchorId, event);
    });

    // CHECK HASH
    if (uri.hash().length > 0) {
        animateAnchor(uri.hash().substr(1));
    }
});

function collapseNavbar() {
    if ($('.nav-desktop').offset().top > 50 || $('.nav-mobile').offset().top > 50) {
        $('nav').removeClass('navbar-expanded').addClass('navbar-collapsed');
    } else {
        $('nav').removeClass('navbar-collapsed').addClass('navbar-expanded');

    }
}

function animateAnchor(anchorId, event) {
    const elm = $('[id='+anchorId+']');

    if (elm.length >= 1) {
        changeUrl(elm.text(), uri.origin()+uri.pathname()+'#'+anchorId);
        $('html, body').stop().animate({
            scrollTop: elm.offset().top
        }, 1500, 'easeInOutExpo');
        if(event) {
            event.preventDefault();
        }
    }
}

function changeUrl(title, url) {
    if (typeof (history.pushState) != 'undefined') {
        const obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        console.error('Browser does not support HTML5.');
    }
}

function openMobileMenu() {
    $('#mobile-menu-button-closed').addClass('hidden');
    $('#mobile-menu-button-opened').removeClass('hidden');
    $('#mobile-menu-button').attr('aria-expanded', 'true');
    $('#mobile-menu-sections').removeClass('hidden');
}
function closeMobileMenu() {
    $('#mobile-menu-button-closed').removeClass('hidden');
    $('#mobile-menu-button-opened').addClass('hidden');
    $('#mobile-menu-button').attr('aria-expanded', 'false');
    $('#mobile-menu-sections').addClass('hidden');
}