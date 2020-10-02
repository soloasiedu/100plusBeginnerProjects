const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E'];
var y = document.getElementById('hexCode');
body.style.backgroundColor = 'blue';

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    var textColor = "#";

    for(let i = 0; i < 6; i++){
        textColor = textColor + colors[parseInt( Math.random() * colors.length)];
    }
   
    y.innerHTML = textColor;
    body.style.backgroundColor = textColor;
}