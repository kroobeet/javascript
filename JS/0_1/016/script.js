let str = 'it is string';

function ucFirst (string) {
    string = string.replace(string[0],string[0].toUpperCase());
    return string;
}

console.log(ucFirst(str));

function ucFirstLetterInWord (string) {
    let newStr = string.split('_');
    string = String(newStr[0]);
    for (let i = 1; i < newStr.length; i++) {
        string += String(newStr[i]).replace(newStr[i][0],newStr[i][0].toUpperCase());
    }
    return string;
}

str = 'var_text_hello';
console.log(ucFirstLetterInWord(str));

let arr = ['fdsafdas','var_text_hello','foosodfs'];
function inArray (string, array) {
    for (let i = 0; i < array.length; i++) {
        if (string == array[i]) {
            return true;
        }
    }
    return false;
}

console.log(inArray(str,arr));

str = '123456';

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else return false;
}

function sortElements (string) {
    let arr = string.split('');
    let isEvenNum = [], isNotEvenNum = [];
    string = '';
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            isEvenNum.push(arr[i]);
        } else {
            isNotEvenNum.push(arr[i]);
        }
    }
    for (let i = 0; i < isEvenNum.length; i++) {
        string += isEvenNum[i] + isNotEvenNum[i];
    }
    return string;
}

console.log(sortElements(str));