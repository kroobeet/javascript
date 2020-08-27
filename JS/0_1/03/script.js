alert("Массивы и объекты");

var arr = ['a','b','c'];

alert('массив arr содержит в себе следующие данные: '+ arr);

var arr = ['a','b','c','d'];
alert(arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3]);

var arr = [2,5,3,9];
var result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result);

var obj = {a: 1, b: 2, c: 3};
alert('Выводим с помощью свойства obj.c  ' + obj.c);
alert('Выводим с помощью квадратных скобок obj["c"]  ' + obj['c']);

var obj = {Коля: '1000', Вася: '500', Петя: '200'};
alert('Зарплата Пети ' + obj.Петя);
alert('Зарплата Коли ' + obj.Коля);

var day = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};
var date = new Date().getDay();

alert('Сейчас ' + day[date]);

var arr = [[1,2,3],[4,5,6],[7,8,9]];
alert(arr[1][0]);

var obj = {
    js: ['jQuery','Angular'],
    php: ['hello'],
    css: ['world']
};

alert(obj.js[0]);

var obj = {
    ru: {1: 'День недели Понедельник', 2: 'День недели Вторник', 3: 'День недели Среда', 4: 'День недели Четверг', 5: 'День недели Пятница', 6: 'День недели Суббота', 7: 'День недели Воскресенье'},
    en: {1: 'Day of week Monday', 2: 'Day of week Tuesday', 3: 'Day of week Wednesday', 4: 'Day of week Thursday', 5: 'Day of week Friday', 6: 'Day of week Saturday', 7: 'Day of week Sunday'}
};

var choseLanguage = prompt('ru - 1, en - 2');

var lang = {
    1: 'ru',
    2: 'en'
}

var takeDay = {
    1: 'Введине номер дня недели',
    2: 'Enter number day of week'
}

var enterDay = prompt(takeDay[choseLanguage]);
var resultLang = lang[choseLanguage];
var result = obj[resultLang][enterDay];

alert(result);