console.log("JS Loaded");

// // Declaring variables for use in HTML
// let gameNumber = document.getElementById("gameNumber").innerHTML;
// let question = document.getElementById("question-text").innerHTML;
// let answer0 = document.getElementById("question0").innerHTML;
// let answer1 = document.getElementById("question1").innerHTML;
// let answer2 = document.getElementById("question2").innerHTML;
// let answer3 = document.getElementById("question3").innerHTML;

let gameNumber;

/*
List all the questions.
*/
let spaceMarineQuestions = [{
  numb: 0,
  question: "Which fortified world of the Imperium watches over the Eye of Terror?",
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
          } else if (this.getAttribute("data-type") === "submit") { 
            checkAnswer()
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
  document.getElementById("question-text").innerHTML = spaceMarineQuestions[gameNumber].question;
  document.getElementById("question0").innerHTML = spaceMarineQuestions[gameNumber].options[0];
  document.getElementById("question1").innerHTML = spaceMarineQuestions[gameNumber].options[1];
  document.getElementById("question2").innerHTML = spaceMarineQuestions[gameNumber].options[2];
  document.getElementById("question3").innerHTML = spaceMarineQuestions[gameNumber].options[3];
}




/*
This function is to check the answers. Run when button is clicked
*/
function checkAnswer() {
    let inputs = document.getElementsByTagName("input");
    let labels = document.getElementsByTagName("label");
    
   //Pulls correct Answer
    let correctAnswer = spaceMarineQuestions[gameNumber].answer //Working
    console.log(correctAnswer); //Working
    let selected = "";

    //sets selected answer for above
    for (let i = 0, length = inputs.length; i < length; i++) {
      if (inputs[i].checked) {
        selected = labels[i].textContent}
        //console.log(selected)
      }
      console.log(selected);

      if (selected == spaceMarineQuestions[gameNumber].answer){
        //Something to indicate correct answers
        console.log("Complete True");
        nextQuestions ()
      } else {
        alert(`Incorrect, the correct answer is ${spaceMarineQuestions[gameNumber].answer}.`);
      }
        
      }


  function nextQuestions () {
    gameNumber = gameNumber +1;
    document.getElementById("question-text").innerHTML = spaceMarineQuestions[gameNumber].question;
    document.getElementById("question0").innerHTML = spaceMarineQuestions[gameNumber].options[0];
    document.getElementById("question1").innerHTML = spaceMarineQuestions[gameNumber].options[1];
    document.getElementById("question2").innerHTML = spaceMarineQuestions[gameNumber].options[2];
    document.getElementById("question3").innerHTML = spaceMarineQuestions[gameNumber].options[3];

  }
  
  
