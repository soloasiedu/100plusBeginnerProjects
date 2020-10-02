var questions = [
    {
        question: 'What is the surname of Beatrice?',
        choiceList: ['Asiedu','Ampomah','Louisa','Deckman'],
        correctAnswer: 0
    },
    {
        question: 'How old is Beatrice?',
        choiceList: [15,17,19,16],
        correctAnswer: 3
    },
    {
        question: 'Which school does Beatrice attend?',
        choiceList: ['Tadisco','Porter Girls','Wesley Girls','Ahantaman'],
        correctAnswer: 1
    },
    {
        question: 'Who is the senior brother of Beatrice?',
        choiceList: ['Kofi','Emmanuel','Solomon','David'],
        correctAnswer: 2
    },
    {
        question: 'Which Junior High School did Beatrice attend?',
        choiceList: ['Presby','Methodist','Anglican','Catholic'],
        correctAnswer: 0
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.querySelector('.quizMessage');
     quizMessage.style.display = 'none';

    document.querySelector('.nextButton').addEventListener('click', function(e){
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');
            if(radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            }else{
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
    
                if(parseInt(radioBtnsChecked.value)  === questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
    
                if(currentQuestion < questions.length){
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Play Again?';
                    quizOver = true;
                }
            }
        }else{
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
        
    });

});

function displayCurrentQuestion(){
    console.log('In display Current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.querySelector('.quizContainer > .question');
    var choiceList = document.querySelector('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choiceList.length;

    questionClass.innerText = question;

    choiceList.innerHTML = '';

    var choice;
    for(i = 0; i < numChoices; i++){
        choice = questions[currentQuestion].choiceList[i];
        var li = document.createElement('li');
        li.innerHTML = '<li><input type = "radio" value = "' + i + '" name = "dynradio">' + choice + '</li>'
        choiceList.appendChild(li);
    }
}

function displayScore(){
    document.querySelector('.quizContainer > .result').innerText = 'You scored: ' + correctAnswers + 'out of ' + questions.length;
    document.querySelector('.quizContainer > .result').style.display = 'block';
}
function hideScore(){
    document.querySelector('.result').style.display = 'none';
}
function resetQuiz(){
    currentQuestion = 0;
    currentAnswers = 0;
    hideScore();
}