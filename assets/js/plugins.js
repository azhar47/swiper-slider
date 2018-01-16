// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

  /*-- Section-Scroll--*/
            $(function () {
                $('#full-body').fullpage({});
            });

            /*-- Section-Scroll--*/


/*------Single Slide JS---------*/
$(function (){
        var mySwiper = new Swiper('.single .swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay: 3000
                },
                speed: 300,
                effect: "slide",
//                Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar'
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar'
                }
            });
});



/*------Single Slide with Cube effect JS---------*/
$(function () {
      var mySwiper1 = new Swiper('.single2 .swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                effect: "cube",
                speed: 800,
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true

                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
});

/*------Responsive Multiple Item Slide JS---------*/
$(function () {
      var mySwiper2 = new Swiper('.multilple .swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                slidesPerView: 5,
                spaceBetween: 40,
                centeredSlides: false,

                autoplay: {
                    delay: 3000
                },
                speed: 300,
                effect: "slide",
//                Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                        centeredSlides: false,

                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                        centeredSlides: false,

                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            });
});
