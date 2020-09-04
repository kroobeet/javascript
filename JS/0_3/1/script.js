const input = document.getElementById('inp');
var resultat = 0;
var arr = [];

function elemCalc(elem) {
	input.value += elem.value;
	arr.push(elem.value);
	var symbol = elem.value;
	var firstSymbol = arr[0];
	checkFirstInInput(firstSymbol);
}

function check() {
	alert(arr);
	var lastSymbol = arr.length-1;
	checkLastInSymbol(arr[lastSymbol]);
	alert(arr);
	result();
}


// проверить символ на
function getSymbol(symbol) {
	if (symbol == '+' || symbol == '-' || symbol == '*' || symbol == '/') {
		return symbol;
	} else {
		return false;
	}
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

// предыдущее получившееся число
function prevNum() {
	var prevNum = '';
	flag = true;
	while (flag == true) {
		if(!getSymbol(arr[0])) {
			prevNum += arr[0];
			arr.shift();
		} else {
			prevNum = Number(prevNum);
			nextNum();
			switch (symbol) {
				case '+':
					resultat = prevNum + nextNum;
					console.log(result);
					break;
				case '*':
					resultat = prevNum * nextNum;
					console.log(result);
					break;
				case '/':
					resultat = prevNum / nextNum;
					console.log(result);
					break;
				case '-':
					resultat = prevNum - nextNum;
					console.log(result);
					break;
				default:
					// statements_def
					console.log('DEFAULT');
					break;
			}
			flag = false;
		}
	}
	return resultat;
}

// следующее получившееся число
function nextNum() {
	var nextNum = '';
	flag = true;
	while (flag == true) {
		if(!getSymbol(arr[1])) {
			nextNum += arr[1];
			arr.shift();
		} else {
			nextNum = Number(nextNum);
			flag = false;
			return nextNum;
		}
	}
}

// итоговая функция
function result() {
	prevNum();
	document.getElementById('res').value = resultat;
}