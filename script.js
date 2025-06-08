const questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 1
    },
    {
        question: "Which language is used to style web pages?",
        answers: ["HTML", "CSS", "JavaScript"],
        correct: 1
    },
    {
        question: "Which language is used to add interactivity to a website?",
        answers: ["HTML", "CSS", "JavaScript"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('nextBtn');

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.classList.add('answer-btn');
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index) {
    const correct = questions[currentQuestion].correct;
    if (index === correct) {
        alert('Correct!');
        score++;
    } else {
        alert('Wrong answer!');
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionEl.textContent = `Quiz complete! Your score: ${score}/${questions.length}`;
        answersEl.innerHTML = '';
        nextBtn.style.display = 'none';
    }
}

nextBtn.onclick = () => {
    showQuestion();
    nextBtn.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
    nextBtn.style.display = 'none';
});
