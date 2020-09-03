/* Вывод столбца из чисел от 1 до 100 */
for (let i = 0; i <= 100; i++) {
	document.write(i + '<br>');
}
document.write('<br>');
/* Вывод столба из чисел от 100 до 1 */
for (let i= 100; i >= 1; i--) {
	document.write(i + '<br>');
}
document.write('<br>');
/* Вывод столбца четных чисел от 1 до 100 */
for (let i = 0; i <= 100; i+=2) {
	document.write(i + '<br>');
}
document.write('<br>');
/* Заполнение массива символом 'X' */
var arr = [];
for (let i = 0; i < 10; i++) {
	arr.push('X');
}
document.write(arr);
document.write('<br>');
/* Заполнение массива числами от 1 до 10 */
arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push(i);
}
document.write(arr);
document.write('<br>');

/* Заполнение массива дробными числами от 0 до 1 */
arr = [];
function getRandomArbitary(min,max) {
	numArbitary = Math.random() * (max-min) + min;
	return numArbitary;
}

for (let i = 0; i < 10; i++) {
	var numArbitary;
	getRandomArbitary(0,1);
	arr.push(numArbitary.toFixed(2));
}

document.write(arr);
document.write('<br>');
/* Заполнение массива 10-ю целыми случайными числами от 1 до 10 */
arr = [];
function getRandomInt(min,max) {
	numInt = Math.floor(Math.random() * (max-min+1)) + min;
	return numInt;
}

for (let i = 0; i < 10; i++) {
	var numInt;
	getRandomInt(1,10);
	arr.push(numInt);
}
document.write(arr);
document.write('<br>');

arr = [];
/* Вывести числа из массива, которые меньше больше нуля и меньше 10 */
for (let i = 0; i < 50; i++) {
	var numInt;
	getRandomInt(0,30);
	arr.push(numInt);
}

document.write(arr);
document.write('<br>');
var newArr = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] < 10) {
		newArr.push(arr[i]);
	}
}

/* Проверить, есть ли в массиве цифра 5 */
document.write('Здесь ищем 5:    ' + newArr + '<br>');
var flag = false;
for (let i = 0; i < newArr.length; i++) {
	if (newArr[i] == 5) {
		document.write('Цифра ' + newArr[i] + ' есть в массиве <br>');
		flag = true;
		break;
	}
}

if (flag == false) {
	document.write('Цифры 5 нет в массиве <br>');
}

/* Найдём сумму элементов массивов newArr и arr*/
var newArrAverage = 0;
var totalSum = 0;
for (var i = 0; i < newArr.length; i++) {
	totalSum += newArr[i];
}
newArrAverage = totalSum / newArr.length;

document.write('Сумма элементов массива newArr равна ' + totalSum + '<br>');

var arrAverage = 0;
var arrTotalSum = 0;
var totalSum = 0;
for (var i = 0; i < arr.length; i++) {
	totalSum += arr[i];
}
arrAverage = totalSum / arr.length;

document.write('Сумма элементов массива arr равна ' + totalSum + '<br>');

/* Найдём сумму квадратов элементов массиво newArr и arr */
var totalSum = 0;
for (let i = 0; i < newArr.length; i++) {
	totalSum += Math.pow(newArr[i],2);
}
document.write('Сумма квадратов элементов массива newArr равна ' + totalSum + '<br>');


var totalSum = 0;
for (let i = 0; i < arr.length; i++) {
	totalSum += Math.pow(arr[i],2);
}
document.write('Сумма квадратов элементов массива arr равна ' + totalSum + '<br>');

/* Среднее арифметическое элементов массивов */
document.write('Среднее арифметическое элементов массива newArr равно ' + newArrAverage.toFixed(2) + '<br>');
document.write('Среднее арифметическое элементов массива arr равно ' + arrAverage.toFixed(2) + '<br>');