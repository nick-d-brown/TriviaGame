# TriviaGame

How much do you know about the Olympic Games? Play this javascript trivia game and test your knowledge!

This is an Olympic themed trivia game that utilizes HTML, CSS, JavaScript, and jQuery. This repository has two .js files, the app.js file is the linked JavaScript file that the game uses. This file uses both Vanilla JavaScript and jQuery to provide the game's logic. The second .js file, vanillaApp.js, utilizes only Vanilla JavaScript and is not linked. These files are meant to showcase two possible ways to manipulate the HTML code. 


To Play the Game:

When the player clicks the "Start the game!" button the screen will switch to the multiple choice single page quiz. At that moment a clock will start counting down from 120 seconds. Players must select one of the options from each of the questions and answer all of the questions before the time runs out.  When the clicks the "Submit" button or when the time runs out the quiz will be scored. A new screen will appear and will show how many questions the player guessed correctly, incorrectly, and how many questions went unanswered. The "Game Over" screen background image will change based on how many answers the user guessed correctly. 

Notes:

-The source code for the JavaScript files include comments with a general pseudo code guideline for how the game was designed. 

-Both JavaScript files include a variable with an array containing objects. Each object has information for each question. Though slightly larger than necessary, this provides the option to reduce some repetitive code in the JavaScript and HTML files that do not follow the DRY principle. 

Challenges:

The main challenge encountered when completing this project was in the evaluation of each question's value. I ended up using the ":checked" selector to determine the value of the "checked" radio button. The code would then evaluate the length of the checked radio button to see if it was unequal to 0. If it equaled 0, the question was unanswered, otherwise the code compared the radio button's value to the correct value stored in the individual question's object to see if it was incorrect or correct.   

I hope you enjoy the quiz, and good luck!

