function pow(a, b) {
    if (b >= 0) {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result *= a;
        }
        console.log(a + ' в степени ' + b + ' равно ' + result);
    } else {
        var result = 1;
        var bn = -b;
        for (var i = 0; i < bn; i++) {
            result *= a;
        }
        console.log(a + ' в степени ' + b + ' равно ' + 1 / result);
    }
}

var num = prompt("Введите целое число:");
if (parseInt(num) != num) {
    alert("Вы ввели не целое число!");
} else {
    var degree = prompt("Введите степень:");
    pow(num, degree)
}
