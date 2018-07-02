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
      question: "A full 32% of the 78 million tons of plastic packaging produced annually is left to flow into our oceans. Which of the choices below illustrates the equivalent of that amount?",
      answers: [
        "Pouring one garbage truck of plastic into the ocean every minute",
        "Pouring one garbage truck of plastic into the ocean every second",
        "Pouring one garbage truck of plastic into the ocean every hour",
        "Pouring one garbage truck of plastic into the ocean every millisecond"
      ],
      correctAnswer: "a"
    },
    {
      question: "How much plastic waste gets dumped into the oceans every year?",
      answers: [
        "4.8 million metric tons",
        "3.5 million metric tons",
        "5.0 million metric tons",
        "4.1 million metric tons"
      ],
      correctAnswer: "a"
    },
    {
      question: "According to the New York Times, in which decade did global warming become public news in the USA?",
      answers: [
        "1970s",
        "1980s",
        "1990s",
        "2000s"
      ],
      correctAnswer: "b"
    },
    {
      question: "How many trees are cut down each day to produce toilet paper?",
      answers: [
        "15,000",
        "21,000",
        "27,000",
        "30,000"
      ],
      correctAnswer: "c"
    },
    {
      question: "Which of these major cities faced a water scarcity crisis in 2018? Measures were so extreme that citizens were showering standing over buckets to catch and re-use that water, recycling washing machine water, and limiting 'loo' flushes to once a day.",
      answers: [
        "London",
        "Cape Town",
        "Sydney",
        "tba"
      ],
      correctAnswer: "b"
    },
    {
      question: "Comparing the people in the city above to the average American, how many liters of water does a person from each country use per day?",
      answers: [
        "US: 302-378L vs. other: 250L",
        "US: 302-378L vs. other: 150L",
        "US: 302-378L vs. other: 100L",
        "US: 302-378L vs. other: 50L"
      ],
      correctAnswer: "d"
    }
  ];

  var right = 0;
  var wrong = 0;
  var blank = 0;
  var userGuesses = [];
  var correctAnswers = ["d", "c", "a", "a", "b", "c", "b", "d"];
  var counter = 10;



//____ FUNCTIONS_________________________________________________________________________
//Display questionnaire
//game includes:
    //timer ticking down for full quiz & it auto calls done function when timer runs out.
    //list of questions.
      //answer choices for each question.
        //selecting only one answer per question using radio button.
    //done button to click if user finishes before time's up.
  
  
  //Timer
  function countdown () {
  counter--;
  $("#counter").html("You have: " + counter + " seconds left!");
  $("#counter").append("<br>");

  if (counter === 0 ) {
    $("#counter").hide();
    showResults();
  }

  console.log("COUNTER: " + counter);
  };


  function game () {

    $("#start").hide(); // hide the start button upon clicking.
    $("#done").show();  // show the done button when the questions visible.

    setInterval(countdown, 1000);//make endScreen show after 120 seconds.
    

    // display questions in HTML.
    for (var i = 0; i < myQuestions.length; i++) {
      $("#game").append("<h2>" + myQuestions[i].question + "</h2>");
      $("h2").addClass("question");
      

      // make a radial button for every answer choice for each of the questions.
      for (var j = 0; j < myQuestions[i].answers.length; j++) {
    
        $("#game").append("<input type= 'radio' name ='question-" + i + " ' value ='" + myQuestions[i].answers[j] + "''>" + myQuestions[i].answers[j] );

        // push the user's guess into the userGuesses array.
        $("<input>").on("click", function() {
          userGuesses.push(myQuestions[i].answers);
          console.log("button value: " + myQuestions[i].answers);

        });

        $("#game").append("<br>");
      }

      $("#game").append("<br>");
    }
  };

  


//When "done" button hit or timeout, we want a function to:
    //record number of correct and incorrect guesses and number of unanswered questions.
    //check if user's answer matches up with correct answer, for each question (for loop).
    //calculate and print number of correct, incorrect, and unanswered.
    
    function showResults() {

      $("#done").hide();
      $("#game").hide();
      $("#endScreen").show();
      
      for (var k = 0; k < correctAnswers.length; k++) {

        if (userGuesses[k] === correctAnswers[k]) {
          rkght++;
          $("#rkght").text("Correct Answers:" + right);
        }

        else if (userGuesses[k] !== correctAnswers[k]) {
          wrong++;
          $("#wrong").text("Wrong Answers:" + wrong);
        }

        else {
          blank++;
          $("#blank").text("Unanswered:" + blank);
        }
      }
    }

  
//GAME LOGIC/SEQUENCE_________________________________________________________________________

  //hide button until needed.
  $("#done").hide();

  // click start to start the game.
  $("#start").on("click", function (startGame) {
    $("#game").html(myQuestions);
    game()
  });

  // show results when countdown reaches 0.
  if (counter === 0) {
    $("#game").hide();
    showResults();
  }

  // click done to see your results.
  $("#done").on("click", function () {
    $("#counter").hide();
    showResults();
  });
