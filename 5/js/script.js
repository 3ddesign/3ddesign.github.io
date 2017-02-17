$(document).ready(function() {

    $('.main-menu').hover(
        function() {
            $(this).children('.sub-menu').stop(true, true);
            $(this).children('.sub-menu').slideDown(600).animate({
                backgroundColor: '#045F94'
            });
        },

        function() {
            $(this).children('.sub-menu').delay(200).slideUp(300).animate({
                backgroundColor: '#258dc8'
            });
        }
    );

    $("#default-usage-select").selectbox().bind('change', function() {
        $('<div>Value of #default-usage-select changed to: ' + $(this).val() + '</div>').appendTo('#demo-default-usage .demoTarget').fadeOut(5000, function() {
            $(this).remove();
        });
    });
});
