const questions = [
    {
        title: "What does the 'DOM' stand for in JavaScript?",
        choices: [
            "Document Object Model",
            "Data Object Model",
            "Design Object Model",
            "Document Oriented Model"
        ],
        correctAnswer: 0, // Index of the correct answer in the choices array
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
    {
        title: "How do you comment in JavaScript?",
        choices: [
            "// This is a comment",
            "# This is a comment",
            "<!-- This is a comment -->",
            "/* This is a comment */"
        ],
        correctAnswer: 0,
    },
    {
        title: "Which function is used to print content to the console in JavaScript?",
        choices: [
            "console.print()",
            "console.log()",
            "print()",
            "log()"
        ],
        correctAnswer: 1,
    },
    {
        title: "What is the result of the expression 5 + '5' in JavaScript?",
        choices: [
            "10",
            "55",
            "Error",
            "undefined"
        ],
        correctAnswer: 1,
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: [
            "function: myFunction()",
            "create function myFunction()",
            "function myFunction()",
            "myFunction() => function"
        ],
        correctAnswer: 2,
    },
    {
        title: "What is the purpose of the 'return' statement in a function?",
        choices: [
            "To exit the function",
            "To return a value from the function",
            "To print something to the console",
            "To declare a variable"
        ],
        correctAnswer: 1,
    },
    {
        title: "Which operator is used for strict equality in JavaScript?",
        choices: [
            "==",
            "===",
            "!=",
            "!=="
        ],
        correctAnswer: 1,
    },
    {
        title: "What does the acronym 'JSON' stand for?",
        choices: [
            "JavaScript Object Notation",
            "Java Standard Object Notation",
            "JavaScript Oriented Notation",
            "Java Structured Object Notation"
        ],
        correctAnswer: 0,
    },
    {
        title: "How do you declare a constant variable in JavaScript?",
        choices: [
            "var",
            "let",
            "const",
            "final"
        ],
        correctAnswer: 2,
    },
    {
        title: "What is the purpose of the 'addEventListener' method?",
        choices: [
            "To remove an event listener",
            "To add a new event listener",
            "To check for events in the console",
            "To update the DOM"
        ],
        correctAnswer: 1,
    },
    {
        title: "Which method is used to remove the last element from an array in JavaScript?",
        choices: [
            "pop()",
            "shift()",
            "remove()",
            "delete()"
        ],
        correctAnswer: 0,
    },
    {
        title: "What does the 'NaN' stand for in JavaScript?",
        choices: [
            "Not a Number",
            "No Action Needed",
            "Null and None",
            "Numeric Algorithm"
        ],
        correctAnswer: 0,
    },
    {
        title: "What is the purpose of the 'fetch' API in JavaScript?",
        choices: [
            "To fetch coffee",
            "To fetch data from a server",
            "To fetch elements from the DOM",
            "To fetch images"
        ],
        correctAnswer: 1,
    },
    {
        title: "What is the purpose of the 'localStorage' in JavaScript?",
        choices: [
            "To store cookies",
            "To store temporary data",
            "To store data permanently",
            "To store session data"
        ],
        correctAnswer: 2,
    },
    {
        title: "Which keyword is used to prevent the execution of a loop in JavaScript?",
        choices: [
            "break",
            "exit",
            "skip",
            "stop"
        ],
        correctAnswer: 0,
    },
    {
        title: "What is the purpose of the 'this' keyword in JavaScript?",
        choices: [
            "To reference the current function",
            "To reference the global object",
            "To reference the parent object",
            "To reference the current instance"
        ],
        correctAnswer: 3,
    },
    {
        title: "How do you check the length of an array in JavaScript?",
        choices: [
            "array.size",
            "array.length",
            "length(array)",
            "getSize(array)"
        ],
        correctAnswer: 1,
    },
    {
        title: "Which built-in object is used for mathematical operations in JavaScript?",
        choices: [
            "Math",
            "Calc",
            "Numeric",
            "Arithmetic"
        ],
        correctAnswer: 0,
    },
    {
        title: "What is the purpose of the 'push' method for arrays in JavaScript?",
        choices: [
            "To remove the last element",
            "To add a new element to the beginning",
            "To add a new element to the end",
            "To reverse the order of elements"
        ],
        correctAnswer: 2,
    },
    {
        title: "How do you check if a variable is an array in JavaScript?",
        choices: [
            "isArray(variable)",
            "variable.isArray()",
            "isTypeOf(variable, 'array')",
            "Array.check(variable)"
        ],
        correctAnswer: 0,
    },
    {
        title: "What is the purpose of the 'setTimeout' function in JavaScript?",
        choices: [
            "To set the time on the computer",
            "To create a delay before executing a function",
            "To repeat a function at regular intervals",
            "To check the execution time of a function"
        ],
        correctAnswer: 1,
    },
    {
        title: "What is the purpose of the 'querySelector' method in JavaScript?",
        choices: [
            "To select the first element that matches a specified CSS selector",
            "To select all elements that match a specified CSS selector",
            "To select the parent element of a specified element",
            "To select elements based on their class names"
        ],
        correctAnswer: 0,
    },
    {
        title: "Which JavaScript method is used to join elements of an array into a string?",
        choices: [
            "concat()",
            "merge()",
            "join()",
            "combine()"
        ],
        correctAnswer: 2,
    },
    {
        title: "What does the 'event.preventDefault()' method do?",
        choices: [
            "Stops the event from bubbling up the DOM",
            "Prevents the default behavior of the event",
            "Cancels the event if it is cancelable",
            "Pauses the event execution"
        ],
        correctAnswer: 1,
    },
    {
        title: "How do you convert a string to an integer in JavaScript?",
        choices: [
            "parseInt()",
            "stringToInteger()",
            "convertToInteger()",
            "toInteger()"
        ],
        correctAnswer: 0,
    },
    {
        title: "What is the purpose of the 'Object.keys()' method in JavaScript?",
        choices: [
            "To return an array of a given object's property names",
            "To return an array of a given object's property values",
            "To delete a property from an object",
            "To check if a property exists in an object"
        ],
        correctAnswer: 0,
    },
    {
        title: "How do you select an HTML element by its ID in JavaScript?",
        choices: [
            "getElementByClass()",
            "selectById()",
            "getElementById()",
            "querySelector()"
        ],
        correctAnswer: 2,
    },
    {
        title: "What does the 'innerHTML' property in JavaScript allow you to do?",
        choices: [
            "Change the element's text content",
            "Append a new element to the document",
            "Access the element's attributes",
            "Manipulate the HTML content within an element",
        ],
        correctAnswer: 3,
    },
    {
        title: "How do you add a new HTML element to the DOM using JavaScript?",
        choices: [
            "createElement() and appendChild()",
            "createNode() and attachNode()",
            "newElement() and insertElement()",
            "addHTML() and insertDOM()"
        ],
        correctAnswer: 0,
    },
];

// select questions and answers by index [n] and keys
// questions[0].title = the question title
// questions[0].choices = an array of choices for the question
// questions[0].correctAnswer = the index of the correct answer
