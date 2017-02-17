// Create object with methods

var myDoc = {
    makeContainer: function() {
        var cont = document.createElement('div');
        cont.className = 'container';
        cont.innerHTML = '<div class="row"></div><div class="col-xs-2"></div><div class="col-xs-10"><h6>Тест по программированию</h6></div><h6>1. Вопрос №1</h6><ul class="list-unstyled"><li class="col-lg-12"><input type="checkbox" id="one_one"><label class="small" for="one_one">Вариант ответа №1</label></li><li class="col-lg-12"><input type="checkbox" id="two_one"><label class="small" for="two_one">Вариант ответа №2</label></li><li class="col-lg-12"><input type="checkbox" id="three_one"><label class="small" for="three_one">Вариант ответа №3</label></li></ul><h6>2. Вопрос №2</h6><ul class="list-unstyled"><li class="col-lg-12"><input type="checkbox" id="one_two"><label class="small" for="one_two">Вариант ответа №1</label></li><li class="col-lg-12"><input type="checkbox" id="two_two"><label class="small" for="two_two">Вариант ответа №2</label></li><li class="col-lg-12"><input type="checkbox" id="three_two"><label class="small" for="three_two">Вариант ответа №3</label></li></ul><h6>3. Вопрос №3</h6><ul class="list-unstyled"><li class="col-lg-12"><input type="checkbox" id="one_three"><label class="small" for="one_three">Вариант ответа №1</label></li><li class="col-lg-12"><input type="checkbox" id="two_three"><label class="small" for="two_three">Вариант ответа №2</label></li><li class="col-lg-12"><input type="checkbox" id="three_three"><label class="small" for="three_three">Вариант ответа №3</label></li></ul><div class="row"></div><div class="col-xs-2"></div><div class="col-md-10"><button type="button" class="btn btn-primary">Проверить мои результаты</button></div>';
        document.body.appendChild(cont);
    }
}

// Create DOM elements when page ready

window.onload = function() {
    myDoc.makeContainer();
}
