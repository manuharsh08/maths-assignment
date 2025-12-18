let timeLeft = 40 * 60;
const timerDisplay = document.getElementById("timer");

const correctAnswers = {
    q1:"a", q2:"a", q3:"c", q4:"b", q5:"b",
    q6:"b", q7:"b", q8:"c", q9:"c", q10:"a",
    q11:"b", q12:"b", q13:"c", q14:"b", q15:"a",
    q16:"c", q17:"a", q18:"b", q19:"b", q20:"b"
};

function startTimer() {
    const timer = setInterval(() => {
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        timerDisplay.textContent = `Time Left: ${m}:${s < 10 ? "0" : ""}${s}`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    let score = 0;

    for (let q in correctAnswers) {
        let selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === correctAnswers[q]) {
            score++;
        }
    }

    document.getElementById("result").textContent =
        `Your Score: ${score} / 20`;

    document.getElementById("scoreField").value = score;

    setTimeout(() => {
        document.getElementById("quizForm").submit();
    }, 1500);
}

startTimer();
