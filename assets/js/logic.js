// DOM Elements
const startButton = document.getElementById("start");
const questionsContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const timeDisplay = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const finalScoreDisplay = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

// Variables to track quiz state
let currentQuestionIndex = 0;

// Event listener for the start button
startButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {

    //Hide the start-screen container
    startButton.parentElement.classList.add("hide");

    //Show the questions screen
    questionsContainer.classList.remove("hide");

    // Display the first question
    displayQuestion();
}

// Function to display a question
function displayQuestion() {
    // Get the current question from the array of questions using its index
    const currentQuestion = questions[currentQuestionIndex];

    // Display question title
    questionTitle.textContent = currentQuestion.title;

    // Clear any existing choice elements
    choicesContainer.textContent = "";

    // Loop through each choice and create a new button element
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = `${index + 1}. ${choice}`;
        choicesContainer.appendChild(button);
    });
}
