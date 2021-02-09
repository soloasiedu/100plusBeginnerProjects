const screenValue = document.querySelector('input');

const numberBtns = document.querySelectorAll('.btn.btn-grey');
const clearBtn = document.querySelector('.btn-clear.btn-grey');
const clearEntry = document.querySelector('.btn-backspace.btn-grey');
const arithmeticEntrys = document.querySelectorAll('.btn.btn-yellow');
const equal = document.querySelector('.btn-equal.btn-grey');
var arithmetic = '';
var firstNum = '';
var secondNum = '';
console.log(numberBtns);

clearBtn.addEventListener('click', function(){
    screenValue.value = '';
})
clearEntry.addEventListener('click', function(){
    // first method
   /*  let currentValue = screenValue.value;
    let newValue = '';
    for(let i = 0; i < currentValue.length - 1; i++){
        newValue = newValue + currentValue[i];
    }
    screenValue.value = newValue; */
    screenValue.value = screenValue.value.slice(0, screenValue.value.length-1);


})
screenValue.addEventListener('keypress', function(e){
     if(!isNumberKeyOrDot(e)){
        e.preventDefault();
     }
})
numberBtns.forEach(function(numberBtn){
    numberBtn.addEventListener('click', function(e){
        screenValue.value = screenValue.value + e.currentTarget.dataset.num;
    })
})

arithmeticEntrys.forEach(function(arithmeticEntry){
    arithmeticEntry.addEventListener('click', function(e){
        firstNum = parseInt(screenValue.value);
        screenValue.value = '';
        arithmetic = e.currentTarget.dataset.num;
        console.log(arithmetic);
    })
})

equal.addEventListener('click', function(){
    secondNum = parseInt(screenValue.value);
    let result;
    switch(arithmetic){
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
    }
    screenValue.value = result;
})

function isNumberKeyOrDot(evt){
    var charCode = (evt.which)? evt.which : evt.keyCode
    if(charCode > 31 && (charCode < 48 || charCode > 57 || charCode === 46))
        return false
    return true;
}