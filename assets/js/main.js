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
            0: { items: 1, nav: true, dots: false },
            576: { items: 2, dots: false },
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

    /********************** owl carousel thumb ***********************/

    var bigimage = $("#big_image");
    var thumbs = $("#thumbs_gallary");
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: false,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function() {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 3,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 4,
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });




});