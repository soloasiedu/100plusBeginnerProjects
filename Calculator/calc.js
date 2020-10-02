( function(){
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const equal = document.querySelector('.btn-equal');
    const clear = document.querySelector('.btn-clear');
    const backspace = document.querySelector('.btn-backspace');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            alert('Please enter a value');
        }else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click',function(e){
        screen.value = '';
    });

    backspace.addEventListener('click', function(e){
        var screenValue = screen.value;
        var newScreenValue = '';
        for(let i = 0; i < screenValue.length - 1; i++ ){
            newScreenValue += screenValue.charAt(i);
        }
        console.log(newScreenValue);
        screen.value = newScreenValue;
    })
})();