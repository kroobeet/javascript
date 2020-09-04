const input = document.getElementById('inp');
var resultNum = 0;
var arr = [];

function elemCalc(elem) {
	input.value += elem.value;
	arr.push(elem.value);
	console.log(checkSymbol());
	if (!Number(arr[0])) {
		alert('First only NUMBER');
		clearValue();
	}
}

function del() {
   	input.value=input.value.replace(/.$/, "");
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
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == '\+' || arr[i] == '\-' || arr[i] == '\*' || arr[i] == '\/') {
			var symbol = arr[i];
			return true;
		} else {
			i++;
		}
	}
	return false;
}

function result() {
	
}