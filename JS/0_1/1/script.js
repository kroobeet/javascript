/*function start (number,totalSum) {
	const num = number || 22123;
	const total = totalSum || 9;
	var result = 0;
	var arr = [];
	arr = String(num).split('');
	if (checkNum(num,total,arr) == true) {
		// sumDigit(num,arr,total);
		return true;
	} else {
		return false;
	}
}*/


program();

function program() {
	document.write('<p>Данный скрипт представляет собой запуск функции рекурсии</p>');
	document.write('<p>Нажмите кнопку "Запустить"</p>');
	document.write('<button onclick="start(1)">Запустить</button>');
}

function start (run) {
	if (run == true) {
		main();
	} else if (run == false) {
		alert('Программа остановилась');
		return run;
	}
}

function stop() {
	program();
}

function main () {
	alert('Вызвалась функция main()');
	document.write('<button onclick="stop()">Остановить</button></br>')
	document.write('<p>В поле 1 введите набор цифр</p>');
	document.write('<p>В поле 2 введите число, которое должно получиться в результате суммирования этих чисел с помощью рекурсии</p>');
	document.write('1. <input type="text" id="num" placeholder="Введите цифры"><br>');
	document.write('2. <input type="text" id="total" placeholder="Введите число..">');


}

/*const num = 241;
var result = 0;
var array = [];
arr = String(num).split('');

function sumDigit(num) {
	arr.push(arr[0]);
	result += Number(arr[0]);
	if (result > 9) {
		result = 0;
		sumDigit(num);
	} else if (result == 9) {
		console.log(result);
	} else {
		arr.shift();
		sumDigit(num);
	}
}

sumDigit(num);*/