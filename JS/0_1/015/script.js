function isNumberInRange (number) {
    if (number > 0 && number < 10) {
        return true;
    } else return false;
}
console.log(isNumberInRange(10));

let arr = [1,29,100,4,3,0,10];

function addedNumToArray (array) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isNumberInRange(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(addedNumToArray(arr));

function getDigitsSum (number) {
    let str = String(number);
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += Number(str[i]);
    }
    return result;
}
console.log(getDigitsSum(4023));

function getYearDigitSum (startYear, endYear, isSum) {
    for (let i = startYear; i <= endYear; i++) {
        if (getDigitsSum(i) == isSum) {
            console.log(i);
        }
    }
}

getYearDigitSum(1,2021,13);

function createArray (countNumbers, array) {
    if (countNumbers > 0 && countNumbers <= 2020) {
        for (let i = 1; i <= countNumbers; i++) {
            array.push(i);
        }
    }
}

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else return false;
}

console.log(isEven(40));

function isEvenArray(array) {
    createArray(100,array);
    let newArray = [];
    for (let i = 1; i < array.length; i++) {
        if (isEven(i)) {
            newArray.push(i);
        } else {
            continue;
        }
    }
    return newArray;
}

arr = [];
console.log(isEvenArray(arr));

function getDivisors (number) {
    let array = [];
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            array.push(i);
        } else continue;
    }
    return array;
}

console.log(getDivisors(100));

