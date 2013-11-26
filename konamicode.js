document.onkeydown = checkKey;
var konamiCode = new Array (38, 38, 40, 40, 37, 39, 37, 39, 66, 65);
var currentCode = new Array();
 
//Konami Code Check
function checkKey(e) {
    e = e || window.event;

    currentCode.push(e.keyCode);
    i = currentCode.length - 1;

    if (currentCode[i] == konamiCode[i]) {
        if (konamiCode.length == currentCode.length) {
            konamiAction();
            currentCode = new Array();
        }
    } else {
        currentCode = new Array();
    }
}

function konamiAction() {
    //DO KONAMI AWESOMENESS
}