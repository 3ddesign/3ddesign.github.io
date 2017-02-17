$(document).ready(function() {
    //Tabs:
    $('div.window2').hide();
    $('div.window3').hide();
    $('li').click(function() {
        $('div.window1').hide();
        $('div.window2').hide();
        $('div.window3').hide();
        var tab = this.className.slice(3, 4);
        $('div.window' + tab).show();
    });


    //Tooltips:

    $('#firstname').focus(function() {
        $('.t1').remove();
        $('#tools').parent().append('<div class="t1"><h5>Please provide your firstname.</h5></div>');
        $('.t1').fadeIn(500);
    });

    $('#lastname').focus(function() {
        $('.t1').remove();
        $('.t2').remove();
        $('#tools').parent().append('<div class="t2"><h5>Please provide also your lastname.</h5></div>');
        $('.t2').fadeIn(500);
    });
    $('#lastname').focusout(function() {
        $('.t2').remove();
    });

    $('#address').focus(function() {
        $('.t3').remove();
        $('.t1').remove();
        $('#tools').parent().append('<div class="t3"><h5>Your home or work address.</h5></div>');
        $('.t3').fadeIn(500);
    });
    $('#address').focusout(function() {
        $('.t3').remove();
    });


    $('#firstname').hover(function() {
            $('.t1').remove();
            $('#tools').parent().append('<div class="t1"><h5>Please provide your firstname.</h5></div>');
            $('.t1').fadeIn(500);
        },
        function() {
            $('.t1').fadeOut(300);
        });

    $('#lastname').hover(function() {
            $('.t1').remove();
            $('.t2').remove();
            $('#tools').parent().append('<div class="t2"><h5>Please provide also your lastname.</h5></div>');
            $('.t2').fadeIn(500);
        },
        function() {
            $('.t2').fadeOut(300);
        });

    $('#address').hover(function() {
            $('.t3').remove();
            $('.t1').remove();
            $('#tools').parent().append('<div class="t3"><h5>Your home or work address.</h5></div>');
            $('.t3').fadeIn(500);
        },
        function() {
            $('.t3').fadeOut(300);
        });

    $('#help').click(function() {
        $('#tools').parent().append('<div class="t1"><h5>Please provide your firstname.</h5></div>');
        $('.t1').fadeIn(500);
        $('.t2').fadeIn(500);
        $('.t3').fadeIn(500);
    });
});
