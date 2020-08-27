var number = prompt('Введите число');

if (!+number) {
    alert('Вы ввели не число');
} else if (+number > 0) {
    alert('Число больше нуля');
} else if (+number == 0) {
    alert('Число равно 0');
} else {
    alert('Число меньше нуля');
}

var quarter = prompt('Введите число от 1 до 4 включительно');

switch (+quarter) {
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Весна');
        break;
    case 3:
        alert('Лето');
        break;
    case 4:
        alert('Осень');
        break;
    default:
        alert('Ввод неверных данных');
        break;
}

var day = Number(prompt('Введите день месяца от 1 до 31 (включительно)'));

if (1 <= day && day <= 10) {
    alert('Число находится в первой декаде месяца');
} else if (10 < day && day <= 20) {
    alert('Число находится во второй декаде месяца');
} else if (20 < day && day <= 31) {
    alert('Число находится в третьей декаде месяца');
} else {
    alert('Ввод неверных данных');
};

var itIsA = prompt('Введите строку');
if (itIsA[0] == 'a') {
    alert('Первый символ строки это \'a\' ');
} else {
    alert('Первый символ строки не \'a\' ');
}

var strNumbers = prompt('Введите строку из 6-ти цифр. А мы узнаем, равна ли сумма первых трёх цифр и сумма вторых трёх цифр');
var num = strNumbers;
if (+num[0]+ +num[1]+ +num[2] == +num[3] + +num[4] + +num[5]) {
    alert('Совпадает');
} else {
    alert('Не совпадает');
}