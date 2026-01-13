const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-text');
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
    question : "What is the capital of France ? ",
    choice1 : "London",
    choice2 : "Berlin",
    choice3 : "Paris",
    choice4 : "Madrid",
    answer : 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        choice1: "Venus",
        choice2: "Mars",
        choice3: "Jupiter",
        choice4: "Saturn",
        answer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choice1: "Charles Dickens",
        choice2: "Jane Austen",
        choice3: "William Shakespeare",
        choice4: "Mark Twain",
        answer: 3
    },
    {
        question: "What is the largest ocean on Earth?",
        choice1: "Atlantic Ocean",
        choice2: "Indian Ocean",
        choice3: "Arctic Ocean",
        choice4: "Pacific Ocean",
        answer: 4
    },
    {
        question: "What is the smallest prime number?",
        choice1: "0",
        choice2: "1",
        choice3: "2",
        choice4: "3",
        answer: 3
    },
    {
        question: "In which year did World War II end?",
        choice1: "1943",
        choice2: "1944",
        choice3: "1945",
        choice4: "1946",
        answer: 3
    },
    {
        question: "What is the chemical symbol for gold?",
        choice1: "Go",
        choice2: "Au",
        choice3: "Gd",
        choice4: "Ag",
        answer: 2
    },
    {
        question: "Which country is home to the kangaroo?",
        choice1: "New Zealand",
        choice2: "South Africa",
        choice3: "Australia",
        choice4: "Brazil",
        answer: 3
    },
    {
        question: "What is the speed of light?",
        choice1: "300,000 km/s",
        choice2: "150,000 km/s",
        choice3: "450,000 km/s",
        choice4: "600,000 km/s",
        answer: 1
    }
];

//constants
const CORRECT_BONUS=10;
const MAX_QUESTIONS = 10;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () =>{
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    Array.from(choices).forEach((choice, index) => {
        choice.innerText = currentQuestion['choice' + (index + 1)];
    });

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
};

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};
startGame();
