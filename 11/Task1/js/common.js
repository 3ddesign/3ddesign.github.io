var num = prompt("Введите целое число:");
if (parseInt(num) != num) {
    alert("Вы ввели не целое число!");
} else {
    var degree = prompt("Введите степень:");
    console.log(extpow.pow(num, degree));
}
