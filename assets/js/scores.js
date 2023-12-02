// DOM Elements
const highScoresList = document.getElementById("highscores");
const clearScoresButton = document.getElementById("clear");

// Load and display high scores
displayHighScores();

// Event listener for clear button
clearScoresButton.addEventListener("click", function () {
    // Clear high scores
    localStorage.removeItem("quizScores");
    // Reload and display high scores
    displayHighScores();
});


function displayHighScores() {
    // Get scores from local storage
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

    // Check for high scores
    if (scores.length === 0) {
        highScoresList.textContent = "No high scores available."
        return;
    }

    // Display high scores in descending order
    scores.forEach(function(user, index){
        const listItem = document.createElement("li");
        listItem.textContent = `${user.initials} - ${user.score} seconds`;
        highScoresList.appendChild(listItem);
    });
}
