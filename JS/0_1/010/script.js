function square (num) {
    console.log(num * num);
}

square(22);


function sum (firstNum, secondNum) {
    console.log(firstNum + secondNum);
}

sum(10,20);


function div (firstNum,secondNum, thirdNum) {
    console.log((firstNum - secondNum) / thirdNum);
}

div (3,20,100);

function dayOfWeek (dayNum) {
    let day;
    switch (Number(dayNum)) {
        case 1:
            day = "Monday";
        case 2:
            day = "Tuesday";
        case 3:
            day = "Wednesday";
        case 4:
            day = "Thursday";
        case 5:
            day = "Friday";
        case 6:
            day = "Saturday";
        case 7 :
            day = "Sunday";
        default:
            day = "Enter num from 1 to 7";
    }
    console.log(day);
}

dayOfWeek(4);