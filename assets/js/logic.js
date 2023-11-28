// start screen
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");

// questions 
var questionSection = document.querySelector("#questions");
var questionTitleElement = document.querySelector("#question-title");
var choicesElement = document.querySelector("#choices");
//current question index
var questionNumber = 0;

// timer
var initTime = 10; 
var timerSection = document.querySelector(".timer");
var timer = document.querySelector("#time");
var time = initTime;

// end screen
var endScreen = document.querySelector("#end-screen");
var endScreenTitle = endScreen.querySelector('h2');
var finalScore = document.querySelector("#final-score");
var initialsTitle = document.querySelector("initials");

// audio
var correctAudio = new Audio('./assets/sfx/correct.wav');
var incorrectAudio = new Audio('./assets/sfx/incorrect.wav');

// feedback
var feedbackSection = document.querySelector("#feedback");

// start quiz
function startQuiz() {
    // hide start screen
    startScreen.classList.add("hide");
    // and show the questions
    questionSection.classList.remove("hide");
    // and show the timer which is currently hidden
    timerSection.classList.remove("hide");
    
    // display initial time instead of 0
    //timer.textContent = initTime;

    // display questions 
    displayQuestion();

    // timer starts
    startTimer();

}


// function to display question
function displayQuestion() {
    // get the index of the question number from the array questions in questions.js
    var question = questions[questionNumber];

    // updates question 
    questionTitleElement.textContent = question.question;

    // for each answer, let's create a button
    for (var i = 0; i < question.answers.length; i++) {
        var choicesButton = document.createElement("button");

        // setting attributes
        choicesButton.textContent = question.answers[i];
        choicesButton.setAttribute("data-index", i);
        choicesButton.setAttribute("type", "submit");

        // checking the clicked choice
        choicesButton.addEventListener("click", function (event) {
            var clickedChoice = parseInt(event.target.getAttribute("data-index"));
            checkAnswer(clickedChoice);
        });

        // add these buttons as a child of the choices section
        choicesElement.appendChild(choicesButton);
    }
}


// check answer of the question
function checkAnswer(clickedChoice) {
    // current question
    var question = questions[questionNumber];
    // check if the clicked button is correct
    if (clickedChoice === question.correctAnswerIndex) {
        correctAudio.play();
        displayFeedback("Correct");
    } else {
        incorrectAudio.play();
        displayFeedback("Incorrect");

        // subtract the time by 10 seconds if it's incorrect
        time -= 10;
    }

    // next question
    questionNumber++;
    nextQuestion();
}


// feedback
function displayFeedback(message) {
    // display message
    feedbackSection.classList.remove("hide");
    feedbackSection.textContent = message;
    
    // hide feedback
    setTimeout(function () {
        feedbackSection.classList.add("hide");
    }, 300);
}


// next questions
function nextQuestion() {
    // clear all text before moving onto the next question
    choicesElement.textContent = "";
    // check if there are more questions
    if (questionNumber < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}


// timer
function startTimer() {
    timer.textContent = time;
    var countdown = setInterval(function () {
        // if it reaches 0, clear the interval
        if (time < 0) {
            // different text for when the time has ran out 
            endScreenTitle.textContent = "Time is up.";
            // stops the timer
            clearInterval(countdown); 
            endQuiz();
        } 
        // decrease the time and display current time
        timer.textContent = time;
        time--;
        
    }, 1000); 
}


// end quiz
function endQuiz() {
    // time hide
    timerSection.classList.add("hide");
    // questions hide
    questionSection.classList.add("hide");
    // end screen show
    endScreen.classList.remove("hide");

    // final score
};

// click event on start button
startButton.addEventListener("click", startQuiz);
