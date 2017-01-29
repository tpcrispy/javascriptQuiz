
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
     console.log(this.allQuestions[randomNumber].questions);
     this.allQuestions[randomNumber].answers.forEach(function(ele, index){
       console.log(index + ':' + ' ' + ele);
     });
     questionList.continueGame(randomNumber);
   },
   getRandomQuestion: function(){
     var randomNumber = Math.floor((Math.random() * this.allQuestions.length));
     this.displayQuestions(randomNumber);
   },
   checkAnswer: function(promptAnswer, randomNumber, callback){
     var sc;
    var checkAnswer = this.allQuestions[randomNumber].correct;
     if (promptAnswer === checkAnswer) {
       console.log('WINNER');
      sc = callback(true);
     } else {
       console.log('WRONG');
       sc = callback(false);
     }
     questionList.displayScore(sc);
     questionList.getRandomQuestion();
   },
   continueGame: function(randomNumber) {
       var promptAnswer = prompt('What\'s your Answer?');
       if (promptAnswer !== 'exit'){
         promptAnswer = parseInt(promptAnswer);
         this.checkAnswer(promptAnswer, randomNumber, keepScore);
       }
   },
   displayScore: function (score) {
     console.clear();

   console.log("Your current score is: " + score);
   console.log('---------------------------------');
   }
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


questionList.addQuestions('Is Thomas awesome?', ['yes', 'no'], 0);
questionList.addQuestions('Does my Internet Suck', ['yes', 'no'], 0);
questionList.addQuestions('Will this work?', ['yes', 'no', 'Maybe'], 2);
questionList.addQuestions('What Framework is better?', ['React.js', 'Angular', 'none, they each have their own strengths..'], 2);
questionList.addQuestions('pick a number?', ['yes', 'no', 'Maybe'], 1);
questionList.addQuestions('is this even a question you can answer?', ['yes', 'no', 'Maybe'], 2);


questionList.getRandomQuestion();



/*
Question.prototype.logQuestion = function () {
  console.log(this.questions);
    this.answers.forEach(function(i, index) {
    console.log(index + ':' + ' ' + i);
  });
}

Question.prototype.checkAnswer = function (alert, callback) {
  var sc;
  if(alert === this.correct) {
    console.log('Correct answer!');
    sc = callback(true);
  } else {
    console.log('wrong answer');
    sc = callback(false);
  }
  this.displayScore(sc);
}
Question.prototype.displayScore = function (score) {
console.log("Your current score is: " + score);
console.log('---------------------------------');
};


var q1 = new Question('Is Thomas awesome?', ['yes', 'no'], 0);
var q2 = new Question('Who is more awesome out of Thomas or Samantha?', ['Samantha', 'Thomas', 'Other'], 1);
var q3 = new Question('Does this internet suck?', ['yes', 'no'], 0);




function continueGame() {
  var randomNumber = Math.floor((Math.random() * allQuestions.length));
  allQuestions[randomNumber].logQuestion();

  var alertAnswer = prompt('What\'s your answer?');

  if(alertAnswer !== 'exit'){
    allQuestions[randomNumber].checkAnswer(parseInt(alertAnswer), keepScore);
    continueGame();
  }
}

//continueGame();
var view = {
  displayAnswers: function(){
    var answersUL = document.querySelector('ul');
    answersUL.innerHTML = '';
    allQuestions.forEach(function(ele, index, arr){
      var answerLI = document.createElement('li');
      answerLI.id = index;
      answerLI.textContent = ele;
      answersUL.appendChild(answerLI);

    });
      }
    }
*/
