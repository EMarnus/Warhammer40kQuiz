import spaceMarineQuestions from "./spacemarine.json" assert {type: "json"};
//console.log(spaceMarineQuestions);
import necronQuesions from "./necron.json" assert {type: "json"}; //Add another of these for each new faction json file.
//console.log(necronQuesions);

let gameNumber; //This is the index number of current question.
let gameScore; //For global tracking of game score
//console.log(gameScore)

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
Sets questions for quiz.
*/
let questionSet = spaceMarineQuestions.concat(necronQuesions);
let selectedFactions = [];
//questionSet.push(necronQuesions)
//questionSet.push(spaceMarineQuestions)
//console.log(questionSet);
// Need to add check-box with if () to set questions.


/*
Section for seting Factions used for questions. Get factions selected and pass to be concat
*/
function setFactions() {
  let checkboxes = document.getElementById("checkboxes");
  let factionCheckbox = checkboxes.getElementsByTagName("input"); //check against this

  for (let i = 0, length = factionCheckbox.length; i < length; i++) {
    if (factionCheckbox[i].checked) {
      selectedFactions.push(factionCheckbox[i].value)
      }
    }
    setQuestions()
  }


  function setQuestions() {
    for (let i = 0, length = selectedFactions.length; i < length; i++) {
      questionSet.concat(selectedFactions[i])
      }
      console.log(questionSet)
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
              //for use if more factions are added.
              window.alert("Oops, something went wrong.")
                let gameType = this.getAttribute("data-type");
            }
        });
    }
});

/*
Function to show Next and reset buttons.
*/
function showButton(){
  //console.log("showButton")
  let next = document.getElementById("btn-next-answer");
  let reset = document.getElementById("btn-reset-game");

  next.style.display = "block";
  reset.style.display = "block";
}

/*
Scripts for the Faction Checkbox dropdown.
*/
let expanded = false;
const multiSelect = document.querySelector('.multiselect');

multiSelect.addEventListener('click', function(e) {
  const checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
  e.stopPropagation();
}, true)

document.addEventListener('click', function(e){
  if (expanded) {
    checkboxes.style.display = "none";
    expanded = false;
  }
}, false)


/*
Replace body text with question text and button text/data-type when start is clicked.
*/
function startGame () {
  setFactions()

  //button changes
  let button = document.getElementById("btn-check-answer");
  button.setAttribute ("data-type", "submit");
  button.innerHTML = "Check Answer";
  
  
  //body text changes
  gameNumber = 0;
  document.getElementById("question-text").innerText = questionSet[gameNumber].question;
  document.getElementById("labelQuestion0").innerText = questionSet[gameNumber].options[0];
  document.getElementById("labelQuestion1").innerText = questionSet[gameNumber].options[1];
  document.getElementById("labelQuestion2").innerText = questionSet[gameNumber].options[2];
  document.getElementById("labelQuestion3").innerText = questionSet[gameNumber].options[3];
  document.getElementById("gameNumber").innerText = gameNumber+1;
  document.getElementById("questionNumber").innerText = questionSet.length;
}



/*
This function is to check the answers. Run when button is clicked
*/
function checkAnswer() {
    let inputs = document.getElementsByTagName("input");
    let labels = document.getElementsByTagName("label");
    
   //Pulls correct Answer
    let correctAnswer = questionSet[gameNumber].answer //Working
    console.log(correctAnswer); //Working
    console.log(gameNumber)

    let selected = "";
    console.log(selected);

    //sets selected answer for above
    for (let i = 0, length = inputs.length; i < length; i++) {
      if (inputs[i].checked) {
        selected = labels[i-1].textContent}
        //console.log(selected)
      }
      console.log(selected);

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
    gameNumber = gameNumber +1;
    document.getElementById("question-text").innerText = questionSet[gameNumber].question;
    document.getElementById("labelQuestion0").innerText = questionSet[gameNumber].options[0];
    document.getElementById("labelQuestion1").innerText = questionSet[gameNumber].options[1];
    document.getElementById("labelQuestion2").innerText = questionSet[gameNumber].options[2];
    document.getElementById("labelQuestion3").innerText = questionSet[gameNumber].options[3];
    document.getElementById("gameNumber").innerText = gameNumber+1;
    document.getElementById("btn-check-answer").setAttribute("class", "")
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
document.getElementById("btn-check-answer").setAttribute("class", "")
gameNumber = 0;
gameScore = 0;
document.getElementById("game-score").innerText = gameScore;
startGame ();
}