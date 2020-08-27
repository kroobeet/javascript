// цикл выводит числа из массива, которые больше 3-х, но меньше 10-ти
var arr = [2,5,9,15,0,4];
document.write('Массив ' + arr + ' ');
document.write('</br>');
for (var i = 0; i<arr.length; i++) {
    if (arr[i] < 10 && arr[i] > 3) {
        document.write(arr[i]);
        document.write('<br>')
    }
}

document.write('</br>');
document.write('</br>');
document.write('</br>');

// Цикл делит n на 2 до тех пор, пока n не будет меньше 50
// затем выводит количество итераций цикла
var n = 1000;
var num = 0;
for (var i = 1; n > 50; i++) {
    num += i;
    n /= 2;
}
document.write(num);
document.write('</br>');
document.write('</br>');
document.write('</br>');
document.write('</br>');



/*
* Цикл выделяет курсивом текущий день недели
*/
var date = new Date().getDay();

var days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}

for (var i = 1; i<=7 ;i++) {
    if (i == date) {
        document.write('<i>' + days[i] + '</i>');
        document.write('</br>');
    } else {
        document.write(days[i]);
        document.write('</br>');
    }
}

document.write('</br>');
document.write('</br>');
document.write('</br>');

