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


const num = 241;
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

sumDigit(num);