const input = document.getElementById('inp');
var str = input.value;
var resultNum = 0;
var arr = [];

function elemCalc(elem) {
	input.value += elem.value;
	arr.push(elem.value);
	if (!Number(arr[0])) {
		alert('First only NUMBER');
		clearValue();
	}
}

function del() {
	arr.pop();
}

function clearValue() {
	arr = [];
	input.value = '';
}

function check() {
	alert(arr);
}

function prevNum() {
	for (let i = 0; i < str.length; i++) {
		
	}
}

function nextNum() {

}

function checkSymbol() {
	for (let i = 0; i < str.length; i++) {
		if (Number(str[i]) == false) {
			var symbol = str[i];
			return symbol;
		} else {
			i++;
		}
	}
	return false;
}

function result() {
	
}