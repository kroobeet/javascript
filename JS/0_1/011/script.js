let arr = [1,2,3,4,6,5,7,8,2,1,6,4,3,6,3,6,8,9,0,2,1,1];
let flag = false;

function findFive (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 5) {
            return flag = true;
        }
    }
    return false;
}

findFive(arr);

if (flag == true) {
    console.log('Yes');
} else {
    console.log('No');
}

flag = false
function div (number) {
    for (let i = 2; i <= 30; i++) {
        if (number/i == 1 || number/i == number) {
            return flag = true;
        }
    }
    return flag = false;
}

div(31);

flag = false;

function ident (array) {
    for (let i = 0; i < array.length; i++) {
        if (i < array.length-1) {
            if (array[i] == array [i+1]) {
                console.log('Yes');
                return flag = true;
            }
        }
    }
    console.log('No');
    return flag = false;
}

ident(arr);