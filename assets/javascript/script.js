// Which fortified world of the Imperium watches over the Eye of Terror?, Jago, Cadia, Titan, Boros Prime

/*
This funciton is to add event listener to Buttons once page loads
*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/*
This function is to check the answers. Run when button is clicked
*/
function checkAnswer() {
    let radios = document.getElementsByName('answer');
    for (let i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        if(radios[i].value == "Cadia"){
          alert("Correct!");
        } else {
          alert("Incorrect, the correct answer is Cadia.");
        }
        break;
      }
    }
  }