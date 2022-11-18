const button = document.querySelector('.btn');
const hexaColor = ["F",1,"B",3,"E",5,6,7,8,"A",9,2,"C",4,"D",0];
const colorCodeInHexa = document.querySelector('.color');
function hexGenerator() {
    return Math.floor(Math.random() * hexaColor.length);
}

function hexaColorGenerator() {
    let hexaColorCode = "#";
    for (let i = 0; i < 6; i ++) {
        hexaColorCode = hexaColorCode + hexaColor[hexGenerator()]
    }
    document.body.style.backgroundColor = hexaColorCode;
    document.querySelector('.color').innerText = "Background Color : " + hexaColorCode;
}

button.addEventListener('click',hexaColorGenerator);

document.body.addEventListener('keypress', function(e) {
    if (e.keyCode == 32) {
        hexaColorGenerator()
    }
});