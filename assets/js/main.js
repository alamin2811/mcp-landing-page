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

    /*-- hand1 start --*/
    var hand1 = $(".hand1");
    if (hand1.length) {
        $(window).on("scroll", function () {
            var hand1 = $(".hand1");
            var y = window.scrollY;
            var x;
            x = hand1.offset().top;
            x = x - 200;

            let animationValue = 0;
            animationValue = (y - x) / 3;

            let animationStop = 100;

            if (animationValue < 0) {
                animationValue = 0;
            }

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            hand1.css("transform", `translateY(${animationValue}px)`);
        });
    }
    /*-- hand1 end --*/

    /*-- hand2 start --*/
    var hand2 = $(".hand2");
    if (hand2.length) {
        $(window).on("scroll", function () {
            var hand2 = $(".hand2");
            var y = window.scrollY;
            var x;
            x = hand2.offset().top;
            x = x - 200;

            let animationValue = 0;
            animationValue = (y - x) / 3;

            let animationStop = 100;

            if (animationValue < 0) {
                animationValue = 0;
            }

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            hand2.css("transform", `translateY(${animationValue}px)`);
        });
    }
    /*-- hand2 end --*/

    /*-- hand3 start --*/
    var hand3 = $(".hand3");
    if (hand3.length) {
        $(window).on("scroll", function () {
            var hand3 = $(".hand3");
            var y = window.scrollY;
            var x;
            x = hand3.offset().top;
            x = x - 200;

            let animationValue = 0;
            animationValue = (-1 * (y - x)) / 3;

            let animationStop = 100;

            if (animationValue < 0) {
                animationValue = 0;
            }

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            hand3.css("transform", `translateY(${animationValue}px)`);
        });
    }
    /*-- hand3 end --*/
    
    /*-- women start --*/
    var women = $(".women");
    if (women.length) {
        $(window).on("scroll", function () {
            var women = $(".women");
            var y = window.scrollY;
            var x;
            x = women.offset().top;
            x = x - 200;

            let animationValue = 0;
            animationValue = (-1 * (y - x)) / 5;

            let animationStop = 100;

            if (animationValue < 0) {
                animationValue = 0;
            }

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            women.css("transform", `translateX(${animationValue}px)`);
        });
    }
    /*-- women end --*/

})(jQuery);