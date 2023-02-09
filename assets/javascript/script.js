let spaceMarineQuestions;
let necronQuestions;
let defaultQuestionSet;
let questionSet;
let selectedFactions = [];
let gameNumber; //This is the index number of current question.
let gameScore; //For global tracking of game score
const questions = {};
const nextbtn = document.getElementById("btn-next-answer");
const resetbtn = document.getElementById("btn-reset-game");

//*Add New Faction* Add a new const for the names.
const spaceMarine = "spaceMarine";
const necron = "necron";



//(import not widley supported....f)import spaceMarineQuestions from "./spacemarine.json" assert {type: "json"};
fetch("https://emarnus.github.io/Warhammer40kQuiz/assets/javascript/spacemarine.json")
  .then(res => res.json())
  .then(data => {
    spaceMarineQuestions = data;
   })
  .then(() => {
    console.log(spaceMarineQuestions);
    questions.spaceMarine = spaceMarineQuestions;
    return questions;
   });

   console.log(questions)
/*
fetch("https://emarnus.github.io/Warhammer40kQuiz/assets/javascript/necron.json")
  .then(res => res.json())
    .then(data => console.log(data))
*/

fetch("https://emarnus.github.io/Warhammer40kQuiz/assets/javascript/necron.json")
  .then(res => res.json())
  .then(data => {
    necronQuestions = data;
   })
  .then(() => {
    console.log(necronQuestions);
    questions.necron = necronQuestions;
    return questions;
   });



// *Add New Faction* When adding new faction file copy the above 8 rows for and customise for file & add a name pair to nameSets.


/*
This stores and retreives Username.
*/
function populateStorage() {
  let name = document.getElementById('player-name').value
  localStorage.setItem("username", name);
}

function retreiveStorage () {
  if (!localStorage.getItem('username')) {
    return;
  } else {
    let name = localStorage.getItem("username");
    document.getElementById('player-name').value = name;
  }
}

document.addEventListener("load", retreiveStorage());

let nameStorage = document.getElementById("player-name");
nameStorage.addEventListener('DOMSubtreeModified', populateStorage);


/*
Section for setting Factions| Purposly left duplicate check off as a joke on the title.
*/

function setDefault () {
  //console.log("Running setDefault")

  //*Add New Faction* Add a new line to add in the new questions
  defaultQuestionSet = questions[spaceMarine];
  defaultQuestionSet = defaultQuestionSet.concat(questions[necron]);
  questionSet = defaultQuestionSet;
}

setTimeout(setDefault, 500) // !!! Need a better way

/**Gets checked from dropdown and adds to  selectedFactions*/
function setFactions() {
  //console.log("running setFactions function")
  questionSet = defaultQuestionSet;

  let checkboxes = document.getElementById("checkboxes");
  let factionCheckbox = checkboxes.getElementsByTagName("input"); //check against this

  if (opened === true) {
    //console.log("Running Opened in setFactions")
    questionSet = [];
    for (let i = 0, length = factionCheckbox.length; i < length; i++) {
      if (factionCheckbox[i].checked) {
        selectedFactions.push(factionCheckbox[i].value)
        //console.log(selectedFactions)
        }
      }
      setQuestions()
  } 
}

// Think will need to have if (faction name) => loop through questions.

/**
Function to add selectedFactions to questionSet.
*/
  function setQuestions() {
    //console.log("Running setQuestions")
    questionSet = [];
    let questionHold = [];
    //console.log("Selected Factions", selectedFactions)
    //console.log(questions)
    for (let i = 0, length = selectedFactions.length; i < length; i++) {
      //console.log(selectedFactions.length)
      if (selectedFactions[i] === "spaceMarine") {
        //console.log(selectedFactions[i])
        //console.log("Question set before if spaceMarine", questionHold) 
        //console.log(questions[spaceMarine])
        questionHold = questions[spaceMarine]
        c//onsole.log("Question set after if spaceMarine", questionHold) 
      } else if (selectedFactions[i] === "necron" && questionHold.length !== 0) {
        //console.log("necron not empty")
        //console.log(questionHold)
        questionHold.push.apply(questionHold, questions[necron])
        //console.log("Question set after if necron & not empty", questionHold) 
      } else if (selectedFactions[i] === "necron") {
        //console.log("necron empty")
        //console.log(questions[necron])
        questionHold = questions[necron]
        //console.log("Question set after if necron & empty ran", questionHold) 
      }
      }
      questionSet = questionHold;
      //console.log(questionSet)    
    }



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
            showButton()
            //console.log("questionSet")
          } else if (this.getAttribute("data-type") === "submit") { 
            checkAnswer()
            } else if (this.getAttribute("data-type") === "next") { 
              nextQuestions()
              } else if (this.getAttribute("data-type") === "reset") { 
              resetGame()
              } else  {
              console.log("Unknown Button Type")
            }
        });
    }
});

