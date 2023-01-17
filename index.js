const prompt = require("prompt-sync")({ sigint: true });
var readlineSync = require("readline-sync");

//const favMovie = prompt();
let score = 0;
const questions = [
    {
        question: "Which is my favorite movie in hollywood?",
        answer: "Into the wild"
    },
    {
        question: "What do I like it to do in my free time",
        answer: "Use Insta"
    },
    {
        question: "Tell me my birthdate?",
        answer: "27"
    }
]


function Welcome() {
    const userName = prompt("What is your name?  ");
    console.log("Welcome", userName, " to the simple quize about me")
}

// play function
function Play(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer === answer) { // branching
        console.log("right!");
        score = score + 1;

    } else {
        console.log("wrong!");

    }

    console.log("current score: ", score);
    console.log("-------------")
}


function game() {
    for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];
        Play(currentQuestion.question, currentQuestion.answer)

    }
}
function gameScore() {
    console.log("Your final score is ", score)
}

Welcome();
game();
gameScore();