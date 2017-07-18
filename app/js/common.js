
$(document).ready(function(){
    $('select').niceSelect();

    /**
     * Hide investor type select until user will select organiztion type
     */
    $('select#investor-type-select').niceSelect('destroy');
    $('select#investor-type-select').hide();

    /**
     * Show investor type select if `QTC intermediary` selected
     */
    $('select#organisation-type').change(function(){
        var val = $(this).find('option:selected').val();
        var investorTypeSelect = $('select#investor-type-select');

        if(val === 'Investor') {
            investorTypeSelect.show();
            investorTypeSelect.niceSelect();
        } else {
            investorTypeSelect.niceSelect('destroy');
            investorTypeSelect.hide();
        }
    });

    /**
     * Show other input, on investor type select
     */
    $('select#investor-type-select').change(function(){
        var val = $(this).find('option:selected').val();
        var investorTypeInput = $('input#investor-type-input');
        val === 'Other (please specify)' ? investorTypeInput.show() : investorTypeInput.hide();
    });

    /**
     * Slick initializtion
     */
    $('.slide-wrapp').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 400
    });

    /**
     * Slider change slide functionality
     */
    $('.js-btn-next').on('click', function(){
        var parentPage = $(this).parent();
        var reqFields = parentPage.find('[required]');

        var pass = $(parentPage).find('input[name="password"]');
        var confirmPass = $(parentPage).find('input[name="confirm-password"]');

        var errMessage = '';

        // password fields validation
        if (pass && confirmPass && pass.val() !== confirmPass.val()) {
            errMessage = 'ERROR: PASSWORDS DO NOT MATCH';
        }

        // required fields validation
        $(reqFields).each(function(){
            !$(this).val() ? errMessage = '* DENOTES MANDATORY INFORMATION' : null;
        });

        errMessage === '' ? $('.slide-wrapp').slick('slickNext') : null;
        parentPage.find('.inform').text(errMessage);

    });

    $('.js-btn-prev').on('click', function(){
        $('.slide-wrapp').slick('slickPrev');
    });

    //TODO: add submit request
    $('.js-onboarding-form').on('submit', function() {
        return false;
    })


    $('.slick-dots > * > button').on('click', function(){
      return false;
    });

});
