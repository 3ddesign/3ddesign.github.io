// Create object with methods

var myDoc = {
    makeContainer: function() {
        var cont = document.createElement('div');
        cont.className = 'container';
        container = document.body.appendChild(cont);
    },

    makeDiv1: function() {
        var div1 = document.createElement('div');
        div1.className = 'row';
        container.appendChild(div1);
    },

    makeDiv2: function() {
        var div2 = document.createElement('div');
        div2.className = 'col-xs-2';
        container.appendChild(div2);
    },

    makeDiv3: function() {
        var div3 = document.createElement('div');
        div3.className = 'col-xs-10';
        divHeader = container.appendChild(div3);
    },

    makeHeader: function() {
        var header = document.createElement('h6');
        header.innerHTML = 'Тест по программированию';
        divHeader.appendChild(header);
    },

    makeHeaderQuest1: function() {
        var headerOne = document.createElement('h6');
        headerOne.innerHTML = '1. Вопрос №1';
        container.appendChild(headerOne);
    },
    makeHeaderQuest2: function() {
        var headerTwo = document.createElement('h6');
        headerTwo.innerHTML = '2. Вопрос №2';
        container.appendChild(headerTwo);
    },
    makeHeaderQuest3: function() {
        var headerThree = document.createElement('h6');
        headerThree.innerHTML = '3. Вопрос №3';
        container.appendChild(headerThree);
    },

    makeUl: function() {
        var ul1 = document.createElement('ul');
        ul1.className = 'list-unstyled';
        ulOne = container.appendChild(ul1);
    },

    makeLiOne: function() {
        var liFirst = document.createElement('li');
        var liSecond = document.createElement('li');
        var liThird = document.createElement('li');
        liFirst.innerHTML = '<input type="checkbox" id="one_one"><label class="small" for="one_one">Вариант ответа №1</label>';
        liSecond.innerHTML = '<input type="checkbox" id="two_one"><label class="small" for="two_one" >Вариант ответа №2</label>';
        liThird.innerHTML = '<input type="checkbox" id="three_one"><label class="small" for="three_one">Вариант ответа №3</label>';
        ulOne.appendChild(liFirst);
        ulOne.appendChild(liSecond);
        ulOne.appendChild(liThird);
        liFirst.className = 'col-lg-12';
        liSecond.className = 'col-lg-12';
        liThird.className = 'col-lg-12';
    },

    makeLiTwo: function() {
        var liFirst = document.createElement('li');
        var liSecond = document.createElement('li');
        var liThird = document.createElement('li');
        liFirst.innerHTML = '<input type="checkbox" id="one_two"><label class="small" for="one_two">Вариант ответа №1</label>';
        liSecond.innerHTML = '<input type="checkbox" id="two_two"><label class="small" for="two_two" >Вариант ответа №2</label>';
        liThird.innerHTML = '<input type="checkbox" id="three_two"><label class="small" for="three_two">Вариант ответа №3</label>';
        ulOne.appendChild(liFirst);
        ulOne.appendChild(liSecond);
        ulOne.appendChild(liThird);
        liFirst.className = 'col-lg-12';
        liSecond.className = 'col-lg-12';
        liThird.className = 'col-lg-12';
    },

    makeLiThree: function() {
        var liFirst = document.createElement('li');
        var liSecond = document.createElement('li');
        var liThird = document.createElement('li');
        liFirst.innerHTML = '<input type="checkbox" id="one_three"><label class="small" for="one_three">Вариант ответа №1</label>';
        liSecond.innerHTML = '<input type="checkbox" id="two_three"><label class="small" for="two_three" >Вариант ответа №2</label>';
        liThird.innerHTML = '<input type="checkbox" id="three_three"><label class="small" for="three_three">Вариант ответа №3</label>';
        ulOne.appendChild(liFirst);
        ulOne.appendChild(liSecond);
        ulOne.appendChild(liThird);
        liFirst.className = 'col-lg-12';
        liSecond.className = 'col-lg-12';
        liThird.className = 'col-lg-12';
    },

    makeButton: function() {
        var divButton = document.createElement('div');
        divButton.className = 'col-md-10';
        divButton.innerHTML = '<button type="button" class="btn btn-primary">Проверить мои результаты</button>';
        divHeader = container.appendChild(divButton);
    },

}
// Create DOM elements when page ready

window.onload = function() {
    myDoc.makeContainer();
    myDoc.makeDiv1();
    myDoc.makeDiv2();
    myDoc.makeDiv3();
    myDoc.makeHeader();
    myDoc.makeHeaderQuest1();
    myDoc.makeUl();
    myDoc.makeLiOne();
    myDoc.makeHeaderQuest2();
    myDoc.makeUl();
    myDoc.makeLiTwo();
    myDoc.makeHeaderQuest3();
    myDoc.makeUl();
    myDoc.makeLiThree();
    myDoc.makeDiv1();
    myDoc.makeDiv2();
    myDoc.makeButton();
}
