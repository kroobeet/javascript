let str = "the first letter of each word is uppercase";

/*
* Let's create an array and name it arr
* Add the string str to it and split the elements by space ' '
*/
let arr = str.split(' ');

/*
* create two variables
* editableStr - a string that accepts a word from the arr array
* newStr - variable representing the final result
* for now, assign the variables an empty string value
*/
let editableStr, newStr = '';



// start a loop that will iterate over the elements of the array (words)

for (let i = 0; i < arr.length; i++) {
    editableStr = arr[i]; // variable, assign an array element as a value
    editableStr = editableStr.replace(editableStr[0],editableStr[0].toUpperCase()); // capitalize the first letter of the resulting word
    if (i == arr.length-1) { // if the array element is already the last one, add a word without a space at the end
        newStr += editableStr;
    } else { // otherwise, add a space after the word
        newStr += editableStr + ' ';
    }
}
console.log(newStr); // show the result in the console




str = "var_test_text";
/*
* Let's create an array and name it arr
* Add the string str to it and split the elements by space '_'
*/
arr = str.split('_');
editableStr, newStr = '';

// start a loop that will iterate over the elements of the array (words)
for (let i = 0; i < arr.length; i++) {
    if (i == 0) { // if the element is the first in the array, do not change it, but simply add it to a new line
        newStr += arr[i];
    } else {
        editableStr = arr[i]; // variable, assign an array element as a value
        editableStr = editableStr.replace(editableStr[0],editableStr[0].toUpperCase()); // capitalize the first letter of the resulting word
        newStr += editableStr; // add edited item to new line
    }
}
console.log(newStr); // show the result in the console