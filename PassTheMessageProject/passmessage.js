//const button = document.querySelector('#submit');
//const text = document.querySelector('#messageText');

// button.addEventListener('click', function(){
    
// });

function displayMessage(){
    var messageToDisplay = document.getElementById('messageText').value;
   // console.log(messageToDisplay);
   // alert(messageToDisplay);
     document.getElementById('messageDiplayed').innerHTML = messageToDisplay;
     document.getElementById('messageText').value = '';
     
}