$(document).foundation();

//custom js
jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            jQuery("h1.brand").hide();
            jQuery("a.nav-title").show();
            jQuery(".top-bar-title").show();
            jQuery('.topbar-responsive').css('background', 'rgba(255,255,255,.9)');
            jQuery('.topbar-responsive').addClass('scroll');
        } else {
            jQuery("h1.brand").show();
            jQuery("a.nav-title").hide();
            jQuery(".top-bar-title").hide();
            jQuery('.topbar-responsive').css('background', 'none');
            jQuery('.topbar-responsive').removeClass('scroll');
        }
    });
    jQuery(document).mouseup(function(e) {
        var container = jQuery('#contact-panel');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('is-active');
        }
    });
    jQuery('a.image-link').click(function(e) {
        e.preventDefault();
    });
});

//init video
jQuery(window).load(function() {
    if (jQuery('.ulstervideopromo').length !== 0) {
        jQuery('.ulstervideopromo').ulsterVideoPromo();
        jQuery('.video-promo iframe.video').ulsterResponsiveVideo();
    }
});
jQuery(document).ready(function() {
    if (jQuery('a.ulsterpopup').length !== 0) {
        jQuery('a.ulsterpopup').ulsterPopup();
    }
});
