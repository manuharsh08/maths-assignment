let timeLeft = 30 * 60; // 30 minutes
const timerDisplay = document.getElementById("timer");

const correctAnswers = {
    q1: "a",
    q2: "a",
    q3: "b",
    q4: "c",
    q5: "b",
    q6: "c",
    q7: "a",
    q8: "b",
    q9: "b",
    q10: "c"
};

function startTimer() {
    const timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerDisplay.textContent =
            `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let q in correctAnswers) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === correctAnswers[q]) {
            score++;
        }
    }

    document.getElementById("result").textContent =
        `Your Score: ${score} / ${total}`;
}

startTimer();
