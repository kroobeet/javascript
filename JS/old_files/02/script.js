document.getElementById("btn_1").onclick = function () {
    alert("I am a dialog box! ;-)");
}

document.getElementById("btn_2").onclick = function () {
    document.getElementById("demo").innerHTML = "Hello Everyone!";
}

document.getElementById("btn_3").onclick = function () {
    document.getElementById("image").src = "images/star.jpg";
}

document.getElementById("btn_4").onclick = function () {
    let style = document.getElementById("demo").style;
    style.color = "green";
    style.fontWeight = "bold";
    style.fontSize = "300%";
}

document.getElementById("btn_5").onclick = function () {
    document.getElementById("demo").style.display = "block";
}

document.getElementById("btn_6").onclick = function () {
    document.getElementById("demo").style.display = "none";
}