// start screen
var startScreen = document.querySelector("#start-screen");

// questions 
var questions = document.querySelector("#questions");

// timer
var initTime = 60; 
var timer = document.querySelector(".timer");


// start quiz
function startQuiz() {
    // hide start screen
    startScreen.classList.add("hide");
    // and show the questions
    questions.classList.remove("hide");
    // and show the timer which is currently hidden
    timer.classList.remove("hide");
    

}

// click event on start button
document.querySelector("#start").addEventListener("click", startQuiz);
