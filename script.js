
var  questionList = {
   allQuestions: [],
   addQuestions: function(questions, answers, correct){
     this.allQuestions.push({
       questions: questions,
       answers: answers,
       correct: correct
     });
   },
   displayQuestions: function(randomNumber){
     questionList.setUpEventlistners(randomNumber);
      var questionH1 = document.querySelector('h1');
      var answersUL = document.querySelector('ul');
      answersUL.innerHTML  = '';
      questionH1.innerHTML = '';

      questionH1.textContent = this.allQuestions[randomNumber].questions;

      for (var i = 0; i < questionList.allQuestions[randomNumber].answers.length; i++) {
       var answerLI = document.createElement('li');
       answerLI.id = i;
       answerLI.textContent = this.allQuestions[randomNumber].answers[i];
       answerLI.appendChild(this.createChoiceButton());
       answersUL.appendChild(answerLI);
     }
     //questionList.continueGame(randomNumber);
   },
   createChoiceButton: function () {
     var choiceButton = document.createElement('button');
     choiceButton.textContent = 'Pick me!';
     choiceButton.className = 'choiceButton';
     return choiceButton;

   },
   checkAnswer: function(choice, randomNumber, callback){
     var sc;
     var random =  randomNumber();

    var checkAnswer = this.allQuestions[randomNumber].correct;
     if (choice === checkAnswer) {
      sc = callback(true);
     } else {
       sc = callback(false);
     }
     questionList.displayScore(sc);
     questionList.getRandomQuestion(random);
   },
   continueGame: function() {
     var keepRandomNumber = Math.floor((Math.random() * this.allQuestions.length));
     this.displayQuestions(keepRandomNumber);

   },
   displayScore: function (score) {
    console.clear();
    console.log("Your current score is: " + score);
    console.log('---------------------------------');
  },
  setUpEventlistners: function (randomNumber, keepScore) {
  //  debugger;
    var answerssUL = document.querySelector('ul');
    answerssUL.addEventListener("click", function(e){
      var clicked = e.target;
      console.log(e.target);
      if( clicked.className === 'choiceButton') {
         choice = parseInt(e.target.parentNode.id);
         console.log(choice);
        //console.log(choice);
        questionList.checkAnswer(choice, randomNumber, keepScore);

      }

    });

  },
  checkAnswer: function(choice, randomNumber, callback){
     var sc;
    var checkAnswer = this.allQuestions[randomNumber].correct;
     if (choice === checkAnswer) {
       console.log('WINNER');
      sc = callback(true);
     } else {
       console.log('WRONG');
       sc = callback(false);
     }
     questionList.displayScore(sc);
     questionList.continueGame();
   },
}

questionList.addQuestions('Is Thomas awesome?', ['yes', 'no'], 0);
questionList.addQuestions('Does my Internet Suck', ['yes', 'no'], 0);
questionList.addQuestions('Will this work?', ['yes', 'no', 'Maybe'], 2);
questionList.addQuestions('Which Framework is better?', ['React.js', 'Angular', 'none, they each have their own strengths..'], 2);
questionList.addQuestions('pick a number?', ['yes', 'no', 'Maybe'], 1);
questionList.addQuestions('is this even a question you can answer?', ['yes', 'no', 'Maybe'], 2);


var view = {

}



function score(){
  var sc = 0;
  return function(correct) {
    if(correct) {
      sc++;
    }
    return sc;
  }
}
var keepScore = score();



questionList.continueGame();
