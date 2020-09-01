let str = '';
let element = '-';

for (let i = 1; i < 10; i++) {
    str += String(i);
}
console.log(str);
str = '';

for (let i = 9; i > 0; i--) {
    str += String(i);
}
console.log(str);
str = '';

for (let i = 1; i < 10; i++) {
    str += element + String(i)
    if (i == 9) {
        str += element;
    }
}
console.log(str);
str = '';
element = 'x';

for (let i = 1; i <= 20; i++) {
    console.log(element.repeat(i));
}

for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
        str += String(i);
    }
    console.log(str);
    str = '';
}

str = '';

for (let i = 2; i <= 10; i+=2) {
    console.log(element.repeat(i));
}