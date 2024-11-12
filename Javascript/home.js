document.getElementById("left-button").addEventListener('click', leftButtonPressed);
document.getElementById("right-button").addEventListener('click', rightButtonPressed);

var imageSourcePaths = ["../assets/image00001-portrait.png","../assets/image00002-portrait.png","../assets/image00003-portrait.png"]
var sourceIndex = 0

function leftButtonPressed() {

    if (sourceIndex === 0) {
        sourceIndex = 2
    } else {
        sourceIndex -= 1
    }

    const imageSource = imageSourcePaths[sourceIndex]

    document.getElementById("section2-img").src = imageSource
}

function rightButtonPressed() {
    if (sourceIndex === 2) {
        sourceIndex = 0
    } else {
        sourceIndex += 1
    }

    const imageSource = imageSourcePaths[sourceIndex]

    document.getElementById("section2-img").src = imageSource
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}