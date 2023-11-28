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
var initTime = 5; 
var timerSection = document.querySelector(".timer");
var timer = document.querySelector("#time");
var time = initTime;


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

// timer
function startTimer() {
    timer.textContent = time;
    var countdown = setInterval(function () {
        // if it reaches 0, clear the interval
        if (time < 0) {
            // stops the timer
            clearInterval(countdown); 
            endQuiz();
        } 
        // decrease the time and display current time
        timer.textContent = time;
        time--;
        
    }, 1000); 
}

// click event on start button
startButton.addEventListener("click", startQuiz);
