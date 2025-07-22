// Lista de campeões e habilidades (Ahri como exemplo)
const champions = [
    {
        name: "Ahri",
        skills: [
            { key: "Q", name: "Orbe da Ilusão", cooldown: 7, img: "imgs/Icones_skills/Ahri_Q.png" },
            { key: "W", name: "Fogo de Raposa", cooldown: 9, img: "imgs/Icones_skills/Ahri_W.png" },
            { key: "E", name: "Encanto", cooldown: 12, img: "imgs/Icones_skills/Ahri_E.png" },
            { key: "R", name: "Ímpeto Espiritual", cooldown: 130, img: "imgs/Icones_skills/Ahri_R.png" }
        ]
    }
    // futuros campeões podem ser adicionados aqui
];

// Elementos HTML que serão manipulados
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

let currentChampion, currentSkill;

// Inicia o jogo
startBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    gamePage.style.display = 'flex';
    startNewRound();
});
//  Liga o botão "Enviar" à verificação da resposta
submitBtn.addEventListener('click', checkAnswer);
//  Também permite que o jogador pressione Enter para enviar a resposta
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

function startNewRound() {
    currentChampion = champions[Math.floor(Math.random() * champions.length)];
    currentSkill = currentChampion.skills[Math.floor(Math.random() * currentChampion.skills.length)];
    abilityIcon.innerHTML = `<img src="${currentSkill.img}" alt="${currentChampion.name} ${currentSkill.key}" style="height:48px;">`;
    question.textContent = `Qual o tempo de recarga do (${currentSkill.key}) do(a) ${currentChampion.name}?`;
    answerInput.value = '';
    resultContainer.style.display = 'none';
    answerInput.focus();
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (isNaN(userAnswer)) {
        alert("Por favor, insira um número válido!");
        return;
    }

    if (userAnswer === currentSkill.cooldown) {
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