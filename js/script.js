function show() {
    document.getElementById("next").style.display = "block";
    document.getElementById("gif").style.display = "block";
}
function zoomin() {
    document.getElementById("image").style.transform = "scale(2)";
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
        document.getElementById("check").style.display = "none";
        document.getElementById("print").style.display = "block";
    }
    else {
        document.getElementById("answer").innerHTML = "Wrong Answer!";
    }
    document.getElementById("answer").style.display = "block";
}

const source = "./images/image" + random + ".jpg";
function ImagetoPrint(source) {
    return "<html><head><script>function step1(){\n" +
            "setTimeout('step2()', 10);}\n" +
            "function step2(){window.print();window.close()}\n" +
            "</scri" + "pt></head><body onload='step1()'>\n" +
            "<img src='" + source + "' /></body></html>";
}
function printImage() {
    Pagelink = "about:blank";
    var pwa = window.open(Pagelink, "_new");
    pwa.document.open();
    pwa.document.write(ImagetoPrint(source));
    pwa.document.close();
}