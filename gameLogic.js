
// HTML elements
const homePage = document.getElementById('homePage' );
const gamePage = document.getElementById('gamePage');
const startBtn = document.getElementById('startBtn');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('resultContainer');
const resultImage = document.getElementById('resultImage');
const resultMessage = document.getElementById('resultMessage');
const abilityIcon = document.querySelector('.ability-icon');
const question = document.querySelector('.question');
const champBg = document.getElementById('champBg');

// Champion progress tracking
let championProgress = champions.map(() => []);
let currentChampionIndex = null;
let currentChampion = null;
let currentSkill = null;

// Starts the game
startBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    gamePage.style.display = 'flex';
    startNewChampion();
});

submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

function startNewChampion() {
    const availableChampionIndexes = championProgress
        .map((skills, idx) => skills.length < champions[idx].skills.length ? idx : null)
        .filter(idx => idx !== null);

    if (availableChampionIndexes.length === 0) {
        alert("Parabéns! Você completou todos os desafios. O jogo será reiniciado.");
        championProgress = champions.map(() => []);
        startNewChampion();
        return;
    }

    let nextChampionIndex;
    do {
        nextChampionIndex = availableChampionIndexes[Math.floor(Math.random() * availableChampionIndexes.length)];
    } while (nextChampionIndex === currentChampionIndex && availableChampionIndexes.length > 1);

    currentChampionIndex = nextChampionIndex;
    currentChampion = champions[currentChampionIndex];
    champBg.src = currentChampion.splash;
    startNewRound();
}

function startNewRound() {
    const askedSkills = championProgress[currentChampionIndex];

    if (askedSkills.length === currentChampion.skills.length) {
        startNewChampion();
        return;
    }

    const remainingSkills = currentChampion.skills
        .map((skill, i) => ({ skill, index: i }))
        .filter(({ index }) => !askedSkills.includes(index));
    const randomSkillObj = remainingSkills[Math.floor(Math.random() * remainingSkills.length)];
    currentSkill = randomSkillObj.skill;
    askedSkills.push(randomSkillObj.index);

    // upgrade change question and ability icon
    abilityIcon.style.backgroundImage = `url('${currentSkill.img}')`;

    question.textContent = `Qual o tempo de recarga do (${currentSkill.key}) do(a) ${currentChampion.name}?`;
    answerInput.value = '';
    resultContainer.style.display = 'none';
    answerInput.focus();
}

function checkAnswer() {
    if (answerInput.value.trim() === '') {
        alert("Por favor, insira um número.");
        return;
    }
    const userAnswer = parseFloat(answerInput.value.replace(',', '.'));
    if (isNaN(userAnswer)) {
        alert("Por favor, insira um número válido!");
        return;
    }

    const epsilon = 0.01;
    if (Math.abs(userAnswer - currentSkill.cooldown) < epsilon) {
        resultImage.src = "imgs/Dea/Dea_Feliz.png";
        resultImage.alt = "Dea feliz";
        resultMessage.textContent = "Parabéns, você acertou!";
        resultMessage.style.color = "#43b581";
    } else {
        resultImage.src = "imgs/Dea/Dea_Triste.png";
        resultImage.alt = "Dea triste";
        resultMessage.textContent = `Quase! O tempo correto era ${currentSkill.cooldown}s.`;
        resultMessage.style.color = "#f04747";
    }

    resultContainer.style.display = 'flex';
    setTimeout(startNewRound, 2000); 
}
