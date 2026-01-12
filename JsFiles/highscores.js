const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join('');

// If no scores yet, display a message
if (highScores.length === 0) {
    highScoresList.innerHTML = '<li class="high-score">No scores yet. Play the quiz!</li>';
}