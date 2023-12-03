// DOM Elements
const startButton = document.getElementById("start");
const questionsContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choicesList = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const timeDisplay = document.getElementById("time");
const endScreen = document.getElementById("end-screen");
const finalScoreDisplay = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");

// Variables to track quiz state
let currentQuestionIndex = 0;
let timePenalty = 10;
let time = timePenalty * questions.length;
let timerInterval;
let feedbackTimeout;

// Event listener for the start button
startButton.addEventListener("click", startQuiz);
// Event listener for choice buttons
choicesList.addEventListener("click", handleChoiceClick);
// Even listener for the submit button
submitButton.addEventListener("click", saveScore);
// Event listener for the Enter key
initialsInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        saveScore();
    }
});

// Function to start the quiz
function startQuiz() {

    // Hide the start-screen container
    startButton.parentElement.classList.add("hide");

    // Show the questions screen
    questionsContainer.classList.remove("hide");

    // Start playing the background music
    backgroundMusic.play();

    // Start the timer and update it every second
    timerInterval = setInterval(updateTimer, 100);

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
    choicesList.textContent = "";

    // Loop through each choice and create a new button element
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = `${index + 1}. ${choice}`;
        choicesList.appendChild(button);
    });
}

// Function to handle choice button click
function handleChoiceClick(event) {
    if (event.target.matches("button")) {
        const selectAnswerIndex = Array.from(choicesList.children).indexOf(event.target);
        checkAnswer(selectAnswerIndex);
    }
}

// Function to check the answer
function checkAnswer(selectAnswerIndex) {
    // Clear existing timeout
    clearTimeout(feedbackTimeout);

    // Get the current question from the array of questions using its index
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the selected answer matches the correct answer (true or false)
    const isCorrect = selectAnswerIndex === currentQuestion.correctAnswer;

    playAnswerSFX(isCorrect);

    // Display feedback
    displayFeedback(isCorrect);

    // If the answer is incorrect, subtract time
    if (!isCorrect) {
        time -= timePenalty;
        time = Math.max(0, time); // Ensure time doesn't go negative
        updateTimer();
    }
    // Update the current question index
    currentQuestionIndex++;

    // Display the next question or end the quiz
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }

    // Set a new timeout for hiding the feedback
    feedbackTimeout = setTimeout(() => {
        // Hide the feedback after displaying it
        feedbackElement.classList.add("hide");
    }, 2000); // 2 seconds feedback display
}

// Function to display feedback
function displayFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? "Correct!" : "Incorrect!";
    feedbackElement.classList.remove("hide");

    feedbackElement.classList.toggle("correct", isCorrect);
    feedbackElement.classList.toggle("incorrect", !isCorrect);
}

// Function to update the timer
function updateTimer() {
    if (time === 0) {
        endQuiz();
    } else {
        time = Math.max(0, time - 0.1); // Ensure time doesn't go negative
    }

    // Update time display text
    timeDisplay.textContent = Math.round(time);
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval); // Stop the timer
    initialsInput.value = "";
    questionsContainer.classList.add("hide");
    endScreen.classList.remove("hide");
    time = Math.round(time)

    // Start fading out the background music
    fadeOutBackgroundMusic();

    // Update the final score display
    finalScoreDisplay.textContent = time;
}

// Function to save the score
function saveScore() {
    const initials = initialsInput.value.toUpperCase();

    // Check if initials contain only letters
    if (!/^[A-Z]+$/.test(initials)) {
        alert("Please enter valid initials containing only letters.");
        return;
    }

    const scoreData = { initials, score: time };

    // Retrieve current scores from local storage or initialize an empty array
    let existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];

    // Ensure existingScores is an array
    if (!Array.isArray(existingScores)) {
        existingScores = [];
    }

    // Add the new score data to the array
    existingScores.push(scoreData);

    // Sort the scores in descending order
    existingScores.sort((a, b) => b.score - a.score);

    // Save the updated scores array back to local storage
    localStorage.setItem("quizScores", JSON.stringify(existingScores));

    // Redirect to the high scores page
    window.location.href = './highscores.html';
}
