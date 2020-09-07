function changeText() {
	var elem = document.getElementById('changeText1');
	elem.innerHTML = 'Текст изменился';
}

function changeTextAndGoToHeader() {
	var elem = document.getElementById('changeText2');
	elem.outerHTML = "<h3>Абзац превратился в h3!</h3>"
}

function saveTextAndGoToHeader() {
	var elem = document.getElementById('changeText3');
	var val = elem.innerHTML;
	elem.outerHTML = "<h3>"+val+"</h3>";
}

function sumNumber() {
	var sum = 0;
	var firstNum = document.getElementById('firstNum');
	var secondNum = document.getElementById('secondNum');
	var result = document.getElementById('result');

	sum = Number(firstNum.value) + Number(secondNum.value);
	result.innerHTML = sum; 
}

function multiChangeText() {
	var elems = document.getElementsByTagName('p');

	for (let i = 0; i < elems.length; i++) {
		elems[i].innerHTML = "Ку-ку!";
	}
}

function changeTextOnSerialNumber() {
	var elems = document.getElementsByClassName('www');

	for (let i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	}
}

function changeTextOnSerialNumberWithHelpQuerySelectorAll() {
	var elems = document.querySelectorAll('.sss');

	for (let i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	}
}

function getAttr() {
	var elem = document.querySelector('#manupulationClass');
	alert(elem.getAttribute('class'));
}

function delAttr() {
	var elem = document.querySelector('#manupulationClass');
	alert(elem.removeAttribute('class'));
}

function changeAttr() {
	var elem = document.querySelector('#manupulationClass');
	alert(elem.setAttribute('class', 'new-class'));
}

function liveChangeInput(elem) {
	var changeSpan = document.getElementById("changeSpan");
	changeSpan.innerHTML = elem.value;
}

function addHrefValue() {
	var elems = document.getElementsByTagName('a');
	for (let i = 0; i < elems.length; i++) {
		var href = elems[i].getAttribute('href');
		elems[i].innerHTML += " ("+ href +")";
	}
}

function func(elem) {
	var paragraph = document.getElementById('func');
	paragraph.innerHTML = "Привет, Мир!";
	paragraph.setAttribute('class', 'new-class');
	elem.value = "О, на меня нельзя больше нажать!";
	elem.setAttribute('disabled', 'true');
}

function serialNumber() {
	var elems = document.getElementsByClassName('serial-number');

	for (let i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i;
	}
}

function addSerialNumber() {
	var elems = document.getElementsByClassName('add-serial-number');
	for (let i = 0; i < elems.length; i++) {
		var oldValue = elems[i].innerHTML;
		elems[i].innerHTML = i+'.'+ ' ' + oldValue;
	}
}