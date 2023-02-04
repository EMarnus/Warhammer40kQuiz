console.log("JS Loaded");

// // Declaring variables for use in HTML
// let gameNumber = document.getElementById("gameNumber").innerHTML;
// let question = document.getElementById("question-text").innerHTML;
// let answer0 = document.getElementById("labelQuestion0").innerHTML;
// let answer1 = document.getElementById("labelQuestion1").innerHTML;
// let answer2 = document.getElementById("labelQuestion2").innerHTML;
// let answer3 = document.getElementById("labelQuestion3").innerHTML;

let gameNumber; //This is the index number of current question.
let gameScore; //For global tracking of game score
//console.log(gameScore)

/*
This  stores and retreives Username and score.
*/
function populateStorage() {
  let name = document.getElementById('player-name').innerHTML
  localStorage.setItem("username", name);
}

function retreiveStorage () {
  if (!localStorage.getItem('username')) {
    return;
  } else {
    let name = localStorage.getItem("username");
    document.getElementById('player-name').innerHTML = name;
  }
}

document.addEventListener("load", retreiveStorage());

let nameStorage = document.getElementById("player-name");
nameStorage.addEventListener('DOMSubtreeModified', populateStorage);



/*
Import questions for quiz.
*/
// const spaceMarineQuestions = require("./questions")

const spaceMarineQuestions = [{
  numb: 0,
  question: "Which fortified world of the Imperium watched over the Eye of Terror?",
  answer: "Cadia",
  options: [
    "Jago",
    "Cadia",
    "Titan",
    "Boros Prime"
  ]
},
{
  numb: 1,
  question: "Which space marine chapter is stationed on Holy Terra?",
  answer: "Imperial Fists",
  options: [
    "Imperial Fists",
    "Blood Ravens",
    "Iron Hands",
    "Ultra Marines"
  ]
},
{
  numb: 2,
  question: "What caused the eye of terror?",
  answer: "The birth of Slaanesh",
  options: [
    "A space giant waking up",
    "The Horus Heresy",
    "The birth of Slaanesh",
    "Unknow"
  ]
},
{
  numb: 3,
  question: "Who is Kaldor Draigo?",
  answer: "Supreme Grand Master of the Grey Knights",
  options: [
    "A Primarch",
    "Supreme Grand Master of the Grey Knights",
    "A Planetary Govenor",
    "The Fabricator-General of Mars"
  ]
}
]

/*
This funciton is to add event listener to Buttons once page loads
*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "start") {
            startGame()
            populateStorage() // Remove
          } else if (this.getAttribute("data-type") === "submit") { 
            checkAnswer()
            } else if (this.getAttribute("data-type") === "next") { 
              nextQuestions()
              } else if (this.getAttribute("data-type") === "reset") { 
              resetGame()
              } else  {
              //for use if more factions are added.
                let gameType = this.getAttribute("data-type");
            }
        });
    }
});


/*
Replace body text with question text and button text/data-type when start is clicked.
*/
function startGame () {

  //button changes
  let button = document.getElementById("btn-check-answer");
  button.setAttribute ("data-type", "submit");
  button.innerHTML = "Check Answer";
  
  
  //body text changes
  gameNumber = 0;
  document.getElementById("question-text").innerText = spaceMarineQuestions[gameNumber].question;
  document.getElementById("labelQuestion0").innerText = spaceMarineQuestions[gameNumber].options[0];
  document.getElementById("labelQuestion1").innerText = spaceMarineQuestions[gameNumber].options[1];
  document.getElementById("labelQuestion2").innerText = spaceMarineQuestions[gameNumber].options[2];
  document.getElementById("labelQuestion3").innerText = spaceMarineQuestions[gameNumber].options[3];
  document.getElementById("gameNumber").innerText = gameNumber+1;
}



/*
This function is to check the answers. Run when button is clicked
*/
function checkAnswer() {
    let inputs = document.getElementsByTagName("input");
    let labels = document.getElementsByTagName("label");
    
   //Pulls correct Answer
    let correctAnswer = spaceMarineQuestions[gameNumber].answer //Working
    //console.log(correctAnswer); //Working
    let selected = "";

    //sets selected answer for above
    for (let i = 0, length = inputs.length; i < length; i++) {
      if (inputs[i].checked) {
        selected = labels[i].textContent}
        //console.log(selected)
      }
      //console.log(selected);

      if (gameNumber == spaceMarineQuestions.length-1 && selected == spaceMarineQuestions[gameNumber].answer) {
        gameScore = gameScore + 1;
        document.getElementById("game-score").innerText = gameScore;
        //console.log("End of quiz") 
        openModal ();
      } else if (gameNumber == spaceMarineQuestions.length-1 && selected != spaceMarineQuestions[gameNumber].answer) {
        openModal ();
      } else if (selected == spaceMarineQuestions[gameNumber].answer){
        //Something to indicate correct answers
        document.getElementById("btn-check-answer").setAttribute("class", "correct-answer")
        //nextQuestions ();
        if (!gameScore){
          gameScore = 0;
          console.log(gameScore)
        }
        gameScore = gameScore + 1;
        document.getElementById("game-score").innerText = gameScore;
        console.log(gameScore)
      } else {
        document.getElementById("btn-check-answer").setAttribute("class", "incorrect-answer")
        //nextQuestions ();
      }

      //This deselects the radio button when adding new answers. Taken from https://stackoverflow.com/questions/15784554/how-to-uncheck-radio-button-javascript (Ewald Bos)
      let elements = document.getElementsByTagName("input");

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "radio") {
            elements[i].checked = false;
        }
    }
      
      }


  function nextQuestions () {
    gameNumber = gameNumber +1;
    document.getElementById("question-text").innerText = spaceMarineQuestions[gameNumber].question;
    document.getElementById("labelQuestion0").innerText = spaceMarineQuestions[gameNumber].options[0];
    document.getElementById("labelQuestion1").innerText = spaceMarineQuestions[gameNumber].options[1];
    document.getElementById("labelQuestion2").innerText = spaceMarineQuestions[gameNumber].options[2];
    document.getElementById("labelQuestion3").innerText = spaceMarineQuestions[gameNumber].options[3];
    document.getElementById("gameNumber").innerText = gameNumber+1;
  }
  

/*
Scripts to control the Modal from https://www.w3schools.com/howto/howto_css_modals.asp
*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


/*
When the user clicks on the button, open the modal
*/
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
Function to reset game without reloading page
*/
function resetGame (){
gameNumber = 0;
gameScore = 0;
startGame ();
}