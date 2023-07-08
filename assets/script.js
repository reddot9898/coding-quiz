var currentQuestionIndex = 0;
var time = 50;
var timerInterval;
var score = 0;
var missed = 0;


var startButton = document.querySelector("#start");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var timeEl = document.querySelector("#time");


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
  // giving me the ability to add css to all my questions

];

// had to move this outside of my var questions because it was causing my code to count it as a question overall affecting the final score
question.setAttribute("class", "questions")


// event listener to start the quiz
startButton.addEventListener("click", startQuiz);

// how the quiz is actually going to start
function startQuiz() {
  // hiding the start button once the quiz has started 
  startButton.style.display = "none";

  // starting the timer
  timerInterval = setInterval(function () {
    time--;
    timeEl.textContent = time;
    // ending quiz once the timer runs out
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);


  displayQuestion();
}

// starting the questions
function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = "";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceButton = document.createElement("button");
    // set attribute is giving me the ability to style my buttons on the html side with css( tutor had to help me big time with this one)
    choiceButton.setAttribute("class", "choice")
    choiceButton.textContent = choice;

    // checking the answers
    choiceButton.addEventListener("click", function () {
      var selectedChoice = this.textContent;
      var correctChoice = currentQuestion.choices[currentQuestion.answer];

      if (selectedChoice === correctChoice) {
        // keeping track of the score with if else statements
        score++;
      } else {

        missed++;
        // removing time off the clock if you miss a question
        // looked up most of the time functions still very confused on them working with tutor to understand more
        time -= 10;
        if (time <= 0) {
          endQuiz();
        }
      }


      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    });

    choicesEl.appendChild(choiceButton);
  }
}

// ending the quiz here 
function endQuiz() {
  clearInterval(timerInterval);
  // saving players score 
  // wanted a box displayed on screen and not a prompt but ran out of time will come bak in the future and make better
  // cannot get initials to print on screen come back if enough time 
  var initials = prompt(" Enter Your Initials Or Name Here ");

  var playerScore = {
    initials: initials,
    score: score
  };

  // printing the user initials and score on page
  var initialsEl = document.querySelector("#initials");
  initialsEl.textContent = "Player: " + initials;
  var scoreEl = document.querySelector("#score");
  scoreEl.textContent = "Final Score: " + score;


  // end message with your final scores still trying to get the save your scores working
  questionEl.textContent = "Quiz Ended!";
  choicesEl.innerHTML = "";
  var resultEl = document.createElement("p");
  resultEl.textContent = "Correct: " + score + " | Missed: " + missed;
  // added the ability to put css on final scores 
  resultEl.setAttribute("class", "score")
  choicesEl.appendChild(resultEl);
}