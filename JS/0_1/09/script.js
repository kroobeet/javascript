let str = 'first symbol is uppercase';
str = str.replace(str[0],str[0].toUpperCase());
console.log(str);


str = '123456';
let arr1 = str.split('');
arr1.reverse();
str = arr1.join('');
console.log(str);


str = 'http://vk.com/';
if (str.substr(0,7) == 'http://') {
    console.log('Yes');
} else {
    console.log('No');
}


str = 'http://localhost:80/index.html';

if (str.substr(-5) == '.html') {
    console.log('Yes');
} else {
    console.log('No')
}