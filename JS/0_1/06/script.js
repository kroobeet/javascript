/* Найдём случайное целое число */
let randomNumbersArr = [];
function getRandomInt(min,max,array) {
    const randomResult = Math.floor(Math.random() * (max - min+1)+min);

    console.log('Случайное число в промежутке от ' + min + ' до ' + max + ' равно ' + randomResult);

    let createArray = confirm('Создадим массив из случайных чисел?');
    if (createArray == true) {
        let result;
        let factorial;
        let countElementsInArray = prompt('Какое будет количество элементов в массиве?');

        for (let i = 0; i < countElementsInArray; i++) {
            const randomResult = Math.floor(Math.random() * (max - min+1)+min);
            array.push(Math.floor(Math.random() * (max - min+1)+min));
        }

        console.log('Мы создали массив из ' + countElementsInArray + ' чисел взятых из промежутка, который вы указали ' + array);
        console.log('При этом самое маленькое число в массиве ' + Math.min.apply(null, array));
        console.log('А самое большое ' + Math.max.apply(null, array));

        result = 0;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }

        console.log('Сумма элементов этого массива равна ' + result);
        console.log('Среднее арифметическое элементов массива равно ' + result/(array.length));
        console.log('Найдём факториал случайного элемента массива. Хм..');
        let randNumFirst = Math.floor(Math.random() * (array.length - 1+1)+1);

        factorial = Math.abs(array[randNumFirst]);
        result = 1;
        for (; factorial > 0; factorial--) {
            result *= factorial;
        }
        console.log('Возьмём пожалуй ' + array[randNumFirst]);
        console.log(Math.abs(array[randNumFirst]) + '!' + ' = ' + result);

        console.log('Идём далее... ');
        console.log('У нас уже есть число ' + randNumFirst);
        console.log('Найдём ещё одно');
        let randNumSecond = Math.floor(Math.random() * (array.length - 1+1)+1);
        console.log('Нашёл... это ' + randNumSecond);
        let firstNum = randNumFirst;
        let secondNum = randNumSecond;
        let run = true;
        while (run) {
            if (firstNum > secondNum) {
                console.log('Найдём остаток от деления ' + firstNum + ' на ' + secondNum);
                result = firstNum % secondNum;
                console.log('И вот что получилось ' + result);
                run = false;
            } else if (secondNum > firstNum) {
                console.log('Найдём остаток от деления ' + secondNum+ ' на ' + firstNum);
                result = secondNum % firstNum;
                console.log('И вот что получилось ' + result);
                run = false;
            } else {
                console.log('Похоже, что числа равны');
                console.log('Повторим попытку с поиском второго числа');
                secondNum = Math.floor(Math.random() * (array.length - 1+1)+1);
            }
        }

    } else {
        console.log('Окей. Продолжаем');
    }
}

let rand = confirm('Давайте найдём случайное число?');
if (rand == true) {
    const min = prompt('Введите начальное число');
    const max = prompt('Введите конечное число');
    getRandomInt(min,max,randomNumbersArr);

} else {
    console.log('Окей. Продолжаем');
}