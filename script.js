
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
     var promptAnswer = parseInt(prompt('What\'s your Answer?'));
     this.checkAnswer(promptAnswer, randomNumber);
   },
   getRandomQuestion: function(){
    // debugger;
     var randomNumber = Math.floor((Math.random() * this.allQuestions.length));
     this.displayQuestions(randomNumber);
   },
   checkAnswer: function(promptAnswer, randomNumber){
    var checkAnswer = this.allQuestions[randomNumber].correct;
     if (promptAnswer === checkAnswer) {
       console.log('WINNER');
     } else {
       console.log('WRONG');
     }

   }
}



questionList.addQuestions('Is Thomas awesome?', ['yes', 'no'], 0);
questionList.addQuestions('Does my Internet Suck', ['yes', 'no'], 0);
questionList.addQuestions('Will this work?', ['yes', 'no', 'Maybe'], 2);
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
