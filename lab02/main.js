const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 4, 6, 8],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [6, 9, 12, 15],
    },
];

const btn = document.getElementById("btn");
const quizContainer = document.querySelector(".quiz-container");

btn.addEventListener("click", function () {
    quizes.forEach(quiz => {
        const quizItem = quizContainer.querySelector(`.quiz-item[data-id="${quiz.id}"]`);
        const quizAnswer = quizItem.querySelector(".quiz-answer");
        const answerItems = quizAnswer.querySelectorAll(".quiz-answer-item");

        const randomAnswerIndex = Math.floor(Math.random() * answerItems.length);
        answerItems.forEach((answerItem, index) => {
            const input = answerItem.querySelector("input");
            if (index === randomAnswerIndex) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
    });
});

let html = "";
quizes.forEach(quiz => {
    html += `
        <div class="quiz-item" data-id="${quiz.id}">
            <h3>Câu ${quiz.id} : ${quiz.question}</h3>
            <div class="quiz-answer">
    `;
    quiz.answers.forEach((answer, index) => {
        html += `
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}">
                    <label>${answer}</label>
                </div>
        `;
    });
    html += `
            </div>
        </div>
    `;
});

quizContainer.innerHTML = html;
