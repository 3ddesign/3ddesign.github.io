$(document).ready(function() {
    const allQuestions = {
        question1: `1. Что такое jQuery плагины?`,
        answer1: `Часть функционала jQuery, вынесенная в отдельный файл`,
        answer2: `Особые возможности jQuery`,
        answer3: `Набор функций использующих jQuery`,
        question2: `2. Какой файл обязательно должен включать плагин?`,
        answer4: `Файл CSS стилей`,
        answer5: `Javascript файл`,
        answer6: `html файл`,
        question3: `3. В каком объекте не хранятся jQuery-функции?`,
        answer7: `jQuery.function`,
        answer8: `jQuery.fn`,
        answer9: `jQuery.prototype`,
        rightAnswers: [false, false, true, false, true, false, true, false, true],
    };

    // to local Storage
    localStorage.setItem('quizj', JSON.stringify(allQuestions));

    // from local Storage
    let quizContent = JSON.parse(localStorage.getItem('quizj'));

    // Render with tmpl.js
    const html = $('#quiz').html();
    const myQuiz = tmpl(html, {
        content: quizContent
    });
    $('body').append(myQuiz);

    // Modal and check
    $("#check").click(function() {
        let checkArr = $('input:checkbox').map(function() {
            return this.checked;
        }).get();
        let flag = true;
        for (let i = 0; i < checkArr.length; i++) {
            if (checkArr[i] == quizContent.rightAnswers[i]) {} else {
                flag = false;
            }
        }
        if (flag === true) {
            $('body').append(('<div id="openModal" class="overlay"><div><a href="#close" class="close">X</a><p>Все ответы верны!<br>Поздравляем!</p></div></div>'));
            $(".close").click(function() {
                $("#openModal").remove();
            });
            $("input:checkbox").prop("checked", false);
        } else {
            $('body').append(('<div id="openModal" class="overlay"><div><a href="#close" class="close">X</a><p>Вы допустили ошибку в ответе попробуйте еще раз</p></div></div>'));
            $(".close").click(function() {
                $("#openModal").remove();
            });
            $("input:checkbox").prop("checked", false);
        }
    });
});
