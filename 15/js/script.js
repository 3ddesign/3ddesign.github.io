$(document).ready(function() {

    $(".btn").on('click', function() {
        seerch1();
    });

    $('.search').keypress(function(e) {
        if (e.which == 13) {
            seerch1();
        }
    });

    function seerch1() {
        var request = $('.search').val();
        var URL = "https://pixabay.com/api/?key=" + '4341489-c7135f07e924eb271481ce96f' + "&q=" + encodeURIComponent(request);
        $.getJSON(URL, function(data) {
            $('.searchresult').empty();
            data.hits.splice(10);
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function(i, hit) {
                    $('.searchresult').append('<a target="_blank" href="' + hit.pageURL + '">' + hit.pageURL + '</a>');
                });
            else
                $('.searchresult').append('<p>По Вашему запросу ничего не найдено...</p>');
        });
    }

});

//гугл сказал: "The Google Web Search API is no longer available. Please migrate to the Google Custom Search API (https://developers.google.com/custom-search/)"
