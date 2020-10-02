( function(){
    const bulb = document.getElementById('switch');

    const button = document.querySelector('.btnSwitch');

    button.addEventListener('click', function(){

        if(button.textContent == 'Turn on'){
            bulb.src = 'lightbulbon.jpg';
            button.textContent = 'Turn off';
        }else{
            bulb.src = 'lightbulboff.jpg';
            button.textContent = 'Turn on';
        }
    })

})();