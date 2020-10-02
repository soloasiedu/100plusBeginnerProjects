 const button = document.querySelector('button');
 const body = document.querySelector('body');
 const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

 body.style.backgroundColor = 'blue';

 button.addEventListener('click', changeBackgroundColor);

 function changeBackgroundColor(){

    const colorIndex = parseInt( Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
 }