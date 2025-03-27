const quizData = [
    {
        question: "Salah satu ilmuwan Islam yang menentang ahli alkimia yang menyebutkan bahwa unsur dapat berubah-ubah adalah?",
        options: ["Al-Kindi", "Al-Khawarizmi", "Abbas Abu Al-Qasim"],
        answer: "Al-Kindi"
    },
    {
        question: "Masjid pertama yang dibangun oleh umat Islam adalah?",
        options: ["Masjid Quba", "Masjid Nabawi", "Masjid Istiqlal"],
        answer: "Masjid Quba"
    },
    {
        question: "Pada tahun berapa Nabi Muhammad dan pengikutnya harus hijrah ke kota Madinah?",
        options: ["629", "632", "622"],
        answer: "622"
    },
    {
        question: "seorang ahli astronomi dan matematikawan muslim dari Arab yang terkenal berkat salah satu pencapaiannya yaitu penentuan tahun matahari adalah?",
        options: ["Abbas Bin Firnas", "Musailamah Bin Qasim At-Takwiri", "Al-Batani"],
        answer: "Al-Batani"
    },
    {
        question: "tokoh yang dikenal sebagai bapak kedokteran modern adalah?",
        options: ["Jabyr Ibn Haiyar", "Ibnu Sina", "Al-Tabari"],
        answer: "Ibnu Sina"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = "#B7B7B7";
    const quizContainer = document.getElementById("quiz");
    quizContainer.style.display = "flex";
    quizContainer.style.flexDirection = "column";
    quizContainer.style.alignItems = "center";
    quizContainer.style.textAlign = "center";
    quizContainer.style.backgroundColor = "#B7B7B7";
    loadQuestion();
});

function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    const questionData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2 style="font-size: 24px; margin-bottom: 20px;">${questionData.question}</h2>
        <p id="timer" style="font-size: 18px; color: red; margin-bottom: 20px;">Waktu tersisa: ${timeLeft} detik</p>
        <ul style="list-style: none; padding: 0;">
            ${questionData.options.map(option => `
                <li style="margin: 10px 0;">
                    <button style="font-size: 18px; background-color: #A1E3F9; padding: 10px 20px; width: 200px;" onclick="checkAnswer('${option}')">${option}</button>
                </li>
            `).join('')}
        </ul>
    `;
    resetTimer();
}

function checkAnswer(selectedAnswer) {
    clearInterval(timer);
    const correctAnswer = quizData[currentQuestion].answer;
    
    if (selectedAnswer === correctAnswer) {
        alert("Jawaban benar!");
        score += 20;
    } else {
        alert("Maaf, Jawaban anda kurang tepat!");
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 10;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Waktu tersisa: ${timeLeft} detik`;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert("Waktu habis!");
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }
    }, 1000);
}

function showResult() {
    clearInterval(timer);
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `
        <h2 style="font-size: 24px;">Kuis Selesai!</h2>
        <p style="font-size: 20px;">Skor Anda: ${score} dari ${quizData.length * 20}</p>
        <div style="display: flex; gap: 20px; margin-top: 20px;">
            <button style="font-size: 20px; padding: 15px 30px; background-color: #A1E3F9;" onclick="restartQuiz()">Coba Lagi</button>
            <button style="font-size: 20px; padding: 15px 30px; background-color: #A1E3F9;" onclick="goToMenu()">Kembali ke Menu</button>
        </div>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function goToMenu() {
    window.location.href = "../index.html";
}