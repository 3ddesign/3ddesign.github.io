//Функция поиска по массиву

function search(value, array) {
    for (var i = 0; i < 5; i++) {
        if (array[i] == value) return alert(name + ", вы успешно вошли.");
    }
    return alert("Ошибка! Такого имени нет в массиве");;
}

//Создаем и заполняем массив

var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(prompt('Введите имя ' + i + ':'));
}

var name = prompt('Введите имя пользователя:');

//Запускам поиск по массиву

search(name, arr);
