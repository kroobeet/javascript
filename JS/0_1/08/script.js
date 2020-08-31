let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = arr1.concat(arr2);
console.log(result);

arr1 = [1,2,3];
result = arr1.reverse();
console.log(result);

arr1 = [1,2,3];
arr1.push(4,5,6);
console.log(arr1);

arr1 = [1,2,3];
arr1.unshift(4,5,6);
console.log(arr1);

arr1 = ['js', 'css', 'jq'];
console.log(arr1.shift());

arr1 = ['js', 'css', 'jq'];
console.log(arr1.pop());

arr1 = [1,2,3,4,5];
arr2 = arr1.slice(0,3);
console.log(arr2);

arr1 = [1,2,3,4,5];
arr2 = arr1.slice(3);
console.log(arr2);

arr1 = [1,2,3,4,5];
arr1.splice(1,2);
console.log(arr1);

arr1 = [1,2,3,4,5];
arr2 = arr1.splice(1,3);
console.log(arr2);

arr1 = [1,2,3,4,5];
arr1.splice(3,0,'a','b','c');
console.log(arr1);

arr1 = [1,2,3,4,5];
arr1.splice(1,0,'a','b');
arr1.splice(6,0,'c');
arr1.splice(8,0,'e');
console.log(arr1);

arr1 = [3,4,1,2,7];
arr1.sort();
console.log(arr1);

arr1 = {
    js: 'test',
    jq: 'hello',
    css: 'world'
}

arr2 = Object.keys(arr1);
console.log(arr2);