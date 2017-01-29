

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

Question.prototype.checkAnswer = function (alert) {
  if(alert === this.correct) {
    console.log('Correct answer!');
  } else {
    console.log('wrong answer');
  }
}
var q1 = new Question('Is Thomas awesome?', ['yes', 'no'], 0);
var q2 = new Question('Who is more awesome out of Thomas or Samantha?', ['Samantha', 'Thomas', 'Other'], 1);
var q3 = new Question('Does this internet suck?', ['yes', 'no'], 0);

var allQuestions = [q1, q2, q3];


function continueGame() {
  var randomNumber = Math.floor((Math.random() * allQuestions.length));
  var alertAnswer = prompt('What\'s your answer?');

  allQuestions[randomNumber].logQuestion();
  if(alertAnswer !== 'exit'){
    allQuestions[randomNumber].checkAnswer(parseInt(alertAnswer));
    continueGame();
  }
}

continueGame();
