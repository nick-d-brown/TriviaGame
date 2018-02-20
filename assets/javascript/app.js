// trivia game logic


$(document).ready(function(){
//Variables
    var questions = [
        {
            questionNumber: 1,
            name: "question1choices",
            correctValue: "a",
            question: "This country has the lowest number of total Olympic medals per capita.",
            correctAnswer: "India",
            incorrectAnswers: ["USA", "China", "Spain"]
        } ,
        {
            questionNumber: 2,
            name: "question2choices",
            correctValue: "c",
            question: "This country is the only country to have won a gold medal at every Summer Olympic Games.",
            correctAnswer: "Great Britain",
            incorrectAnswers: ["Australia", "Switzerland", "France"]
        } ,
        {
            questionNumber: 3,
            name: "question3choices",
            correctValue: "b",
            question: "What was the last year that medals were made of solid gold?",
            correctAnswer: "1912",
            incorrectAnswers: ["1920", "1900", "1928"]
        } ,
        {
            questionNumber: 4,
            name: "question4choices",
            correctValue: "d",
            question: "What was the first team sport to be added to the Olympics?",
            correctAnswer: "Football (Soccer)",
            incorrectAnswers: ["Ice Hockey", "Rowing", "Curling"]
        } ,
        {
            questionNumber: 5,
            name: "question5choices",
            correctValue: "a",
            question: "This was the first year that swimming pools were used for swimming events.",
            correctAnswer: "1908",
            incorrectAnswers: ["1912", "1904", "1932"]
        } ,
        {
            questionNumber: 6,
            name: "question6choices",
            correctValue: "d",
            question: "What was the final score of the famous 1980 'Miracle on Ice' game between the USSR and the USA?",
            correctAnswer: "4-3",
            incorrectAnswers: ["1-0", "2-1", "3-2"]
        } ,
        {
            questionNumber: 7,
            name: "question7choices",
            correctValue: "a",
            question: "Which nation has only won a single Olympic medal?",
            correctAnswer: "Djibouti",
            incorrectAnswers: ["Nauru", "Bolivia", "Malta"]
        } ,
        {
            questionNumber: 8,
            name: "question8choices",
            correctValue: "d",
            question: "How many gold medals has Michael Phelps won?",
            correctAnswer: "18",
            incorrectAnswers: ["12", "20", "24"]
        } ,
    ];
        
    var userAnswers = [];

    var timerNumberStart = 12;

    var correctQuestionCount = 0;
    var incorrectQuestionCount = 0;
    var unansweredQuestionCount = 0;


// 1. first screen is displayed with button to click to start game (done)
    
    // a. button is listening for click
    // b. when clicked, the initial screen that is in a div is then add display none css and div with gameplay questions is removed display none css
    var gameGo = document.getElementById("gameStartButton").onclick = function()   {   
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('gamePlay').style.display = 'block';
        // document.getElementById('gameOverScreen').style.display = 'none';
        triviaStart();
        var gameSubmit = document.getElementById("gameSubmitButton").addEventListener("click", questionCheck);
    };

// 2. second screen is displayed (done)
    // a. timer is started at 120 seconds and is added to the div with "time remaining"
    // b. if time runs out the the gameplay screen switches to display none and game over screen displays
        // i. game over screen has loss displayed (optional) and totall wins and losses displayed

        // ii. # of correct answers are displayed in the "Correct Answers" section

        // iii. # of incorrect answers are displayed in the "Incorrect Answers" section

        // iv. # of unanswered questions are displayed in "Unanswered" section

        // (optional) v. reset button - when pressed resets the game
    function timerCountDown() {
        document.getElementById("runningTimer").innerHTML = timerNumberStart;
        timerNumberStart--;
        if (timerNumberStart === 0) {
            // clearInterval(runningTimer);
            // document.getElementById('gamePlay').style.display = 'none';
            // document.getElementById('gameOverScreen').style.display = 'block';
            questionCheck();
        }
    }

    function triviaStart () {
        var runningTimer = setInterval(timerCountDown,1000);
    }


///////////////////////////////////////////////working code above

    // var gameSubmit = document.getElementById("gameSubmitButton").addEventListener("click", questionCheck);





    

    
    // document.getElementById("gameSubmitButton").addEventListener("click", questionCheck);
    
    
    function questionCheck() {

        //this is working and will push each question into the array        
       
        //$('input:radio[value=female]').prop("checked", true );; try using this
        // console.log($('input'));
           
            // if (!$('input:checked')) {
            //     $('input:checked').each(function () {
            //     array.push(0);
            //     console.log(array);
            //     });
            // }
            // else 
            // if ($('input:checked')) {
            //     $('input:checked').each(function () {
            //         array.push($(this).val());
            //         console.log(array);
            //         console.log($('input:checked'));
            //     });
            // }


        clearInterval(runningTimer);
        document.getElementById('gamePlay').style.display = 'none';
        document.getElementById('gameOverScreen').style.display = 'block';


            //is question 1 correct

            var question1answer = $('input[name="question1"]:checked');
            if (question1answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question1answer, function(){
                    if ($(this).val() === questions[0].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 2 correct

            var question2answer = $('input[name="question2"]:checked');
            if (question2answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question2answer, function(){
                    if ($(this).val() === questions[1].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 3 correct

            var question3answer = $('input[name="question3"]:checked');
            if (question3answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question3answer, function(){
                    if ($(this).val() === questions[2].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 4 correct

            var question4answer = $('input[name="question4"]:checked');
            if (question4answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question1answer, function(){
                    if ($(this).val() === questions[3].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 5 correct

            var question5answer = $('input[name="question5"]:checked');
            if (question5answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question1answer, function(){
                    if ($(this).val() === questions[4].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 6 correct

            var question6answer = $('input[name="question6"]:checked');
            if (question6answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question1answer, function(){
                    if ($(this).val() === questions[5].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 7 correct

            var question7answer = $('input[name="question7"]:checked');
            if (question7answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question1answer, function(){
                    if ($(this).val() === questions[6].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 8 correct

            var question8answer = $('input[name="question8"]:checked');
            if (question8answer.length === 0) {
                unansweredQuestionCount++;
                // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
            } else {
                $.each(question1answer, function(){
                    if ($(this).val() === questions[7].correctValue) {
                        correctQuestionCount++;
                // document.getElementById("correctQuestions") = correctQuestionCount;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            
        document.getElementById("unansweredQuestions").innerText = unansweredQuestionCount;
        document.getElementById("correctQuestions").innerText = correctQuestionCount;
        document.getElementById("incorrectQuestions").innerText = incorrectQuestionCount;
        return false;
       console.log(unansweredQuestions);
       
    }




    //     for (var i = 0; i < questions.length; i++) {
    //         if (array[i] === questions[i].correctValue) {
    //             correctQuestionCount++;
    //             document.getElementById("correctQuestions") = correctQuestionCount;
    //         }
    //         else if (array[i] === 0) {
    //             unansweredQuestionCount++;
    //             // document.getElementById("unansweredQuestions") = unansweredQuestionCount;
    //         }
    //         else {
    //             incorrectQuestionCount++;
    //             // document.getElementById("incorrectQuestions") = incorrectQuestionCount;
    //             $("#incorrectQuestions").text(incorrectQuestionCount);
    //         }
    //     } 
    // }   
    
    // console.log(array); 

        /* compare the values in the array and if the value at spot [i]
        in the array is = to the value of the [i] object that is the same as the question value, then plus one to correct incorrectAnswers
        if value is 0 then add to unanswered questions
        else ann to the wrng andswers */
    
    // c. each question (8 total) has 4 radio buttons 

    // d. each question must have a radio button clicked before form will submit

    // e. when submit button is pressed current screen is set to display none css and game over screen is removed display none css


    // when submit is clicked
    

        // i. game over screen has win displayed (optional) and total wins and losses

        // ii. # of correct answers are displayed in the "Correct Answers" section

        // iii. # of incorrect answers are displayed in the "Incorrect Answers" section

        // iv. # of unanswered questions are displayed in "Unanswered" section

        // (optional) v. reset button - when pressed resets the game


});