$(function() {
    $("#services").click(function() {
        $("html, body").animate({
            scrollTop: $("header").height()
        }, "slow");
        return false;
    });
    $("#story").click(function() {
        $("html, body").animate({
            scrollTop: $(".stor-sec").offset().top
        }, "slow");
        return false;
    });
    $("#work").click(function() {
        $("html, body").animate({
            scrollTop: $(".rece-sec").offset().top
        }, "slow");
        return false;
    });
    $("#journal").click(function() {
        $("html, body").animate({
            scrollTop: $(".sub-sec").offset().top
        }, "slow");
        return false;
    });
    $("#contact").click(function() {
        $("html, body").animate({
            scrollTop: $(".soc-sec").offset().top
        }, "slow");
        return false;
    });

    $("body").on("click", ".top", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

    // $(".serv-item").animated("fadeInRight");

    $("body").append('<div class="top"><i class="fa fa-arrow-up">');


    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
            $(".top").addClass("active");
        } else {
            $(".top").removeClass("active");
        }
    });
});
