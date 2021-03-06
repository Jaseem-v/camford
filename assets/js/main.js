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
    animateOut: 'fadeOut',
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


//////////////////////////////////////////
// youtube

$('.popup-youtube ').magnificPopup({
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
            '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/',

                id: 'v=', 

                src: '//www.youtube.com/embed/%id%?autoplay=1' 
            }
        },

        srcAction: 'iframe_src', 
    }


});




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


/////////////////////////////////////////////
/////// COUNTER

var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});

//////////////////////////////////////////
// Read More Btn
function toggleReadMore(key) {
    let dots = $('#paragraphDots' + key);
    let moreText = $('#paragraphMore' + key);
    let btnText = $('#paragraphBtn' + key);

    if (dots.css('display') === 'none') {
        dots.css('display', 'inline');
        btnText.html('Read more');
        moreText.css('display', 'none');
    } else {
        dots.css('display', 'none');
        btnText.html('Read less');
        moreText.css('display', 'inline');
    }
}
