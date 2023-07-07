var currentQuestionIndex = 0;
var time = 50;
var timerInterval;

// DOM elements
var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var timeEl = document.querySelector("#time");

// Event listener for start button click
startButton.addEventListener("click", startQuiz);

// quiz questions and answers could add as many as you would like, just keeping it simple for now with 5
var questions = [
  {
    question: "Which One OF These Are A Data Type In Javascript ?",
    choices: ["Noodle", "X-RAY", "String", "Pathogen"],
    answer: 2
  },
  {
    question: "What Is DOM ?",
    choices: ["Donuts Oval Module", "Disrupt Over Molecules", "Document Object Model", "None Of These"],
    answer: 2
  },

  {
    question: "Which function in JavaScript can you use to generate random numbers ?",
    choices: ["Math.random", "Math.number", "Math.dice", "Math.roulette"],
    answer: 0
  },

  {
    question: "Which of the following is a valid JavaScript comment ?",
    choices: ["<!-- This is a comment -->", "# This is a comment", "// This is a comment", "/* This is a comment */"],
    answer: 2
  },

  {
    question: "What does the NaN stand for in JavaScript ?",
    choices: ["Null and None", "Not a Number", "Newline and Nextline", "No Available Number"],
    answer: 1
  },



];


