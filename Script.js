// Lista de campeões e habilidades
const champions = [
    {
        name: "Ahri",
        skills: [
            { key: "Q", name: "Orbe da Ilusão", cooldown: 7, img: "imgs/Icones_skills/Ahri_Q.png" },
            { key: "W", name: "Fogo de Raposa", cooldown: 9, img: "imgs/Icones_skills/Ahri_W.png" },
            { key: "E", name: "Encanto", cooldown: 12, img: "imgs/Icones_skills/Ahri_E.png" },
            { key: "R", name: "Ímpeto Espiritual", cooldown: 130, img: "imgs/Icones_skills/Ahri_R.png" }
        ]
    },
    {
        name: "Akali",
        skills: [
            { key: "Q", name: "Golpe dos cinco pontos", cooldown: 1.5, img: "imgs/Icones_skills/Akali_Q.png" },
            { key: "W", name: "Cortina de Fumaça", cooldown: 20, img: "imgs/Icones_skills/Akali_W.png" },
            { key: "E", name: "Ataque da Sombra", cooldown: 16, img: "imgs/Icones_skills/Akali_E.png" },
            { key: "R", name: "Marca do Assassino", cooldown: 120, img: "imgs/Icones_skills/Akali_R.png" }
        ]
    },
    {
        name: "Zed",
        skills: [
            { key: "Q", name: "Shuriken laminado", cooldown: 6, img: "imgs/Icones_skills/Zed_Q.png" },
            { key: "W", name: "Sombra Viva", cooldown: 20, img: "imgs/Icones_skills/Zed_W.png" },
            { key: "E", name: "Corte sombrio", cooldown: 5, img: "imgs/Icones_skills/Zed_E.png" },
            { key: "R", name: "Marca da Morte", cooldown: 120, img: "imgs/Icones_skills/Zed_R.png" }
        ]
    },
    {
        name: "Lux",
        skills: [
            { key: "Q", name: "Ligação da luz", cooldown: 10, img: "imgs/Icones_skills/Lux_Q.png" },
            { key: "W", name: "Barreira prismática", cooldown: 8, img: "imgs/Icones_skills/Lux_W.png" },
            { key: "E", name: "Singularidade lucente", cooldown: 12, img: "imgs/Icones_skills/Lux_E.png" },
            { key: "R", name: "Centelha final", cooldown: 120, img: "imgs/Icones_skills/Lux_R.png" }
        ]
    },
    {
        name: "Akshan",
        skills: [
            { key: "Q", name: "Bumerangue vingativo", cooldown: 8, img: "imgs/Icones_skills/Akshan_Q.png" },
            { key: "W", name: "Rebeldia", cooldown: 18, img: "imgs/Icones_skills/Akshan_W.png" },
            { key: "E", name: "Impulso heórico", cooldown: 18, img: "imgs/Icones_skills/Akshan_E.png" },
            { key: "R", name: "punição", cooldown: 100, img: "imgs/Icones_skills/Akshan_R.png" }
        ]
    },
    {
        name: "Anivia",
        skills: [
            { key: "Q", name: "Lampejo gelado", cooldown: 12, img: "imgs/Icones_skills/Anivia_Q.png" },
            { key: "W", name: "Cristalizar", cooldown: 17, img: "imgs/Icones_skills/Anivia_W.png" },
            { key: "E", name: "Congelamento", cooldown: 4, img: "imgs/Icones_skills/Anivia_E.png" },
            { key: "R", name: "Tempestade glacial", cooldown: 4, img: "imgs/Icones_skills/Anivia_R.png" }
        ]
    }
];

// Elementos HTML
const homePage = document.getElementById('homePage');
const gamePage = document.getElementById('gamePage');
const startBtn = document.getElementById('startBtn');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('resultContainer');
const resultImage = document.getElementById('resultImage');
const resultMessage = document.getElementById('resultMessage');
const abilityIcon = document.querySelector('.ability-icon');
const question = document.querySelector('.question');

// Progresso de cada campeão
let championProgress = champions.map(() => []);
let currentChampionIndex = null;
let currentChampion = null;
let currentSkill = null;

// Inicia o jogo
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
    // Filtra campeões que ainda têm skills não perguntadas
    const availableChampionIndexes = championProgress
        .map((skills, idx) => skills.length < champions[idx].skills.length ? idx : null)
        .filter(idx => idx !== null);

    // Se todos os campeões já foram, reinicia o progresso
    if (availableChampionIndexes.length === 0) {
        championProgress = champions.map(() => []);
        startNewChampion();
        return;
    }

    // Sorteia entre os campeões disponíveis
    let nextChampionIndex;
    do {
        nextChampionIndex = availableChampionIndexes[Math.floor(Math.random() * availableChampionIndexes.length)];
    } while (nextChampionIndex === currentChampionIndex && availableChampionIndexes.length > 1);

    currentChampionIndex = nextChampionIndex;
    currentChampion = champions[currentChampionIndex];
    startNewRound();
}

function startNewRound() {
    const askedSkills = championProgress[currentChampionIndex];

    // Se todas as skills já foram perguntadas desse campeão, troca de campeão
    if (askedSkills.length === currentChampion.skills.length) {
        startNewChampion();
        return;
    }

    // Seleciona uma skill ainda não perguntada
    const remainingSkills = currentChampion.skills
        .map((skill, i) => ({ skill, index: i }))
        .filter(({ index }) => !askedSkills.includes(index));
    const randomSkillObj = remainingSkills[Math.floor(Math.random() * remainingSkills.length)];
    currentSkill = randomSkillObj.skill;
    askedSkills.push(randomSkillObj.index);

    abilityIcon.innerHTML = `<img src="${currentSkill.img}" alt="${currentChampion.name} ${currentSkill.key}" style="height:48px;">`;
    question.textContent = `Qual o tempo de recarga do (${currentSkill.key}) do(a) ${currentChampion.name}?`;
    answerInput.value = '';
    resultContainer.style.display = 'none';
    answerInput.focus();
}

function checkAnswer() {
    // Aceita ponto ou vírgula como separador decimal
    const userAnswer = parseFloat(answerInput.value.replace(',', '.'));
    if (isNaN(userAnswer)) {
        alert("Por favor, insira um número válido!");
        return;
    }

    // Margem de erro para comparação de decimais
    const epsilon = 0.01;
    if (Math.abs(userAnswer - currentSkill.cooldown) < epsilon) {
        resultImage.src = "imgs/Dea/Dea_Feliz.png";
        resultImage.alt = "Dea feliz";
        resultMessage.textContent = "Parabéns, você acertou!";
        resultMessage.style.color = "#43b581";
    } else {
        resultImage.src = "imgs/Dea/Dea_Triste.png";
        resultImage.alt = "Dea triste";
        resultMessage.textContent = `Resposta errada! paia. O tempo correto era ${currentSkill.cooldown}s.`;
        resultMessage.style.color = "#f04747";
    }

    resultContainer.style.display = 'flex';
    setTimeout(startNewRound, 3000);
}