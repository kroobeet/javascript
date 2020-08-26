function myFunc() {
    var date = new Date().getDay();

    switch (date) {
        case 1:
            var day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
    }

    var value = document.getElementById("day").innerHTML = day;
}