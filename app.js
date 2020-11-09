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
    quizStarted: false
};


//HTML functions

function welcomePageHtml() {
    //load start page page with welcome message and start button
    console.log("welcome page ran");
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
    console.log('q and a content ran');
    return `
        <div class="questionAndAnswers">
        <p>Question ${store.currentQuestion +1} out of ${store.questions.length}</p>
        <p>Score: ${store.score} / ${store.questions.length}</p>
        <br>
            ${currentQuestion}
        <br>
            <form>
                 ${currentAnswerChoices}
            <br>
                  <button type="submit" class="submit-answer">Submit</button>
             </form>
        </div>
        `;
}


function validateSelectionHtml() {
    return `
        <div class="questionAndAnswers">
        <p>Question $(store.currentQuestion +1) out of $(store.questions.length)</p>
        <p>Score: $(store.score) / $(store.questions.length)</p>
        <br>
            $(currentQuestion)
        <br>
            <form>
                 $(currentAnswerChoices)
            <br>
                  <button type="button" class="next-answer">Next</button>
             </form>
        </div>
        `;
}





function resultsPageHtml() {
    console.log('results page ran');
    return `
        <div class="reults">
        <h3>Congrats! You have completed the Vail Quiz!</h3>
        <p>Your score is $(store.score) out of $(store.questions.length)!</p>
        <button type="submit" id="restart-quiz">Restart Quiz</button>
    `;
}



function userClicksStart() {
    //listen for user to click Start button
    //when button is clicked, quizStarted=true, load questionAnswerHtml
    $('main').on('click', '#start', function (event) {
        console.log('start button clicked');
        event.preventDefault();
        store.quizStarted = true;
        renderQuiz();
    });
}

function currentQuestion () {
    //load the next question in the question array
}

function currentAnswerChoices () {
    // gather answers that are associated with the relative question
    //load the 4 answer choices as list items
}

function submitAnswer () {
    //listen for user to click submit button
    //if answer matches, display answer is correct
    //if the answer is wrong, display the correct answer
    //hide submit button, load next button
}

function nextQuestion () {
    //listen for use to click next button
    //run loadQuestion function
}

function results () {
    //display the number of correct answers
    //display restart quiz button
}

function restartQuiz () {
    //listen for user to click restart button
    //when button is clicked, load first question/answer
    //clear score and question number
}

function currentScore () {
    //if user gets questions correct, add one to the score
    //update total score with number of questions submitted
}

function currentQuestion () {
    //start at 1 out of length of questions
    //add one each time user clicks next
}


function renderQuiz() {
    let html = "";
    if (store.quizStarted === false) {
        console.log('quiz not started');
       html = $('main').html(welcomePageHtml());
       return html;
    }
    else if (store.quizStarted === true) {
        console.log('quiz started');
        html = $('main').html(questionAnswerHtml());
        return html;
    }
    else {
        console.log("quiz ended");
        html = $('main').html(resultsPageHtml());
        return html;
    };
}



function runQuizApp() {
    renderQuiz ();
    userClicksStart();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(runQuizApp);