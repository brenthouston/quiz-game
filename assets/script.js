// define all questions and answers

// define variable for tracking
//      track time
var countdownTimer;
var secondsLeft = 100;
var isPlaying = false;
//      track questions

// create variables to reference DOM elements
//      timer
var timeH2 = document.querySelector("#timer")
//      questions
//      answers
//      start button
document.querySelector("#start-game").addEventListener("click",function(){
if(!isPlaying){
    startQuiz();
}
})
//      name/initials
//      save button
//      high scores container

// function
//      start quiz
 function startQuiz (){
    secondsLeft =100;
    timeH2.textContent=secondsLeft;
    isPlaying=true;

     //          hide start button
     //          show the quiz container
     //          display first question
     //          start timer
     countdownTimer = setInterval(function(){
        secondsLeft--;
        timeH2.textContent=secondsLeft;
        if(secondsLeft<=0){
            clearInterval(countdownTimer);
            timeH2.textContent ="you lose!"
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