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
        highScoresList.textContent = "No high scores available.";
        return;
    }

    // Sort scores in descending order
    scores.sort((a, b) => b.score - a.score);

    // Display high scores
    scores.forEach(function (user, index) {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.initials} - ${user.score} seconds `;

        // Add crown to the user with the highest score
        if (index === 0) {
            const crownIcon = document.createElement("i");
            crownIcon.classList.add("fa-solid", "fa-crown");
            listItem.appendChild(crownIcon);
        }

        highScoresList.appendChild(listItem);
    });
}
