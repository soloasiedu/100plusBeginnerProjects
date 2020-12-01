const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var y = document.getElementById('hexCode');
body.style.backgroundColor = '#9AE6ED';

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    var textColor = "#";

    for(let i = 0; i < 6; i++){
        textColor = textColor + colors[parseInt( Math.random() * colors.length)];
    }
   
    y.innerHTML = textColor;
    body.style.backgroundColor = textColor;
}

// setInterval(changeBackgroundColor, 50);