var buttons = document.querySelectorAll('.button-options .choices');
var questionDiv = document.querySelector(".question");
var timeLeft = 40;
var timer;
var currentQuestion = 0;
var questions = [
    {
        text: "Commonly used datatypes do not include ___",
        options: ["strings", "alerts", "booleans", "numbers"],
        answer: 1
    },
    {
        text: "The condition in an if / else statement is enclosed within ___",
        options: ["quotes", "square brackets", "parenthesis", "quotes"],
        answer: 2
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["for loops", "console.log", "terminal/bash", "JavaScript"],
        answer: 1
    },
    {
        text: "String values must be enclosed within ___ when being assigned to variables",
        options: ["curly brackets", "quotes", "commas", "parenthesis"],
        answer: 1
    },
    {
        text: "Arrays in JavaScript can be used to store ___",
        options: ["booleans", "other arrays", "numbers and strings", "all of the above"],
        answer: 3
    }
]

function startQuiz() {
    startTimer();
    nextQuestion();
}

function startTimer() {

}

function nextQuestion() {
    console.log(questions[currentQuestion].answer)
    if (currentQuestion == questions.length) {
        endQuiz();
    }
    for (let i = 0; i < 4; i++) {
        buttons[i].textContent = questions[currentQuestion].options[i];
    }
    questionDiv.textContent = questions[currentQuestion].text;
}

function checkAnswer(id) {
    if (questions[currentQuestion].answer == id){
        currentQuestion++;
        nextQuestion();
    }
}

function endQuiz() {

}
