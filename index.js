var image = document.getElementById("image");
image.setAttribute("width", "150px");
var button = document.getElementById("button");
// while(1) {
//     setTimeout(() => {
//         image.setAttribute("width", "200px");
//     }, 500);
//     image.setAttribute("width", "150px")
// }
var check = true;
button.onclick = ()=> {
    button.style.display = "none";
    image.style.display = "unset";
    check = !check;
    document.getElementById("music").play();
    if (check) {
    image.setAttribute("width", "200px");
    } else {
    image.setAttribute("width", "150px");

    }
}

// function music() {
//     var x = document.createElement("audio");
//     if (x.canPlayType("audio/mpeg")) {
//         x.setAttribute("src", "anhyeuem.mp3");

//     }

//     document.body.appendChild(x);
// }