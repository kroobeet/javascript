# javascript

## Версия / Version: v0.1

### Предварительный просмотр / Preview<br>

#### Старые файлы / Old Files
(Нажмите на ссылку, чтобы посмотреть результат):<br>
(Click on the link to see the result): <br>
- [JavaScript 01]
- [JavaScript 02] (Don't work a preview on github. Only on localhost. I'm sorry :c )
- [JavaScript 03]
- [JavaScript 04]
- [JavaScript 05]

#### Список изменений СТАРЫЙ / List of changes OLD
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



[JavaScript 01]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/old_files/01/index.html
[JavaScript 02]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/old_files/02/index.html
[JavaScript 03]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/old_files/03/index.html
[JavaScript 04]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/old_files/04/index.html
[JavaScript 05]: http://htmlpreview.github.io/?https://github.com/kroobeet/javascript/blob/master/JS/old_files/05/index.html


#### Новые файлы / New Files
здесь вы можете посмотреть решенные практические задачи

- [Учебник по JavaScript]
- [Практика 1]
- [Работа с DOM]
- [Практика 2]
- [Некоторые продвинутые вещи]
- [ES6 1]
- [Рекомендованное ES6]
- [Регулярки]
- [Разное]
- [Работа с канвасом]
- [Практика 3]
- [Контекст]
- [Drag-and-Drop]
- [ООП]
- [Практика по ООП]
- [Практика 4]
- [ES6 2]
- [Promise ES6]
- [Библиотека jQuery]


#### Список изменений НОВЫЙ / List of changes NEW






[Учебник по JavaScript]: https://github.com/kroobeet/javascript/releases/tag/v0.1
[Практика 1]: https://github.com/kroobeet/javascript/releases/tag/v0.2
[Работа с DOM]: https://github.com/kroobeet/javascript/releases/tag/v0.3
[Практика 2]: https://github.com/kroobeet/javascript/releases/tag/v0.4
[Некоторые продвинутые вещи]: https://github.com/kroobeet/javascript/releases/tag/v0.5
[ES6 1]: https://github.com/kroobeet/javascript/releases/tag/v0.6
[Рекомендованное ES6]: https://github.com/kroobeet/javascript/releases/tag/v0.7
[Регулярки]: https://github.com/kroobeet/javascript/releases/tag/v0.8
[Разное]: https://github.com/kroobeet/javascript/releases/tag/v0.9
[Работа с канвасом]: https://github.com/kroobeet/javascript/releases/tag/v0.9.1
[Практика 3]: https://github.com/kroobeet/javascript/releases/tag/v0.9.2
[Контекст]: https://github.com/kroobeet/javascript/releases/tag/v0.9.3
[Drag-and-Drop]: https://github.com/kroobeet/javascript/releases/tag/v0.9.4
[ООП]: https://github.com/kroobeet/javascript/releases/tag/v0.9.5
[Практика по ООП]: https://github.com/kroobeet/javascript/releases/tag/v0.9.6
[Практика 4]: https://github.com/kroobeet/javascript/releases/tag/v0.9.7
[ES6 2]: https://github.com/kroobeet/javascript/releases/tag/v0.9.8
[Promise ES6]: https://github.com/kroobeet/javascript/releases/tag/v0.9.9-alpha
[Библиотека jQuery]: https://github.com/kroobeet/javascript/releases/tag/v0.9.9-beta