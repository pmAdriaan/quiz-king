const questions = [
    {
        title: "What is the correct way to declare a variable in JavaScript?",
        choices: [
            "var x = 5;",
            "variable x = 5;",
            "let x = 5;",
            "const x = 5;"
        ],
        correctAnswer: 2, // Index of the correct answer in the choices array
    },
    {
        title: "What does the 'DOM' stand for in JavaScript?",
        choices: [
            "Document Object Model",
            "Data Object Model",
            "Design Object Model",
            "Document Oriented Model"
        ],
        correctAnswer: 0,
    },
    {
        title: "What is the purpose of the 'typeof' operator in JavaScript?",
        choices: [
            "It checks if a variable is defined.",
            "It returns the data type of a variable.",
            "It converts a variable to a boolean type.",
            "It creates a new variable."
        ],
        correctAnswer: 1,
    },
];

// select questions and answers by index [n] and keys
// questions[0].title = the question title
// questions[0].choices = an array of choices for the question
// questions[0].correctAnswer = the index of the correct answer
