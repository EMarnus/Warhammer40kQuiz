# Warhammer 40,000 Quiz

### [Live Website](https://emarnus.github.io/Warhammer40kQuiz/)

My Warhammer 40K quiz is meant to be a simple site made using HTML, CSS and Javascript. The objective of the site is to provide a fairly simple quiz for anyone intereseted. My main goal for the website was to have an easily expandable question pool, I was mostly sucessfull.

![Initial Mockup](./assets/images/initial%20wireframe.PNG)
![Responsive Mockup](./assets/images/Am%20I%20responsive.PNG)

## Features 

In this section, you should go over the different parts of your project, and describe each in a sentence or so. You will need to explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

### Existing Features

- __The Header bar__

  - Featured at the top of the page, the title itroduces the subject content, reinforced by the header image. The users name, set by the user and the score.
  The score system is a simple increment for a correct answer.

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

- Multiple question sets, based on faction.
- Multipe hero images based on the question.
- A weighted scoring systme.
- A hint system.
- Redesign, not enought Gothic horror.

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

### Content 

- Local storage - Mentor Can S and https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API & https://stackoverflow.com/questions/47378194/fire-a-function-when-innerhtml-of-element-changes
- Deselecting Radio buttons script from https://stackoverflow.com/questions/15784554/how-to-uncheck-radio-button-javascript
- Import from json https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules/
- Combining quesion arrays https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items?noredirect=1&lq=1 
- Checkbox for faction selection https://stackoverflow.com/questions/17714705/how-to-use-checkbox-inside-select-option

### Media

- Hero Image taken from
- Template taken from [Code Institute](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md?plain=1)