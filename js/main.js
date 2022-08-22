
$(window).on("load", function () {

    /*-------------------preloader-------------------*/
    $(".preloader").fadeOut("slow")
});

$(document).ready(function () {

    /*-------------------Navbar Shrink--------------------*/
    new WOW().init();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
            $(".top-bar").addClass("hide");
            $(".top-bar").removeClass("show");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
            $(".top-bar").addClass("show");
            $(".top-bar").removeClass("hide");
        }
    });

    /*-------------------Toggle Theme light & dark mode--------------------*/
    function toggleTheme() {
        if (localStorage.getItem("shala-theme") !== null) {
            if (localStorage.getItem("shala-theme") === "dark") {
                $("body").addClass("dark")
            }
            else {
                $("body").removeClass("dark")
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme", "dark");
        }
        else {
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    });
    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});

/*--------------------- Back To Top ------------------------*/


$(document).ready(function () {

    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 300) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }

    });

    $('.back-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });

    /*--------------------- Partners Carousel ------------------------*/

    $('.partners-carousel').owlCarousel({
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });

    /*--------------------- Services Carousel ------------------------*/

    $('.services-carousel').owlCarousel({
        nav: true,
        margin: 14,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*--------------------- Products Carousel ------------------------*/

    $('.products-carousel').owlCarousel({
        nav: true,
        margin: 14,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*--------------------- Testimonials Carousel ------------------------*/

    $('.testimonials-carousel').owlCarousel({
        nav: true,
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
    /*--------------------- Phone With Flag ------------------------*/

    var input = document.querySelector("#phone");
    if (input) {
        window.intlTelInput(input, {
            separateDialCode: true,
            preferredCountries: ["ru", "jp", "pk", "no"]
        });
    }
    /*--------------------- Product Images Toggle  ------------------------*/

    $('.product-img img').attr("src", $(".product-images div.active img").attr("src"));
    $('.product-images div img').click(function (e) {
        $(".product-images div").removeClass('active');
        $(this).parent().addClass('active');
        e.preventDefault();
        if ($(this).parent().hasClass('active')) {
            var img = $(this).attr("src");
        }
        $('.product-img img').attr("src", img);
    });
})

