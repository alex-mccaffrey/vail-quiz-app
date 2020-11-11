  /**
   *
   * Your app should include a render() function, that regenerates
   * the view each time the store is updated. See your course
   * material, consult your instructor, and reference the slides
   * for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   */ 



const store = {
    questions: [
    {question: "What is the total skiable acreage on Vail Mountain?", 
        answers: ["4,380 acres", "6,295 acres", "5,317 acres", "3,683 acres"],
        correctAnswer: "5,317 acres"},
    {question: "What is the total number of named trails on Vail Mountain?", 
        answers: ["195", "243", "156", "117"],
        correctAnswer: "195"},
    {question: "How many lifts are at Vail Mountain?", 
        answers: ["22", "31", "38", "27"],
        correctAnswer: "31"},
    {question: "What is the peak (highest) elevation on Vail Mountain?", 
        answers: ["10,358", "12,210", "9,760", "11,570"],
        correctAnswer: "11,570"},
    {question: "How long is the longest run on Vail Mountain?", 
        answers: ["4 miles", "3.2 miles", "1.4 miles", "5 miles"],
        correctAnswer: "4 miles"},
    {question: "What is the average annual snowfall?",
        answers: ["282", "354", "420", "391"],
        correctAnswer: "354"}
    ],
    questionNumber: 0,
    score: 0,
    quizStarted: false,
    submittingAnswer: false
};


//****** HTML functions ******//

function welcomePageHtml() {
    return `
    <div class="welcome">
        <h3>Welcome!</h3>
        <form>
        <p>Welcome to the Vail Quiz App. This quiz will test your knowledge about Vail Mountain in Colorado.</p>
           <p> Click the 'Start' button below to get started.</p>
        <button type="submit" id="start">Start Quiz</button>
        </form>
     </div>
     `;
}


function questionAnswerHtml() {
    return `
        <div class="questionAndAnswers">
        <p>Question ${currentQuestion().index} out of ${store.questions.length}</p>
        <p>Score: ${store.score} / ${store.questions.length}</p>
        <br>
            ${currentQuestion().questionTotal.question}
        <br>
            <form>
            <ul>
                ${currentAnswerChoices()}
            </ul>
            <br>
                  <button type="submit" class="submit-answer">Submit</button>
             </form>
        </div>
        `;
}

function answerResultHtml() {
    if (guessCorrect() === true){
    return `
        <div class="answer-results">
        <form> 
        <p>You are Correct!</p>
        <button type="button" class="next-question">Next</button>
        </form>
        </div>`;
    }

    else {
    return `
        <div class="answer-results">
        <form>
        <p>You are incorrect. The correct answer is ${currentQuestion().questionTotal.correctAnswer}</p>
        <button type="button" class="next-question">Next</button>
        </form>
        </div>`; 
    }
}


function resultsPageHtml() {
    return `
        <div class="results-page">
        <h3>Congrats! You have completed the Vail Quiz!</h3>
        <p>Your score is ${store.score} out of ${store.questions.length}!</p>
        <button class="restart-quiz">Restart Quiz</button>
        </div>
    `;
}


//***** Action functions */

function addToScore() {
    if (guessCorrect() === true) {
        store.score++;
    }
}

 
function guessCorrect() {
    let isCorrect = false;
    let correctAnswer = currentQuestion().questionTotal.correctAnswer;
    let selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === correctAnswer){
        isCorrect= true;
        store.submittingAnswer = true;
        return isCorrect;
    }
    else {
        store.submittingAnswer = true;
        return isCorrect;
    }
};


function getSelectedAnswer() {
    let selected= $("input[type='radio'][name='answerOptions']:checked");
    let selectedAnswer="";
    if (selected.length > 0) {
        selectedAnswer = selected.val();
    } 
    return selectedAnswer;
}

function currentQuestion () {
    let index = store.questionNumber;
    let currentQuestion = store.questions[index];
    return {index: index +1, questionTotal: currentQuestion};
}


function currentAnswerChoices() {
        let answerList = "";
        for(let i of currentQuestion().questionTotal.answers) {
            answerList += `<li>
            <input type="radio" name="answerOptions" value="${i}"> ${i} </input>
            </li>`;
        }
        return answerList;
}


function nextQuestion() {
    store.submittingAnswer = false;
    store.questionNumber ++;
}



// ***** Click functions ****** //

function userClicksStart() {
    $('main').on('click', '#start', function (event) {
        event.preventDefault();
        store.quizStarted = true;
        renderQuiz();
    });
}

function userClicksNext() {
    $('main').on('click', '.next-question', event => {
    event.preventDefault();
    nextQuestion();
    renderQuiz();
});
}

function submitAnswer () {
    $("main").on('click', '.submit-answer', event => {
        event.preventDefault();
        getSelectedAnswer();
        addToScore();
        answerResultHtml();
        renderQuiz();
    });
}

function userClicksRestart() {
    $('main').on('click', '.restart-quiz', event => {
        event.preventDefault();
        restartQuiz();
        renderQuiz();
    })
}
  
function restartQuiz() {
    store.quizStarted = false;
    store.questionNumber = 0;
    store.submittingAnswer = false;
    store.score = 0;
}


//***** Render Quiz ******//

function renderQuiz() {
    let html = "";
    if (store.quizStarted === false) {
       html = $('main').html(welcomePageHtml());
       store.questionNumber = -1;
       return html;
    }
    else if (store.questionNumber < store.questions.length) {
            if (store.submittingAnswer === false){
        html = $('main').html(questionAnswerHtml());
            }
            else {
                html = $('main').html(answerResultHtml());
            }
        return html;
        }
    else {
        html = $('main').html(resultsPageHtml());
    }
}





function runQuizApp() {
    renderQuiz ();
    userClicksStart();
    submitAnswer();
    userClicksNext();
    nextQuestion();
    userClicksRestart();
}

$(runQuizApp);