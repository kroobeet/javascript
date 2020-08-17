function myFunc() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    let sum = x + y;
    document.getElementById("result").innerHTML = sum;
}