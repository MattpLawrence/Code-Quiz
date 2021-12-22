var questionEl = $('#question');
var answerEl = $('#answer');
var btnStart = $('#start');
var nameInput = $('#nameInput');
var initialEl = $('.initial');
var headerEl = $('#header');
var formEl =$('#quiz');
var usedQuestions = [];// create array to catch used questions
var scoreContainer = $('<div>').attr({id:'scoreContainer', class:'quizPage'});
var rightWrong = $('<h1>').attr({id:'rightWrong', class:'quizPage'});
var scoreTotal = $('<h1>').attr({id:'scoreTotal', class:'quizPage'});
var questionTotal = $('<h1>').attr({id:'questionTotal', class:'quizPage'});
var rightCount = 0; //set to count right and wrong answers
var questionCount = 0;
var userName = $('<h3>')
var currentQuestion;// set as global variable to hold index number
var displayQuestion = $('<h2>').attr('class','quizPage');
var timerEl = $('<h2>');
var secondsLeft = 60; //set start time of 60 seconds
var chosenAnswer = "";
var answerA = $('<button/>').attr('class','btnAnswers quizPage');
var answerB = $('<button/>').attr('class','btnAnswers quizPage');
var answerC = $('<button/>').attr('class','btnAnswers quizPage');
var answerD = $('<button/>').attr('class','btnAnswers quizPage');
var answerListEl = $('<ul>');
var percent = 0;
var roundedPercent = 0;


function startQuiz(event){
  event.preventDefault(); // accept the inputs

    if (headerEl.children().length == 1){ //if on starting page          
      checkNameLength() ;// check to make sure the name entered is at least 3 characters.
  }  
}

function checkNameLength(){
  var alertNameLength = $('<h2>');
  //Check to make sure the input is filled out correctly
  if(nameInput.val().length < 3){ //check to see if string entered is at least 3 char length
    if(questionEl.children().length < 4){ //check to see if alert has already been issued.
      alertNameLength = $('<h2>')
      //set alert to make sure teh name is at least 3 char length
      alertNameLength.text('Please enter a name at least 3 characters long.').css('color','red').addClass('error-txt');
      console.log(alertNameLength.text());
      questionEl.append(alertNameLength);
      return;
    }
  }
  initialEl.css('display','none'); //hide the first screen
  hideNameAlert(); // hide name alert
  showUserName();//set user name and put on header
  startTimer(); //start 45 second timer
  chooseQuestion(); //select random question to be shown
}

function hideNameAlert() { 
  var errorLog = $('.error-txt');
  if(errorLog) {
    errorLog.remove();
  }
}


function showUserName(){
  userName.text("Current Competitor:   " + nameInput.val());
  headerEl.append(userName);
}

function startTimer(){
  
  timerEl.text("60 seconds."); //display start time
  headerEl.append(timerEl);
  
  setTime();

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--; // subtract one from itself
      timerEl.text(secondsLeft + " seconds." );
      headerEl.append(timerEl);
        if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        zeroSeconds();   
       }
    }, 1000);
  }
}

function zeroSeconds(){
  getFromStorage();
  removeQuizPage();
  showFinalPage();
}



function chooseQuestion(){
  currentQuestion = (Math.floor(Math.random() * myQuestions.length))// generate random
    if(!usedQuestions.includes(currentQuestion)){
      usedQuestions.push(currentQuestion);
      if(answerEl.children().length == 3){ //if this is the first question
        showQuestion();
      }
    } else if( usedQuestions.length == myQuestions.length){ //if all questions have been used then exit
      secondsLeft = 1;
      console.log('finished')
    }else{
      chooseQuestion();
    }
  
}


function showQuestion(){
  displayQuestion.text(myQuestions[currentQuestion].question);//get content from array
  questionEl.append(displayQuestion);
  showAnswers(); //show answer options
}

answerEl.append(answerListEl);

function showAnswers(){
    
  answerA.text("A: " + myQuestions[currentQuestion].answers.a).on('click',function(){chosenAnswer = "a";
  nextQuestion();});
  answerListEl.append(answerA);

  answerB.text("B: " + myQuestions[currentQuestion].answers.b).on('click',function(){chosenAnswer = "b";
  nextQuestion();});
  answerListEl.append(answerB);
  
  answerC.text("C: " + myQuestions[currentQuestion].answers.c).on('click',function(){chosenAnswer = "c";
  nextQuestion();});  
  answerListEl.append(answerC);
  
  answerD.text("D: " + myQuestions[currentQuestion].answers.d).on('click',function(){chosenAnswer = "d";
  nextQuestion();});;
  answerListEl.append(answerD);
}

