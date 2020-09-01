let flag = false;
function equality (firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        return flag = true;
    } else {
        return flag = false;
    }
}
equality('1',1);
console.log(flag);

function sum (firstNumber, secondNumber) {
    let result = Number(firstNumber) + Number(secondNumber);
    if (result > 10) {
        return flag = true;
    } else {
        return flag = false;
    }
}

sum ('5',5);
console.log(flag);

function isNegative (number) {
    if (Number(number) < 0) {
        return flag = true;
    } else {
        return flag = false;
    }
}

isNegative(-2);
console.log(flag);