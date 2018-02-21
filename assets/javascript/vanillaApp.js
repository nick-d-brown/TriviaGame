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
        
    var runningTimer;

    var userAnswers = [];

    var timerNumberStart = 120;

    var correctQuestionCount = 0;
    var incorrectQuestionCount = 0;
    var unansweredQuestionCount = 0;

// 1. first screen is displayed with button to click to start game (done)
    
    // a. button is listening for click
    // b. when clicked, the initial screen that is in a div is then add display none css and div with gameplay questions is removed display none css
    
    var gameGo = document.getElementById("gameStartButton").onclick = function()   {   
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('gamePlay').style.display = 'block';
        document.getElementsByTagName("BODY")[0].style.backgroundImage = 'url(./assets/images/hotel.jpeg)';
        
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



    function triviaStart() {
        clearInterval(runningTimer);
        runningTimer = setInterval(timerCountDown, 1000);
    }

    function timerCountDown() {
        timerNumberStart--;
        document.getElementById("runningTimer").innerHTML = timerNumberStart;
        if (timerNumberStart === 0) {
            stopTimer();
            questionCheck();
        }
    }

    function stopTimer() {
        clearInterval(runningTimer);
    }
    
    function questionCheck() {

        stopTimer();
        document.getElementById('gamePlay').style.display = 'none';
        document.getElementById('gameOverScreen').style.display = 'block';
        console.log($('input[name="question1"]:checked'));
        
            //is question 1 correct

            var question1answer = $('input[name="question1"]:checked');
            if (question1answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question1answer, function(){
                    if ($(this).val() === questions[0].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 2 correct

            var question2answer = $('input[name="question2"]:checked');
            if (question2answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question2answer, function(){
                    if ($(this).val() === questions[1].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 3 correct

            var question3answer = $('input[name="question3"]:checked');
            if (question3answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question3answer, function(){
                    if ($(this).val() === questions[2].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 4 correct

            var question4answer = $('input[name="question4"]:checked');
            if (question4answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question4answer, function(){
                    if ($(this).val() === questions[3].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 5 correct

            var question5answer = $('input[name="question5"]:checked');
            if (question5answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question5answer, function(){
                    if ($(this).val() === questions[4].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 6 correct

            var question6answer = $('input[name="question6"]:checked');
            if (question6answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question6answer, function(){
                    if ($(this).val() === questions[5].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 7 correct

            var question7answer = $('input[name="question7"]:checked');
            if (question7answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question7answer, function(){
                    if ($(this).val() === questions[6].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
            //is question 8 correct

            var question8answer = $('input[name="question8"]:checked');
            if (question8answer.length === 0) {
                unansweredQuestionCount++;
            } else {
                $.each(question8answer, function(){
                    if ($(this).val() === questions[7].correctValue) {
                        correctQuestionCount++;
                    } else {
                        incorrectQuestionCount++;
                    }
                });
            }
        
        if (correctQuestionCount >= 6) {
            document.getElementsByTagName("BODY")[0].style.backgroundImage = 'url(./assets/images/medal.jpeg)';
            document.getElementsByTagName("BODY")[0].style.backgroundPosition = 'center';

        } else {
            document.getElementsByTagName("BODY")[0].style.backgroundImage = 'url(./assets/images/track.jpeg)';

        }


        document.getElementById("unansweredQuestions").innerText = unansweredQuestionCount;
        document.getElementById("correctQuestions").innerText = correctQuestionCount;
        document.getElementById("incorrectQuestions").innerText = incorrectQuestionCount;
        return false;
       console.log(unansweredQuestions);
       
    }
    
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

