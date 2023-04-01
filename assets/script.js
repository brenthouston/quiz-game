// define all questions and answers
var questions = ["How much does a full NASA space suit cost?", "How many earth's could fit inside the Sun?", "If you were watching a sunset on Mars what color would it be?", "The Sun's mass takes up what percentage of our solar system?", "Very light snow is known to occur at high latitudes on which planet?", "What is the name of the black hole thought to exist at the center of the Milky Way?", "In our solor system, how many stars are there?", "What is the maximum temperature theat Venus' surface can reach in degrees Fahrenheit?", "How many stars are there in the Milky Way galaxy?"]
var answers = ["$ 12,000,000", "1 million", "blue", "99.86%", "Mars", "Sagittarius A*", "1", "850", "100 thousand million"]
// define variable for tracking
//      track time
var countdownTimer;
var secondsLeft = 100;
var isPlaying = false;
var randomQuestion = "";
//      track questions

// create variables to reference DOM elements
//      timer
var timeH2 = document.querySelector("#timer")
//      questions
var questionsH3 = document.querySelector("#ask")
//      answers
var answersP
//      start button
var startButton = document.querySelector("#start-game")
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");





document.querySelector("#start-game").addEventListener("click",function(){
if(!isPlaying){
    
    startQuiz();
}
})
//      name/initials
//      save button
function showHide() {
    document.querySelector(".hide").setAttribute("name", ".show")
    if(document.querySelector)startButton.remove();
    


}
//      high scores container

// function
//      start quiz
 function startQuiz (){
    secondsLeft =100;
    timeH2.textContent=secondsLeft;
    isPlaying=true;
     //          hide start button
     showHide();
     //          show the quiz container

     //          display first question
     randomQuestion = questions[Math.floor(Math.random()* questions.length)];
     console.log("randomQuestion:",randomQuestion);
     questionsH3.textContent=randomQuestion;
     if(randomQuestion == questions[0]){
        btn1.textContent="$ 500,000"
        btn2.textContent="$ 3,000,000"
        btn3.textContent="$ 12,000,000"
        btn4.textContent="$ 40,000,000"
        }else if(randomQuestion == questions[1]){
        btn1.textContent="1 million"
        btn2.textContent="1 trillion"
        btn3.textContent="100 thousand"
        btn4.textContent="500 thousand"
        }else if(randomQuestion == questions[2]){
        btn1.textContent="Green"
        btn2.textContent="Orange"
        btn3.textContent="Yellow"
        btn4.textContent="Blue"
        }else if(randomQuestion == questions[3]){
        btn1.textContent="33.33%"
        btn2.textContent="50.61%"
        btn3.textContent="82.66%"
        btn4.textContent="99.86%"
        }else if(randomQuestion == questions[3]){
        btn1.textContent="Neptune"
        btn2.textContent="Mars"
        btn3.textContent="Venus"
        btn4.textContent="Saturn"
        }else if(randomQuestion == questions[4]){
        btn1.textContent="Capricorn C*"
        btn2.textContent="Gemini B*"
        btn3.textContent="Sagittarius A*"
        btn4.textContent="Scorpio D*"
        }else if(randomQuestion == questions[5]){
        btn1.textContent="100 million"
        btn2.textContent="30 trillion"
        btn3.textContent="50 million"
        btn4.textContent="1"
        }else if(randomQuestion == questions[6]){
        btn1.textContent="1 million"
        btn2.textContent="1 trillion"
        btn3.textContent="100 thousand"
        btn4.textContent="500 thousand"
        }else if(randomQuestion == questions[7]){
        btn1.textContent="850"
        btn2.textContent="1500"
        btn3.textContent="530"
        btn4.textContent="2000"
        }else if(randomQuestion == questions[8]){
        btn1.textContent="500 trillion"
        btn2.textContent="65 trillion"
        btn3.textContent="100 thousand million"
        btn4.textContent="500 thousand million"
            

        }
     //          start timer
     countdownTimer = setInterval(function(){
        secondsLeft--;
        timeH2.textContent=secondsLeft;
        if(secondsLeft<=0){
            clearInterval(countdownTimer);
            timeH2.textContent ="time up!"
            isPlaying=false;


        }
     },1000)
     //          display countdown on screen
     
    }
// function
//      rendering a question
//          clear/remove previous question
//          getting first question
//          add question to the question container
//          make button for each answer
//          add answers to the answers container

// function
//      handle quiz completion
//          stop timer
//          hide quiz container
//          show end screen
//          show time remaining as score

// function
//      handle answer clicks
//
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//
//      update question variable to next question
//      display question on page
//
//      if
//      question is the last question
//      trigger quiz completion

// function
//      tracking time
//          subtract time
//          update the page
//
//      if
//      timer hits zero
//          trigger quiz completion

// function
//      saving high scores
//          get value of user input (name/initals)
//          validate input
//          retreive existing data from local storage
//          update the high score data
//          save updated data back to local storage
//          redirect to start screen after save

// function
//      listening for key press
//          check if the key pressed was 'Enter' for saving scores
//          OPTIONAL check if the key pressed was 'a', 'b', 'c' for answers

// event listeners
//      click start
//      click answers
//      click save score
//      keyups