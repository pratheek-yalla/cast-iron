function show() {
    document.getElementById("next").style.display = "block";
    document.getElementById("gif").style.display = "block";
}
function zoomin() {
    document.getElementById("image").style.transform = "scale(2.5)";
}
function zoomout() {
    document.getElementById("image").style.transform = "scale(1)";
}

let random = Math.floor(Math.random() * 5) + 1;
document.getElementById("image").src = "./images/image" + random + ".jpg";

function checkAnswer() {
    var index = document.getElementById("microstructure").value;
    if(index == random) {
        document.getElementById("answer").innerHTML = "Correct Answer!";
    }
    else {
        document.getElementById("answer").innerHTML = "Wrong Answer!";
    }
    document.getElementById("answer").style.display = "block";
}