function buttonClick() {
	var input = document.getElementById('input1');
	input.value = '!!!';
}

function showInputValue() {
	var input = document.getElementById('input2');
	var value = input.value;
	alert(value);
}

function squareNum() {
	var input = document.getElementById('input3');
	var value = Number(input.value);
	alert(value*value);
}

