/*-----------------------------------------------------------------------------
Theme Name: staco
Author: uigigs
Author URL: https://themeforest.net/user/uigigs/portfolio
-----------------------------------------------------------------------------*/
(function ($) {
    /*-- sticky header scripts start --*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
            $('.header-section').addClass("sticky");
        }
        else {
            $('.header-section').removeClass("sticky");
        }
    });
    /*-- sticky header scripts end --*/

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    var mcpTestmonialContent = $(".mcp-testmonial-slider");
    if (mcpTestmonialContent.length) {
        $(".mcp-testmonial-slider").slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            pauseOnHover: false,
            pauseOnFocus: false,
        });
    }

    new WOW().init();
})(jQuery);