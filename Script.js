// champions Data
const champions = [
    {
        name: "Ahri",
        splash: "https://i.postimg.cc/kGSzRqBV/Ahri.webp",
        skills: [
            { key: "Q", name: "Orbe da Ilusão", cooldown: 7, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriQ.png" },
            { key: "W", name: "Fogo de Raposa", cooldown: 9, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriW.png" },
            { key: "E", name: "Encanto", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriE.png" },
            { key: "R", name: "Ímpeto Espiritual", cooldown: 130, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AhriR.png" }
        ]
    },
    {
        name: "Akali",
        splash: "https://i.postimg.cc/rm37pKFX/Akali.webp",
        skills: [
            { key: "Q", name: "Golpe dos cinco pontos", cooldown: 1.5, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliQ.png" },
            { key: "W", name: "Cortina de Fumaça", cooldown: 20, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliW.png" },
            { key: "E", name: "Ataque da Sombra", cooldown: 16, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliE.png" },
            { key: "R", name: "execução perfeita", cooldown: 120, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkaliR.png" }
        ]
    },
    {
        name: "Zed",
        splash: "https://i.postimg.cc/mDX65hF1/ZED.webp",
        skills: [
            { key: "Q", name: "Shuriken laminado", cooldown: 6, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedQ.png" },
            { key: "W", name: "Sombra Viva", cooldown: 20, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedW.png" },
            { key: "E", name: "Corte sombrio", cooldown: 5, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedE.png" },
            { key: "R", name: "Marca da Morte", cooldown: 120, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/ZedR.png" }
        ]
    },
    {
        name: "Lux",
        splash: "https://i.postimg.cc/PqM71SX4/Lux.webp",
        skills: [
            { key: "Q", name: "Ligação da luz", cooldown: 10, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxLightBinding.png" },
            { key: "W", name: "Barreira prismática", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxPrismaticWave.png" },
            { key: "E", name: "Singularidade lucente", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxLightStrikeKugel.png" },
            { key: "R", name: "Centelha final", cooldown: 120, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/LuxR.png" }
        ]
    },
    {
        name: "Akshan",
        splash: "https://i.postimg.cc/MKhgwc3y/Akshan.webp",
        skills: [
            { key: "Q", name: "Bumerangue vingativo", cooldown: 8, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanQ.png" },
            { key: "W", name: "Rebeldia", cooldown: 18, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanW.png" },
            { key: "E", name: "Impulso heórico", cooldown: 18, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanE.png" },
            { key: "R", name: "punição", cooldown: 100, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AkshanR.png" }
        ]
    },
    {
        name: "Anivia",
        splash: "https://i.postimg.cc/1zSTgkQX/Anivia.webp",
        skills: [
            { key: "Q", name: "Lampejo gelado", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/FlashFrost.png" },
            { key: "W", name: "Cristalizar", cooldown: 17, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/Crystallize.png" },
            { key: "E", name: "Congelamento", cooldown: 4, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/Frostbite.png" },
            { key: "R", name: "Tempestade glacial", cooldown: 4, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/GlacialStorm.png" }
        ]
    },
    {
        name: "Aurora",
        splash: "https://i.postimg.cc/rmFPj5zL/Aurora.webp",
        skills: [
            { key: "Q", name: "Feitiço dúplice", cooldown: 9, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraQ.png" },
            { key: "W", name: "Através do véu", cooldown: 22, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraW.png" },
            { key: "E", name: "Estranheza", cooldown: 15, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraE.png" },
            { key: "R", name: "Entre mundos", cooldown: 140, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/AuroraR.png" }
        ]
    },
    {
        name: "Katarina",
        splash: "https://i.postimg.cc/Qd1wdXvv/Kat.webp",
        skills: [
            { key: "Q", name: "lâmina saltitante", cooldown: 11, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaQ.png" },
            { key: "W", name: "preparação", cooldown: 15, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaW.png" },
            { key: "E", name: "shunpo", cooldown: 12, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaEWrapper.png" },
            { key: "R", name: "lótus da morte", cooldown: 75, img: "https://ddragon.leagueoflegends.com/cdn/15.16.1/img/spell/KatarinaR.png" }
        ]
    }
];

// HTML elements
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
    // Filters champions that still have unasked skills
    const availableChampionIndexes = championProgress
        .map((skills, idx) => skills.length < champions[idx].skills.length ? idx : null)
        .filter(idx => idx !== null);

    // Restarts progress if all champions were completed
    if (availableChampionIndexes.length === 0) {
        championProgress = champions.map(() => []);
        startNewChampion();
        return;
    }

    // Sorts between available champions, avoiding repetition
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

    // IF to check if all skills were asked
    if (askedSkills.length === currentChampion.skills.length) {
        startNewChampion();
        return;
    }

    // Selects a random unasked skill
    const remainingSkills = currentChampion.skills
        .map((skill, i) => ({ skill, index: i }))
        .filter(({ index }) => !askedSkills.includes(index));
    const randomSkillObj = remainingSkills[Math.floor(Math.random() * remainingSkills.length)];
    currentSkill = randomSkillObj.skill;
    askedSkills.push(randomSkillObj.index);

    abilityIcon.innerHTML = `<img src="${currentSkill.img}" alt="${currentChampion.name} ${currentSkill.key}" style="height:48px;" loading="lazy">`;
    question.textContent = `Qual o tempo de recarga do (${currentSkill.key}) do(a) ${currentChampion.name}?`;
    answerInput.value = '';
    resultContainer.style.display = 'none';
    answerInput.focus();
}

function checkAnswer() {
    // Adapt input for decimal commas
    const userAnswer = parseFloat(answerInput.value.replace(',', '.'));
    if (isNaN(userAnswer)) {
        alert("Por favor, insira um número válido!");
        return;
    }

    // Error margin for float comparison
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
        setTimeout(startNewRound, 1500);
    }