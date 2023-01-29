console.log("JS Loaded");
let gameNumber = 0;

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
            console.log("Checking Answers")  
            checkAnswer()
            } else  {
              //for use if more factions are added.
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
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
  document.getElementById("gameNumber").innerHTML = gameNumber +1;
  document.getElementById("quetion-text").innerHTML = spaceMarineQuestions[gameNumber].question;
  document.getElementById("question0").innerHTML = spaceMarineQuestions[gameNumber].options[0];
  document.getElementById("question1").innerHTML = spaceMarineQuestions[gameNumber].options[1];
  document.getElementById("question2").innerHTML = spaceMarineQuestions[gameNumber].options[2];
  document.getElementById("question3").innerHTML = spaceMarineQuestions[gameNumber].options[3];
  
}




/*
This function is to check the answers. Run when button is clicked
*/
function checkAnswer() {
    console.log(spaceMarineQuestions[gameNumber].answer); //working

    let label = document.getElementsByClassName('answer');
    console.log(label.value)

    for (let i = 0, length = label.length; i < length; i++) {
      if (label[i].checked) {
        if (label[i].innerHTML == spaceMarineQuestions[gameNumber].answer){
          //Something to indicate correct answers
          gameNumber + 1;
          document.getElementById("gameNumber").innerHTML = gameNumber + 1;
          console.log("Complete True");
        } else {
          alert(`Incorrect, the correct answer is ${spaceMarineQuestions[gameNumber].answer}.`);
        }
        document.getElementById("quetion-text").innerHTML = spaceMarineQuestions[gameNumber].question;
        document.getElementById("question0").innerHTML = spaceMarineQuestions[gameNumber].options[0];
        document.getElementById("question1").innerHTML = spaceMarineQuestions[gameNumber].options[1];
        document.getElementById("question2").innerHTML = spaceMarineQuestions[gameNumber].options[2];
        document.getElementById("question3").innerHTML = spaceMarineQuestions[gameNumber].options[3];

        break;
      }
    }
  }

  
