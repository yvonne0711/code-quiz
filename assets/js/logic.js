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
var initTime = 60; 
var timer = document.querySelector(".timer");


// start quiz
function startQuiz() {
    // hide start screen
    startScreen.classList.add("hide");
    // and show the questions
    questionSection.classList.remove("hide");
    // and show the timer which is currently hidden
    timer.classList.remove("hide");
    
    // display questions 
    displayQuestion();

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

        choicesElement.appendChild(choicesButton);
    }
}
// click event on start button
startButton.addEventListener("click", startQuiz);
