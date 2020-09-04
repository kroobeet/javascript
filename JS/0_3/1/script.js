const input = document.getElementById('inp');
var resultNum = 0;
var arr = [];

function elemCalc(elem) {
	input.value += elem.value;
	arr.push(elem.value);
	var symbol = elem.value;
	var firstSymbol = arr[0];
	checkFirstInInput(firstSymbol);
	console.log(getSymbol(symbol));
}

function check() {
	alert(arr);
	var lastSymbol = arr.length-1;
	checkLastInSymbol(arr[lastSymbol]);
	alert(arr);
}


// проверить символ на
function getSymbol(symbol) {
	if (symbol == '+' || symbol == '-' || symbol == '*' || symbol == '/') {
		return symbol;
	} else {
		return false;
	}
}


// итоговая функция
function result() {

}




// удалить последний элемент
function del() {
   	input.value=input.value.replace(/.$/, "");
	arr.pop();
}


// очистить полностью
function clearValue() {
	arr = [];
	input.value = '';
}

// предыдущее получившееся число
function prevNum() {
	for (let i = 0; i < arr.length; i++) {
		
	}
}

// следующее получившееся число
function nextNum() {

}

// проверить первый символ
function checkFirstInInput (firstSymbol) {
	var num = Number(firstSymbol);
	if (Number(num) >= 0 || num <= 9) {
		return true;
	} else {
		alert('Первый символ должен быть числом');
		input.value=input.value.replace(/.$/, "");
		arr.pop();
		return false;
	}
}

// проверить последний символ
function checkLastInSymbol (lastSymbol) {
	var num = Number(lastSymbol);
	if (Number(num) >= 0 || num <= 9) {
		return true;
	} else {
		alert('Последний символ должен быть числом');
		input.value=input.value.replace(/.$/, "");
		arr.pop();
		return false;
	}
}