function nextQuestion(){
  if( myQuestions[currentQuestion].correctAnswer != chosenAnswer){
    rightWrong.text("Wrong Answer!");
    answerEl.append(rightWrong);
    questionCount++ ;
    if(secondsLeft > 5){
      secondsLeft = secondsLeft - 5;
      console.log('more than');
    }else{
      console.log('less than');
      secondsLeft = 1;
    }
    updateScore();
    setNextQuestion();
    
  }else{
    rightWrong.text("Right Answer!")
    answerEl.append(rightWrong);
    rightCount++;
    questionCount++ ;
    updateScore();
    setNextQuestion();
    
  }
  //show scores
  scoreContainer.append(scoreTotal); 
  scoreContainer.append(questionTotal);
  answerEl.append(scoreContainer);
}

function updateScore(){
  scoreTotal.text(rightCount);
  scoreContainer.append(scoreTotal);
  questionTotal.text(questionCount);
  scoreContainer.append(questionTotal)
}

function setNextQuestion (){
  chooseQuestion(); //get new question

  displayQuestion.text(myQuestions[currentQuestion].question);
  questionEl.append(displayQuestion);

  answerA.text("A: " + myQuestions[currentQuestion].answers.a);
  answerListEl.append(answerA);

  answerB.text("B: " + myQuestions[currentQuestion].answers.b)
  answerListEl.append(answerB);

  answerC.text("C: " + myQuestions[currentQuestion].answers.c)
  answerListEl.append(answerC);

  answerD.text("D: " + myQuestions[currentQuestion].answers.d)
  answerListEl.append(answerD);
}
highScore = (localStorage.getItem("highScore"));
lastUserName = JSON.parse(localStorage.getItem("userName"));

//get and store all info from local storage
function getFromStorage(){

  localStorage.setItem("lastScore", JSON.stringify(rightCount)); //set score to local storage
    console.log(highScore);
 
  if (highScore == undefined){
    console.log('no score');
    localStorage.setItem("highScore",JSON.stringify(rightCount));
  }
  if(rightCount >= highScore){
    localStorage.setItem("highScore",JSON.stringify(rightCount));
    localStorage.setItem("userName", JSON.stringify(nameInput.val()));//push info to local stoage
    highScore = (localStorage.getItem("highScore"));
    lastUserName = JSON.parse(localStorage.getItem("userName"));
    console.log('new high score');
    console.log(rightCount);
    console.log(highScore);
  }else{
    console.log('else')
  }
  
}

// remove all dom elements from the quiz page to set for final page
function removeQuizPage(){
  var quizPage = $('.quizPage');
  quizPage.remove();
}


function showFinalPage (){
  //show final banner
  var lblFinalScore = $('<h2>').attr('class','finalPage label');
  var finalScore =$('<h2>').attr('class','finalPage score')
  var lblFinalTotal = $('<h2>').attr('class','finalPage label');
  var finalTotal = $('<h2>').attr('class','finalPage score');
  var finalPercentage = $('<h2>').attr({class: 'finalPage label' , id: "finalPercentage"});
  var lblHighScore = $('<h2>').attr('class','finalPage label highScore');
  var finalHighScore = $('<h2>').attr('class','finalPage  score');
  var lblUserName = $('<h2>').attr('class','finalPage   highScore label');
  var finalUserName = $('<h2>').attr('class','finalPage  score');
  var restartButton =$('<button>').attr('class',' finalPage restartButton');

  lblFinalScore.text('Congratulations ' + nameInput.val() +' on your score of:  ');
  questionEl.append(lblFinalScore);
  finalScore.text(rightCount);
  questionEl.append(finalScore);
  lblFinalTotal.text('Total number of questions attempted: ');
  questionEl.append(lblFinalTotal);
  finalTotal.text(questionCount);
  questionEl.append(finalTotal);
  //calculate then relate percentage correct
  calculatePercentage();
  finalPercentage.text("That's "+ roundedPercent + '% accuracy!');
  questionEl.append(finalPercentage);
  //check to see if you set the high score
  if(rightCount >= highScore){
    console.log("higher score");
    lblHighScore.text('You set the High Score!');
    questionEl.append(lblHighScore);
  }else{
    lblHighScore.text('The all time high score is: ');
    questionEl.append(lblHighScore);
    finalHighScore.text(highScore);
    questionEl.append(finalHighScore);
    lblUserName.text('The name of the highest scoring competitor is: ');
    questionEl.append(lblUserName);
    finalUserName.text(lastUserName);
    questionEl.append(finalUserName);
  }
  restartButton.text('Restart Quiz');
  questionEl.append(restartButton);
  restartButton.on('click', restartQuiz);
}

//clear final page and header content, bring back original css
function restartQuiz(){
  location.reload(); //refresh page
}

function percentage(partialValue, totalValue){
  percent = (100* partialValue) / totalValue;
  roundedPercent = Math.round(percent * 10) /10;// round down to one decimal point
  console.log(roundedPercent);
}

function calculatePercentage(){
  percentage(rightCount, questionCount);
}

formEl.on('submit', startQuiz);