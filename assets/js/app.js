var uri = new URI();

$(document).ready(function () {
    // Loader
    $('.loader').fadeOut(1000, function () {
        $(this).remove();
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