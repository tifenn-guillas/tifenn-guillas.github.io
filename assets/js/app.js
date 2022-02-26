var uri = new URI();

$(document).ready(function () {
    // Loader
    $('.loader').fadeOut(1000, function () {
        $(this).remove();
    });

    // Mobile menu
    $('#mobile-menu-button').on('click', function(e) {
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
    $('.navbar-nav .nav-link, footer a, a.active-anchor').bind('click', function (event) {
        var anchor = $(this);
        var anchorId = anchor.attr('href').split("#")[1];
        animateAnchor(anchorId, event);
    });

    // CHECK HASH
    if (uri.hash().length > 0) {
        animateAnchor(uri.hash().substr(1));
    }
});

function animateAnchor(anchorId, event) {
    var elm = $("[id="+anchorId+"]");

    if (elm.length >= 1) {
        changeUrl(elm.text(), uri.origin()+uri.pathname()+'#'+anchorId);
        $('html, body').stop().animate({
            scrollTop: parseInt(elm.offset().top)-100
        }, 1000);
        if(event) {
            event.preventDefault();
        }
    }
}

function changeUrl(title, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        console.error("Browser does not support HTML5.");
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