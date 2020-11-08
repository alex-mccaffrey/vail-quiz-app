const qAndA = [
    {id: cuid(), question: "What is the total skiable acreage on Vail Mountain?", 
        answers: ["4,380 acres", "6,295 acres", "5,317 acres", "3,683 acres"]},
    {id: cuid(), question: "What is the total number of official trails on Vail Mountain?", 
        answers: ["195", "243", "156", "117"]},
    {id: cuid(), question: "How many lifts are at Vail Mountain?", 
        answers: ["22", "31", "38", "27"]},
    {id: cuid(), question: "What is the peak (highest) elevation on Vail Mountain?", 
        answers: ["10,358", "12,210", "9,760", "11,570"]},
    {id: cuid(), question: "How long is the longest run on Vail Mountain?", 
        answers: ["4 miles", "3.2 miles", "1.4 miles", "5 miles"]}
]

function userClicksStart() {
    //listen for user to click Start button
    //when button is clicked, hide the button and load first question
}

function loadQuestion () {
    //load the next question in the question array
}

function loadAnswerChoices () {
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