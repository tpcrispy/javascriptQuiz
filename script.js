

function Question(questions, answers, correct) {
  this.questions = questions;
  this.answers = answers;
  this.correct = correct;
}

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

var allQuestions = [q1, q2, q3];

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

function continueGame() {
  var randomNumber = Math.floor((Math.random() * allQuestions.length));
  allQuestions[randomNumber].logQuestion();

  var alertAnswer = prompt('What\'s your answer?');

  if(alertAnswer !== 'exit'){
    allQuestions[randomNumber].checkAnswer(parseInt(alertAnswer), keepScore);
    continueGame();
  }
}

continueGame();
