function myFunc() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);

    if (x != Number(x) || y != Number(y)) {
        document.getElementById("result").innerHTML = "Enter ONLY numbers";
    } else {
        let sum = x + y;
        document.getElementById("result").innerHTML = sum;
    }
}