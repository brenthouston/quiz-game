// define all questions and answers
var questions = [
  "How much does a full NASA space suit cost?",
  "How many earth's could fit inside the Sun?",
  "If you were watching a sunset on Mars what color would it be?",
  "The Sun's mass takes up what percentage of our solar system?",
  "Very light snow is known to occur at high latitudes on which planet?",
  "What is the name of the black hole thought to exist at the center of the Milky Way?",
  "In our solor system, how many stars are there?",
  "What is the maximum temperature that Venus' surface can reach in degrees Fahrenheit?",
  "How many stars are there in the Milky Way galaxy?"
];
var answers = [
  "$ 12,000,000",
  "1 million",
  "blue",
  "99.86%",
  "Mars",
  "Sagittarius A*",
  "1",
  "850",
  "100 thousand million"
];
// define variable for tracking
//      track time
var countdownTimer;
var secondsLeft = 0;
var isPlaying = false;
var randomQuestion = "";
var score = 0;

//      track questions
var countH2 = document.querySelector("#uscore");
// create variables to reference DOM elements
//      timer
var timeH2 = document.querySelector("#timer");
//      questions
var questionsH3 = document.querySelector("#ask");
//      answers
var answersDiv = document.querySelector("#answer");
//      start button
var startButton = document.querySelector("#start-game");
//      score
var scoreCard = document.querySelector("#score");
var wrongH2 = document.querySelector("#wrong");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");

var qabox = document.querySelector("#qa");
var p = document.querySelector("button");

var numOfHighScores = 5;
var highScores = "highScores";
var highScoreString = localStorage.getItem(highScores);
var highScores = JSON.parse(highScoreString) ?? [];

document.querySelector("#start-game").addEventListener("click", function () {
  if (!isPlaying) {
    startQuiz();
  }
});


function startQuiz() {
  score = 0;
  scoreCard.textContent = score;
  secondsLeft = 16;
  timeH2.textContent = secondsLeft;
  isPlaying = true;
  //          hide start button
  showHide();

  //          display first question
  askQuestion();

  //          start timer
  countdownTimer = setInterval(function () {
    secondsLeft--;
    timeH2.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(countdownTimer);
      timeH2.textContent = "time up!";
      isPlaying = false;
      endGame();
      checkHighScore();
      showHighScores();
    }
  }, 1000);

}



function askQuestion() {
  wrongH2.textContent = "";
  btn1.setAttribute("class", "false");
  btn2.setAttribute("class", "false");
  btn3.setAttribute("class", "false");
  btn4.setAttribute("class", "false");
  randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  console.log("randomQuestion:", randomQuestion);
  questionsH3.textContent = randomQuestion;
  if (randomQuestion == questions[0]) {
    btn3.className = "true";
    btn1.textContent = "$ 500,000";
    btn2.textContent = "$ 3,000,000";
    btn3.textContent = "$ 12,000,000";
    btn4.textContent = "$ 40,000,000";
  } else if (randomQuestion == questions[1]) {
    btn1.className = "true";
    btn1.textContent = "1 million";
    btn2.textContent = "1 trillion";
    btn3.textContent = "100 thousand";
    btn4.textContent = "500 thousand";
  } else if (randomQuestion == questions[2]) {
    btn4.className = "true";
    btn1.textContent = "Green";
    btn2.textContent = "Orange";
    btn3.textContent = "Yellow";
    btn4.textContent = "Blue";
  } else if (randomQuestion == questions[3]) {
    btn4.className = "true";
    btn1.textContent = "33.33%";
    btn2.textContent = "50.61%";
    btn3.textContent = "82.66%";
    btn4.textContent = "99.86%";
  } else if (randomQuestion == questions[4]) {
    btn2.className = "true";
    btn1.textContent = "Neptune";
    btn2.textContent = "Mars";
    btn3.textContent = "Venus";
    btn4.textContent = "Saturn";
  } else if (randomQuestion == questions[5]) {
    btn3.className = "true";
    btn1.textContent = "Capricorn C*";
    btn2.textContent = "Gemini B*";
    btn3.textContent = "Sagittarius A*";
    btn4.textContent = "Scorpio D*";
  } else if (randomQuestion == questions[6]) {
    btn4.className = "true";
    btn1.textContent = "100 million";
    btn2.textContent = "30 trillion";
    btn3.textContent = "50 million";
    btn4.textContent = "1";
  } else if (randomQuestion == questions[7]) {
    btn1.className = "true";
    btn1.textContent = "850";
    btn2.textContent = "1500";
    btn3.textContent = "530";
    btn4.textContent = "2000";
  } else if (randomQuestion == questions[8]) {
    btn3.className = "true";
    btn1.textContent = "500 trillion";
    btn2.textContent = "65 trillion";
    btn3.textContent = "100 billion";
    btn4.textContent = "500 thousand million";
  }
} //end askQuestion




// hide start button
function showHide() {
  document.querySelector(".hide").setAttribute("name", ".show");
  if (document.querySelector) startButton.remove();
}
//      high scores container
function checkHighScore(score) {
  var highScores = JSON.parse(highScoreString) ?? [];
  var lowestScore = highScores[numOfHighScores - 1]?.score ?? 0;
  if (score > lowestScore) {
    saveHighScore(score, highScores);
    showHighScores();
  }

  
  
  //          getting first question
  //          add question to the question container
  //          make button for each answer
  //          add answers to the answers container
}
function endGame() {
  var x = qabox;
  if (x.style.display === qabox.remove()) {
    x.style.dispay = "block";
  } else {
    x.style.display = qabox.remove();
  }
  highScores.map((score) => "<li>${score.score} - ${score.name");
  var highScoreList = document.getElementById("high-scores");
 
  highScoreList.textContent = highScores.map((score) => "<li>${score.score} - ${score.name}"
    );
  }
  function showHighScores() {
    var highScores = JSON.parse(localStorage.getItem(highScores)) ?? [];
    var highScoresList = document.getElementById(highScores);
    
    highScoresList.innerHTML = highScores
    .map((score) => "<li>${score.score} - ${score.name}")
    .join("");
  }
  function saveHighScore(score, highScores) {
    var name = prompt("You got a high score! Enter name:");
    var newScore = { score, name };
    
    highScores.push(newScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(numOfHighScores);
    localStorage.setItem(highScores, JSON.stringify(highScores));
  }
  
  function checkAnswer(btn) {
    if (btn.className === "true") {
      wrongH2.textContent = "Correct";
      score++;
      scoreCard.textContent = score;
    } else {
      wrongH2.textContent = "Incorrect";
      secondsLeft -= 10;
    }
    askQuestion();
  }
  
  btn1.addEventListener("click", function (event) {
    
    checkAnswer(btn1);
  });
  btn2.addEventListener("click", function (event) {
    
    checkAnswer(btn2);
  });
  btn3.addEventListener("click", function (event) {
    
    checkAnswer(btn3);
  });
  btn4.addEventListener("click", function (event) {
     
    checkAnswer(btn4);
  });
  //          clear/remove previous question