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
});
