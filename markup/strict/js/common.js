$(function() {
    // Preloader:
    $(window).on('load', function() {
        $('.preloader').delay(1000).fadeOut('slow');
    });

    // Initialize wow.js:
    new WOW().init();


    //Pop-up:
    $(".toform-btn").magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //Slide menu:
    var animove = function() {
        $(".down-link").click(function() {
            $("html, body").animate({
                scrollTop: $("header").height()
            }, "slow");
            return false;
        });
        $("#about-mnu").click(function() {
            $("html, body").animate({
                scrollTop: $(".about-section").offset().top
            }, "slow");
            return false;
        });
        $("#home-mnu").click(function() {
            $("html, body").animate({
                scrollTop: $("#home").offset().top
            }, "slow");
            return false;
        });
        $("#works-mnu").click(function() {
            $("html, body").animate({
                scrollTop: $(".work-section").offset().top
            }, "slow");
            return false;
        });
        $("#contact-mnu").click(function() {
            $("html, body").animate({
                scrollTop: $("footer").offset().top
            }, "slow");
            return false;
        });

        $("body").on("click", ".top", function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        });
    };

    //Mmenu:

    animove();

    $(".sf-menu").after("<div id='my-menu'>");
    $(".sf-menu").clone().appendTo("#my-menu");
    $("#my-menu").find("*").attr("style", "");
    $("#my-menu").find("ul").removeClass("sf-menu");
    $("#my-menu").mmenu({
        extensions: ["fx-menu-fade"],
        navbar: {
            title: "Menu"
        }
    });


    var api = $("#my-menu").data("mmenu");
    api.bind("closed", function() {
        $(".toggle-mnu").removeClass("on");
    });

    $(".mobile-mnu").click(function() {
        var mmAPI = $("#my-menu").data("mmenu");
        mmAPI.open();
        var thiss = $(this).find(".toggle-mnu");
        thiss.toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    animove();

    //Link to TOP:
    $("body").append('<div class="top"><i class="fa fa-angle-double-up" aria-hidden="true"></i>');

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $(".top").addClass("active");
        } else {
            $(".top").removeClass("active");
        }
    });


    //E-mail Ajax Send
    $(".callback").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            $(".success").addClass("visible");
            setTimeout(function() {
                th.trigger("reset");
                $(".success").removeClass("visible");
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });

    //contact form (not done):
    $(".cont-btn").click(function() {
        $(".success").addClass("visible");
        setTimeout(function() {
            $(".success").fadeOut('slow');
        }, 2000);
    });

    //No drag
    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
});
