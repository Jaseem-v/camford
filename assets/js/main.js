//////////////////////////
///BANNER SWIPER

"use script";


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    // animateOut: 'slideOutUp',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

var swiper = new Swiper(".expert-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});


//////////////////////////////////////////
// youtube

// $(document).ready(function () {
//     $('.youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
//         disableOn: 700,
//         type: 'iframe',
//         mainClass: 'mfp-fade',
//         removalDelay: 160,
//         preloader: false,

//         fixedContentPos: false
//     });
// });


$('.video-btn ').magnificPopup({
    type: 'iframe',
    disableOn: function () { // don't use a popup for mobile
        if ($(window).width() < 600) {
            return false;
        }
        return true;
    },

    iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
            youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; }

                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            }
        },

        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }


});


// //////////////////
//TABS

$("#tile-1 .nav-tabs a").click(function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#tile-1 .slider").css({ "left": + position.left, "width": width });
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({ "left": + actPosition.left, "width": actWidth });



// //////////////////
//GALLERY
$('.single-gallery-item .popup-btn').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
})

/////////////////////////////////////////
// mobile - menu


// ------------mobile-menu----//
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
    navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)

// -----xx-------mobile-menu--xx--//

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

})
