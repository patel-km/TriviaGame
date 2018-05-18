//Home screen

var myQuestions = [
    {
      question: "If the entire world lived like the average American, how many planets would we need to provide enough resources?",
      answers: {
        a: "1/3 planet",
        b: "1/2 planet",
        c: "1 planet",
        d: "5 planets",
      },
      correctAnswer: "d"
    },
    {
      question: "A glass bottle can take up to how many years to decompose?",
      answers: {
        a: "100",
        b: "1000",
        c: "4000",
        d: "6000",
      },
      correctAnswer: "c"
    },
    {
      question: "A full 32% of the 78 million tons of plastic packaging produced annually is left to flow into our oceans. Which of the below illustrates the equivalent of that amount?",
      answers: {
        a: "Pouring one garbage truck of plastic into the ocean every minute",
        b: "tba",
        c: "tba",
        d: "tba"
      },
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: {
        a: "tba",
        b: "tba",
        c: "tba",
        d: "tba"
      },
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: {
        a: "tba",
        b: "tba",
        c: "tba",
        d: "tba"
      },
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: {
        a: "tba",
        b: "tba",
        c: "tba",
        d: "tba"
      },
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: {
        a: "tba",
        b: "tba",
        c: "tba",
        d: "tba"
      },
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: {
        a: "tba",
        b: "tba",
        c: "tba",
        d: "tba"
      },
      correctAnswer: "a"
    }
  ];

  var right = 0;
  var wrong = 0;
  var blank = 0;
  var userGuesses = [];
  var correctAnswers = [];


  //click start to start the game
  $("#start").on("click", function (startGame) {
    $("#game").html(myQuestions);

    
  });

  //make endScreen show after 120 seconds
  setTimeout(startGame, 120000);

  

  //Display questionnaire
  //let user select ONE answer for each question
  // function game () {
  //   $("#done").visibility("visible");
  //   $("#game").text(myQuestions);

  //   for (j = 0; j < answers.size; j++) {
  //     //make it a radial button
      

  //   }

  // } 
  

  

  //game includes:
      //timer ticking down for full quiz (maybe 120 sec) so it auto calls done function when timer runs out
      //list of questions
      //answer choices for each question
      //selecting only one answer per question using radio button
      //done button to click if user finishes before time's up
      
      


  //When "done" hit or timeout, we want a function to:

    //record number of correct and incorrect guesses and number of unanswered questions

    //check if user's answer matches up with correct answer, for each question (for loop)

    //calculate and print number of correct, incorrect, and unanswered
  function showResults() {
    
    for (var i = 0; i < myQuestions.length; i++) {
      $("").____(myQuestions[i]);
      if (userAnswer === correctAnswer) {
        right++;
        $("#right").text("Correct Answers:" + right);
      }
      else if (userAnswer !== correctAnswer) {
        wrong++;
        $("#wrong").text("Wrong Answers:" + wrong);
      }
      else {
        blank++;
        $("#blank").text("Unanswered:" + blank);
      }
    }
  }

  //Display endscreen
  $("#done").on("click", showResults());
    