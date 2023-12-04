<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>QUIZ KING</h1>
<h3>◦ Quiz-King: Master the Art of Quizzing, One Code at a Time!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=&logo=css3&logoColor=white" alt="CSS3" />

</p>
<img src="https://img.shields.io/github/license/pmAdriaan/quiz-king?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/pmAdriaan/quiz-king?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/pmAdriaan/quiz-king?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/pmAdriaan/quiz-king?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#%EF%B8%8F-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running Quiz King](#-running-quiz-king)
    - [🌐 Live Demo Quiz King](#-live-demo-quiz-king)
    - [📸 Quiz King Screenshot ](#-quiz-king-screenshot)
- [🛣 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---


## 📍 Overview

Quiz King is a dynamic web-based application that provides an interactive, timed coding-related quiz experience. It includes engaging features such as background music, sound effects, and high score tracking. Users can answer questions, receive instant feedback, and submit their scores to a high scores page. The appealing aesthetic, made possible with CSS styling, enhances the user-friendly interface. The application persistently stores users' audio settings and scores, creating a personalized and competitive environment.

---

## 📦 Features

|    |           Feature          | Description                                                                                                        |
|----|----------------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**           | The system features a single-page quiz web application in HTML, CSS and JavaScript following a procedural design. |
| 🔗 | **Dependencies**           | No external dependencies, besides standardized web technologies such as HTML, CSS, and JavaScript.                |
| 🧩 | **Modularity**             | Code is organized into separate HTML, CSS and JavaScript files - each handling different aspects of the application. |
| 🧪 | **Testing**                | No testing framework or tools in use. Testing was conducted manually.                                 |
| ⚡️ | **Performance**            | As a simple static web application with local storage, performance should be quite efficient, depending on the browser's implementation.                  |
| 🔐 | **Security**               | No explicit security measures. The application doesn't handle sensitive data. Vulnerability may be in local storage tampering. |
| 🔀 | **Version Control**        | Git/GitHub used for version control.  |
| 🔌 | **Integrations**           | The app doesn’t have any integration with third-party systems. It’s a standalone app.                   |
| 📶 | **Scalability**            | Basic scalability possible by adding more questions/answers in existing JavaScript structure. App is not designed to handle massive user scaling.|


---


## 📂 Repository Structure

```sh
└── quiz-king/
    ├── css/
    │   └── styles.css
    ├── highscores.html
    ├── index.html
    └── scripts/
        ├── audio.js
        ├── logic.js
        ├── questions.js
        └── scores.js

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [highscores.html](https://github.com/pmAdriaan/quiz-king/blob/main/highscores.html)   | The code represents the `highscores.html` page of a Quiz application. It displays the high scores of the Quiz game with the option to go back or clear all scores. The page includes elements like the application's logo, essential metadata, Google fonts, FontAwesome Icons, and CSS file link for styling purposes. It incorporates the `scores.js` JavaScript file to handle related functionalities. Also, the page showcases copyright information.                                                |
| [index.html](https://github.com/pmAdriaan/quiz-king/blob/main/index.html)             | This code sets up an interactive quiz web page, Quiz King, styled with CSS. The quiz involves coding-related questions and includes a timing functionality. There are three main screens: the start, questions, and end quiz screens, where users can submit their score. Users can also view the high scores page. The webpage features background music with volume controls. It uses external JavaScript files for quiz audio, question handling, and game logic.                                  |
| [styles.css](https://github.com/pmAdriaan/quiz-king/blob/main/css\styles.css)         | The code provides CSS styling for the quiz website. It details general, header, hyperlink, scores section, logo, timer, start section, button, text input, ordered list, and feedback styling. It specifies colours, positioning, margins, padding, transitions, and other visual enhancements. This includes unique styling for correct and incorrect answers. It also styles audio control elements. The styling contributes to a user-friendly interface and enhances user experience.               |
| [audio.js](https://github.com/pmAdriaan/quiz-king/blob/main/scripts\audio.js)         | The code manages audio settings for the quiz game, including background music and sound effects. It enables the control of various audio features such as track selection, volume adjustment, muting/unmuting music or sound effects and playing appropriate sound effects based on user actions. User preferences are saved to local storage for persistence. There is also a fade-out function for background music.                                                                                |
| [logic.js](https://github.com/pmAdriaan/quiz-king/blob/main/scripts\logic.js)         | The code provides the core functionality for the timed quiz application. It uses JavaScript to load questions, track and display time, handle user's answer choices, provide feedback on answers, and end the quiz when time is up or questions are finished. It also saves user's scores (time remaining) to the local storage and redirects to a high scores page upon completion. It works with HTML elements and event listeners for user interaction and includes sound effects for user feedback. |
| [questions.js](https://github.com/pmAdriaan/quiz-king/blob/main/scripts\questions.js) | The code defines an array of objects representing quiz questions for the game. Each object includes the title of the question, an array of choices for the question, and the correctAnswer, represented by an index of the choice in the choices array. The script also shows how to select question, choices and correct answer by their indexes.                                                                                                                    |
| [scores.js](https://github.com/pmAdriaan/quiz-king/blob/main/scripts\scores.js)       | The code primarily handles the management and display of high scores for the quiz game. It retrieves scores from local storage, sorts them in descending order, and displays them on the webpage. It also features an event listener function for a Clear button, which deletes all scores from local storage. If the scores list is empty, it displays a message. The highest score is visually distinguished with a crown icon.                                                             |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the quiz-king repository:
```sh
git clone https://github.com/pmAdriaan/quiz-king
```

2. Change to the project directory:
```sh
cd quiz-king
```

3. Install the dependencies:
```sh
N/A
```

### 🤖 Running Quiz King

```sh
► Open index.html with Live Server plugin in VS Code
```

### 🌐 Live Demo Quiz King
► [👑 Quiz King](https://pmadriaan.github.io/quiz-king/)


### 📸 Quiz King Screenshot

![quiz-king Screenshot](./assets/images/quiz-king_screenshot.png?raw=true "quiz-king")

---


## 🛣 Project Roadmap

> - [ ] `ℹ️ Add quiz questions for multiple programming languages.`
> - [ ] `ℹ️ Add a progress bar to track how many questions are left to answer.`
> - [ ] `ℹ️ Implement a better scoring system.`
> - [ ] `ℹ️ More coming soon.`


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/pmAdriaan/quiz-king/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/pmAdriaan/quiz-king/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/pmAdriaan/quiz-king/issues)**: Submit bugs found or log feature requests for PMADRIAAN.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


Copyright © 2023 Mihai Pirvu.

This project is licensed under the `ℹ️  MIT-License`. See the [MIT License](https://github.com/pmAdriaan/quiz-king/blob/main/LICENSE) file for additional info.

---


[**Return**](#Top)

---