/**
Function to show Next and reset buttons.
*/
function showButton(){
  //console.log("showButton")


  nextbtn.classList.remove("hidden");
  resetbtn.classList.remove("hidden");
}

/*
Scripts for the Faction Checkbox dropdown.
*/
let opened = false;
let expanded = false;
const multiSelect = document.querySelector('.multiselect');

multiSelect.addEventListener('click', function(e) {
  const checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
    opened = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
  e.stopPropagation();
}, true)

document.addEventListener('click', function(e){
  if (expanded) {
    checkboxes.style.display = "none";
    setFactions();
    expanded = false;
  }
}, false)


/*
Replace body text with question text and button text/data-type when start is clicked.
*/
function startGame () {

  console.log(questionSet)
  
  //button changes
  let button = document.getElementById("btn-check-answer");
  button.setAttribute ("data-type", "submit");
  button.innerHTML = "Check Answer";
  
  
  //body text changes
  gameNumber = 0;
  //console.log(questionSet)
  document.getElementById("question-text").innerText = questionSet[gameNumber].question;
  document.getElementById("labelQuestion0").innerText = questionSet[gameNumber].options[0];
  document.getElementById("labelQuestion1").innerText = questionSet[gameNumber].options[1];
  document.getElementById("labelQuestion2").innerText = questionSet[gameNumber].options[2];
  document.getElementById("labelQuestion3").innerText = questionSet[gameNumber].options[3];
  document.getElementById("gameNumber").innerText = gameNumber+1;
  document.getElementById("questionNumber1").innerText = questionSet.length;
  document.getElementById("questionNumber2").innerText = questionSet.length;
  //console.log(questionSet.length);
}



/*
This function is to check the answers. Run when button is clicked
*/
function checkAnswer() {
    let inputs = document.getElementsByTagName("input");
    let labels = document.getElementsByTagName("label");
    
   //Pulls correct Answer
    let correctAnswer = questionSet[gameNumber].answer //Working
    //console.log(correctAnswer); //Working
    //console.log(gameNumber)

    let selected = "";
    //console.log(selected);

    //sets selected answer for above
    for (let i = 0, length = inputs.length; i < length; i++) {
      if (inputs[i].checked) {
        selected = labels[i-1].textContent}
        //console.log(selected)
      }
      //console.log(selected);

      if (gameNumber == questionSet.length-1 && selected == correctAnswer) { //Answer check correct end of game
        gameScore = gameScore + 1;
        document.getElementById("game-score").innerText = gameScore;
        //console.log("End of quiz") 
        openModal ();
      } else if (gameNumber == questionSet.length-1 && selected != correctAnswer) { //Answer check incorrect end of game
        openModal ();
      } else if (selected == correctAnswer){//Answer check correct
        //Something to indicate correct answers
        document.getElementById("btn-check-answer").setAttribute("class", "correct-answer")
        //nextQuestions ();
        if (!gameScore){
          gameScore = 0;
          //console.log(gameScore)
        }
        gameScore = gameScore + 1;
        document.getElementById("game-score").innerText = gameScore;
        console.log(gameScore)
      } else {//Answer check incorrect
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
    document.getElementById("btn-check-answer").removeAttribute("class", "correct-answer")
    gameNumber = gameNumber +1;
    document.getElementById("question-text").innerText = questionSet[gameNumber].question;
    document.getElementById("labelQuestion0").innerText = questionSet[gameNumber].options[0];
    document.getElementById("labelQuestion1").innerText = questionSet[gameNumber].options[1];
    document.getElementById("labelQuestion2").innerText = questionSet[gameNumber].options[2];
    document.getElementById("labelQuestion3").innerText = questionSet[gameNumber].options[3];
    document.getElementById("gameNumber").innerText = gameNumber+1;

    //console.log("gameNumber", gameNumber+1)
    //console.log("QuestionSet Length", questionSet.length)

    if (gameNumber+1 === questionSet.length){
      nextbtn.classList.add("hidden");
    }
  }
  

/*
Scripts to control the Modal from https://www.w3schools.com/howto/howto_css_modals.asp
*/
// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


/*
When the user clicks on the button, open the modal
*/
function openModal() {
  modal.style.display = "block";
  document.getElementById("mgame-score").innerText = gameScore;
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
//document.getElementById("btn-check-answer").setAttribute("class", "")
gameNumber = 0;
gameScore = 0;
document.getElementById("game-score").innerText = gameScore;
nextbtn.classList.remove("hidden");
setFactions()
startGame ();
}


// testing


// testing 