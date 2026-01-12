const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-text');
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBaarFull');

let curretQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// let questions = [{
//     question : "What"
// }]
