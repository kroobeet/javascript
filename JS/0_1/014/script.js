let arr = [];
let element = 'x';
let str = '';
let flag = false;

for (let i = 1; i <= 5; i++) {
    arr.push(element.repeat(i));
}
console.log(arr);

arr = [];
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        str += String(i);
    }
    arr.push(str);
    str = '';
}
console.log(arr);

arr = [];
function arrayFill(array,elementValue,countElements) {
    if (countElements > 0) {
        for (let i = 1; i <= countElements; i++) {
            array.push(elementValue);
        }
        console.log(array);
        return flag = true;
    } else {
        console.log(array);
        return flag = false;
    }
}

arrayFill(arr,'*',100);

let arrayNumbers = [1,3,4,5,3,9,0,2,1];
let result = 0;
let count = 1;
for (let i = 0; i < arrayNumbers.length; i++) {
    result += Number(arrayNumbers[i]);
    if (result > 10) {
        console.log(count + ' elements must be added to make the total more than 10');
        break;
    } else {
        count++;
    }
}

// without reverse

function reverseWithoutReverseFunc (array) {
    console.log(array);
    let j = 0;
    for (let i = array.length; i >= 0; i--) {
        array.push(array[i]);
        j++;
    }
    array.splice(0,j);
    console.log(array);
}

reverseWithoutReverseFunc(arrayNumbers);


arr = [[1],[2,3,1],[],[]];
function sumElementsInArray (array) {
    let result = 0;
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].length > 0) {
                for (let j = 0; j < array[i].length; j++) {
                    result += array[i][j];
                }
            } else {
                continue;
            }
        }
        console.log('The total sum of the array elements is ' + result);
    } else {
        console.log('Empty array specified');
    }
}

sumElementsInArray(arr);

arr = [[[1,2],[3,4]],[[5,6],[7,8]],[[2],[100]]];
/* the sum of the elements of a multidimensional array */


function multidimensionalArraySumElements (array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let z = 0; z < array[i][j].length; z++) {
                result += array[i][j][z];
            }
        }
    }
    console.log(result);
}

multidimensionalArraySumElements(arr);