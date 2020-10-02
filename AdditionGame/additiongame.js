var number1 = parseInt( Math.random() * 10);

var number2 = parseInt( Math.random() * 10);

document.getElementById('firstNumber').innerHTML = number1;
document.getElementById('secondNumber').innerHTML = number2;
const answerProvided = document.getElementById('answer'); 
function checkAnswer(){
    
    if((number1 + number2) == answerProvided.value){
        alert("Correct answer");
        location.reload();
        

    }else{
        alert("Incorrect answer! The correct answer should be "+(number1+number2));
        location.reload()
        
    }
    // refreshFields();
    
    
    
    
}
// function refreshFields(){
//     answerProvided.value = '';
//     number1 = parseInt( Math.random() * 10);
//     number2 = parseInt( Math.random() * 10);
//     document.getElementById('firstNumber').innerHTML = number1;
//     document.getElementById('firstNumber').innerHTML = number2;
// }