//Home screen

//___GLOBAL VARIABLES _________________________________________________________________________

var myQuestions = [
    {
      question: "If the entire world lived like the average American, how many planets would we need to provide enough resources?",
      answers: [
        "1/3 planet",
        "1/2 planet",
        "1 planet",
        "5 planets",
      ],
      correctAnswer: "d"
    },
    {
      question: "A glass bottle can take up to how many years to decompose?",
      answers: [
        "100",
        "1000",
        "4000",
        "6000",
      ],  
      correctAnswer: "c"
    },
    {
      question: "A full 32% of the 78 million tons of plastic packaging produced annually is left to flow into our oceans. Which of the below illustrates the equivalent of that amount?",
      answers: [
        "Pouring one garbage truck of plastic into the ocean every minute",
        "tba",
        "tba",
        "tba"
      ],
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: [
        "tba",
        "tba",
        "tba",
        "tba"
      ],
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: [
        "tba",
        "tba",
        "tba",
        "tba"
      ],
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: [
        "tba",
        "tba",
        "tba",
        "tba"
      ],
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: [
        "tba",
        "tba",
        "tba",
        "tba"
      ],
      correctAnswer: "a"
    },
    {
      question: "tba",
      answers: [
        "tba",
        "tba",
        "tba",
        "tba"
      ],
      correctAnswer: "a"
    }
  ];

  var right = 0;
  var wrong = 0;
  var blank = 0;
  var userGuesses = [];
  var correctAnswers = [];
  var counter = 120;



//_____________________ FUNCTIONS_________________________________________________________________________
//Display questionnaire
//game includes:
    //timer ticking down for full quiz & it auto calls done function when timer runs out
    //list of questions
      //answer choices for each question
        //selecting only one answer per question using radio button
    //done button to click if user finishes before time's up

  function game () {

    setInterval(countdown, 1000);//make endScreen show after 120 seconds

    // display questions in HTML
    for (var i = 0; i < myQuestions.length; i++) {
      $("#game").append("<h2>" + myQuestions[i].question + "</h2>");

      //make a radial button for every answer choice for each of the questions
      for (var j = 0; j < myQuestions[i].answers.length; j++) {
        console.log('radial button for loop');
        $("#game").append("<input type= 'radio' name ='question-" + i + " ' value ='" + myQuestions[i].answers[j] + "''>" + myQuestions[i].answers[j] );
      }
    }
  };

//Timer
  function countdown () {
    counter--;
    $("#counter").html("You have: " + counter + " seconds left!");
    // if (counter < 1) {
      //done function
    // }
    console.log("COUNTER: "+ counter);
  };

//When "done" button hit or timeout, we want a function to:
    //record number of correct and incorrect guesses and number of unanswered questions
    //check if user's answer matches up with correct answer, for each question (for loop)
    //calculate and print number of correct, incorrect, and unanswered
    
    // function showResults() {

    //   $.each($("input[name='question-0']:checked"), function(){
    //     if($(this))
    //   })
      
    //   for (var i = 0; i < myQuestions.length; i++) {
    //     $("").____(myQuestions[i]);
    //     if (userAnswer === correctAnswer) {
    //       right++;
    //       $("#right").text("Correct Answers:" + right);
    //     }
    //     else if (userAnswer !== correctAnswer) {
    //       wrong++;
    //       $("#wrong").text("Wrong Answers:" + wrong);
    //     }
    //     else {
    //       blank++;
    //       $("#blank").text("Unanswered:" + blank);
    //     }
    //   }
    // }

//_____________________ GAME LOGIC/PROCESS_________________________________________________________________________

  //click start to start the game

  $("#start").on("click", function (startGame) {
    $("#game").html(myQuestions);
    game();
    
  });


  

  // //Display endscreen
  // $("#done").on("click", showResults());