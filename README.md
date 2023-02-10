# Warhammer 40,000 Quiz

### [Live Website](https://emarnus.github.io/Warhammer40kQuiz/)

My Warhammer 40K quiz is meant to be a simple site made using HTML, CSS and Javascript. The objective of the site is to provide a fairly simple quiz for anyone interested. My main goal for the website was to have an easily expandable question pool, I was mostly successful. To achieve this separate json files were used for the different question sets, and comments were left in script.js where code needs to be add for new files. Very easy to add more questions to existing files, just copy the existing format and they will work in game.

![Initial Mockup](./assets/images/initial%20wireframe.PNG)
![Responsive Mockup](./assets/images/Am%20I%20responsive.PNG)

## Features 

### Existing Features

- __The Header bar__

  - Featured at the top of the page, the title introduces the subject content, reinforced by the header image.
  - The users name, set by the user and stored using local API.
  - The score system is a simple increment for a correct answer, on clicking check answer.

- __The Game Area__

  - This section is the main focus of the page and where the action happens.
  - The area starts with a haiku and once the game is started the text is replaced with a question and 4 answers.
  - Also contains a counter for the question you are on out of total questions.

- __Adding Factions__
<ol>
  <li>Create a json file in the format of the others, need all key pairs in order.</li>
  <li>Search in script.js for *Add New Faction* and add/update</li>
  <li>Add a label and input for it in HTML under id="checkboxes"</li>
  <li>Test and despair</li>
</ol>

### Features Left to Implement

- More question sets, based on faction and expand question selection.
- •	Multiple hero images based on the question.
- A weighted scoring system.
- A hint system.
- Redesign, not enough Gothic horror.
- New question validation for json files.

## Testing 

Ongoing testing on Chrome as features were added. Additional Testing was done desktop Edge, Firefox & Mobile Chrome. Manual testing was done for edge cases, that is how infinite score, no checkbox selected and reset game bugs were found.

[Incognito Lighthouse](./assets/images/Incognito%20Lighthouse.PNG)

### Validator Testing 

- HTML
    - Needed to fix some p elements and a legend element to pass [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Femarnus.github.io%2FWarhammer40kQuiz%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femarnus.github.io%2FWarhammer40kQuiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 24 functions in this file.
      - Function with the largest signature take 1 arguments, while the median is 0.
      - Largest function has 22 statements in it, while the median is 2.5.
      - The most complex function has a cyclomatic complexity value of 11 while the median is 1.

### Fixed Bugs
- Changed name to input to prevent unwanted characters being used.
- The background doesn't cover entire screen on some devices. 
- Hover animation moved the buttons.
- Original import of json files did not work on Firefox, rewrote to use fetch API. Sean Young helped parts of this.
- Can brute force correct answer.
- Can submit correct answer multiple times and increase score.
- Can break game by deselecting all from checkbox
- Can get to end of game with NaN as score.

### Unfixed Bugs



## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed - - ribbon display to indicate the successful deployment. 

The live link can be found here - https://emarnus.github.io/Warhammer40kQuiz/


## Credits 
- Can Sucullu - Mentor at Code Institute
- [Sean Young](https://github.com/seanyoung247), talking through some issues when switching over to fetch API.

### Content 

- Local storage - Mentor Can S and https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API & https://stackoverflow.com/questions/47378194/fire-a-function-when-innerhtml-of-element-changes
- Deselecting Radio buttons script from https://stackoverflow.com/questions/15784554/how-to-uncheck-radio-button-javascript
- Import from json https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules/
- Combining question arrays https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items?noredirect=1&lq=1 
- Checkbox for faction selection https://stackoverflow.com/questions/17714705/how-to-use-checkbox-inside-select-option

### Media

- Hero Images belong to Games Workshop
- Template taken from [Code Institute](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md?plain=1)