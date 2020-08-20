# javascript

## Версия / Version: 0.0.4

### Предварительный просмотр / Preview<br>

(Нажмите на ссылку, чтобы посмотреть результат):<br>
(Click on the link to see the result): <br>
- [JavaScript 01]
- [JavaScript 02] (Don't work a preview on github. Only on localhost. I'm sorry :c )
- [JavaScript 03]
- [JavaScript 04]
- [JavaScript 05]

#### Список изменений / List of changes
- [JavaScript 04] <br>
```javascript
//Before
 function myFunc() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    let sum = x + y;
    document.getElementById("result").innerHTML = sum;
}
// After

function myFunc() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);

    if (x != Number(x) || y != Number(y)) {
        document.getElementById("result").innerHTML = "Enter ONLY numbers";
    } else {
        let sum = x + y;
        document.getElementById("result").innerHTML = sum;
    }
}
```



[JavaScript 01]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/01/index.html
[JavaScript 02]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/02/index.html
[JavaScript 03]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/03/index.html
[JavaScript 04]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/04/index.html
[JavaScript 05]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/05/index.html
