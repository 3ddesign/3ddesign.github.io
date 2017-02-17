$(function() {

    var html = $('#mycont').html();


    var myInfo = {
        name: 'ЩЕРБАКОВ ДМИТРИЙ ИВАНОВИЧ',
        img_path: 'img/myphoto.jpg',
        education: 'Студент ВМУРоЛ "Украина"',
        header1: 'Хочу учить форнтенд, потому что:',
        ul1: 'Хочу видеть результат работы сразу',
        ul2: 'Люблю изучать новые технологии',
        ul3: 'Надоела рутинная работа',
        header2: 'Мой контактный телефон:',
        phone: '+380673926228',
        header3: 'Мой профиль в Фейсбук:',
        facebook: 'facebook.com/dmitry.scherbakov.585',
        header4: 'Мой фидбек:',
        feedback: 'Если нужно, могу сверстать такую страничку)'
    };

    var myContent = tmpl(html, {
        content: myInfo
    });


    $('body').append(myContent);

});
