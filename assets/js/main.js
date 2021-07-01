/*global $, alert, console */

$(document).ready(function() {

    /* ===============================  click on navbar toggler  =============================== */

    $('.navbar-toggler').on('click', function() {
        $(this).addClass('open');
        $('.sidebar').addClass("opened");
        $('.overlay_gen').fadeIn().on('click', function() {
            $(this).fadeOut();
            $('.navbar-toggler').removeClass('open')
            $('.sidebar').removeClass("opened");
        });
    })

    /* ===============================  haeder carousel  =============================== */
    $(".header .owl-carousel").owlCarousel({
        autoplay: false,
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1,
    });

    /* ===============================  our_picks carousel  =============================== */
    $(".our_team_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
            1201: { items: 4 }
        }
    });

    /* ===============================  clients section  =============================== */

    $(".clients_section .owl-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        loop: true,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    });

    /* ===============================  height of header  =============================== */

    $('#hero, #hero .carousel-content').height($(window).height() - 146)

    $(window).resize(function() {

        $('#hero, #hero .carousel-content').height($(window).height() - 146)

    })


    /* ===============================  Smooth scroll into second section  =============================== */

    $('.smoothscroll').on('click', function() {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'easeInOutExpo')
    })


    /* ===============================  Button Up  =============================== */

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {

            $('.up').addClass('fade')
        } else {

            $('.up').removeClass('fade')
        }
    })

    $('.up').on('click', function() {

        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo')
    })

    /* ===============================  WOW.js  =============================== */

    new WOW().init();


    /* ===============================  venobox  =============================== */
    $('.venobox').venobox({
        bgcolor: '',
        overlayColor: 'rgba(6, 12, 34, 0.85)',
        closeBackground: '',
        closeColor: '#fff'
    });

    /* ===============================  search popup  =============================== */

    $('.search-toggler').on('click', function(e) {
        e.preventDefault();
        $('.search-popup').addClass('active')
    })

    $('.search-popup').on('click', function() {
        $(this).removeClass('active')
    })

    $('.aws-search-form').on('click', function(e) {
        e.stopPropagation();
    })


    /* ===============================  parallax  =============================== */

    $('.jarallax').jarallax({

        // options here

    });


});