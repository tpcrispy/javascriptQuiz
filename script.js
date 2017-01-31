//...........LOGIC FOR GAME......................
var logicModule = (function (dispCont) {
  var allQuestions = [];
  addQuestions = function(question, answers, correct){
    allQuestions.push({
      question: question,
      answers: answers,
      correct: correct
    });
  }
  correctAnswer = function(correct, random) {
    var check = allQuestions[random].correct;
    if (correct === check) {
      console.log('WINNER');
        startGame();
    } else {
      console.log('LOSER');
    }
  }
//PUBLIC TO CONTROLLER
  return {
    allQuestions: allQuestions,
    addQuestions: addQuestions,
    correctAnswer:  correctAnswer,
  };
})(displayModule);

//QUESTIONS:
logicModule.addQuestions('Will this Work', ['yes', 'no', 'I don\'t know!'], 0);
logicModule.addQuestions('Who is better, Thomas or Samathana', ['They are both awesome', 'Samantha', 'Thomas'], 0);
logicModule.addQuestions('Is Thomas Awesome', ['yes', 'no', 'I don\'t know!'], 0);
logicModule.addQuestions('Will this Work now', ['yes', 'no', 'I don\'t know!'], 0);


//.............DISPLAYING GAME.....................
var displayModule = (function (logiCont) {
  //DISPLAYS QUESTIONS TO THE SCREEEN
  startGame = function(){
    //generating the randomNumber:
    var randomNumber = (Math.floor((Math.random()*logiCont.allQuestions.length)));
        //setting up the DOM elements
         var questionH1 = document.querySelector('h1');
         var answersUL = document.querySelector('ul');
         answersUL.innerHTML  = '';
         questionH1.innerHTML = '';
         //display the question inside of the h1 tag
         questionH1.textContent = logiCont.allQuestions[randomNumber].question;
         //displaying the questions as a li object inside of an UL
         for (var i = 0; i < logiCont.allQuestions[randomNumber].answers.length; i++) {
          var answerLI = document.createElement('li');
          //giving each li an ID
          answerLI.id = i;
          answerLI.textContent = logiCont.allQuestions[randomNumber].answers[i];
          //applyig choicebutton() to li
          answerLI.appendChild(createChoiceButton());
          answersUL.appendChild(answerLI);
}
    eventLister(randomNumber);
  }
  //....CREATES CHOICE BUTTON
  createChoiceButton = function () {
    var choiceButton = document.createElement('button');
    choiceButton.textContent = 'Pick me!';
    choiceButton.className = 'choiceButton';
    return choiceButton;
  }

  //GETS WHAT CLICKED ON SCREEN
  eventLister = function(randomNumber){
    var answersUL = document.querySelector('ul');
    answersUL.addEventListener("click", function(){
      var clicked = window.event.target;
      if( clicked.className === 'choiceButton') {
         choice = parseInt(clicked.parentNode.id);
      //  console.log(choice);
        //return choice;
        logiCont.correctAnswer(choice, randomNumber);
      }
    });
  }

  return {
    eventLister: eventLister,
    startGame: startGame
  }

})(logicModule);

displayModule.startGame();
