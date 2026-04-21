const characters = {
    "Batman": { 
        name: "Batman", 
        description: "O Cavaleiro das Trevas. Estrategista nato, você usa seu intelecto e preparo para enfrentar qualquer desafio, transformando suas sombras em força.", 
        image: "https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-personagem-batman.jpg" 
    },
    "Superman": { 
        name: "Superman", 
        description: "O Homem de Aço. Você é movido pela esperança, justiça e um senso inabalável de dever para com a humanidade, sempre buscando o melhor nas pessoas.", 
        image: "https://upload.wikimedia.org/wikipedia/pt/b/be/Super-Homem.jpg" 
    },
    "Mulher-Maravilha": { 
        name: "Mulher-Maravilha", 
        description: "A Princesa de Temiscira. Guerreira diplomata, você combina força indomável com compaixão e uma busca incessante pela verdade.", 
        image: "https://upload.wikimedia.org/wikipedia/pt/f/f6/Mulher-Maravilha.jpg" 
    },
    "Flash": { 
        name: "Flash", 
        description: "O Homem Mais Rápido do Mundo. Você é otimista, rápido no pensamento e na ação, e entende que cada segundo conta para salvar o dia.", 
        image: "https://hqrock.com.br/wp-content/uploads/2011/06/the-flash-01-2011.jpg" 
    },
    "Lanterna Verde": { 
        name: "Lanterna Verde", 
        description: "O Guardião do Setor 2814. Sua força de vontade é sua maior arma, permitindo que você supere qualquer medo e crie o impossível.", 
        image: "https://upload.wikimedia.org/wikipedia/pt/8/83/Hal_Jordan_and_the_Green_Lantern_Corps_Vol_1_45_Textless_Variant.jpg" 
    },
    "Aquaman": { 
        name: "Aquaman", 
        description: "O Rei de Atlântida. Você pertence a dois mundos e luta para proteger ambos, com uma nobreza feroz e uma conexão profunda com a natureza.", 
        image: "https://upload.wikimedia.org/wikipedia/pt/3/3b/Aquaman.jpg" 
    },
    "Lex Luthor": { 
        name: "Lex Luthor", 
        description: "O Gênio Multibilionário. Sua ambição não conhece limites e você acredita que o intelecto humano (especialmente o seu) é a única coisa que importa.", 
        image: "https://i.pinimg.com/736x/a6/2a/8a/a62a8a15a959cb74633c0a05c657e833.jpg" 
    },
    "Darkseid": { 
        name: "Darkseid", 
        description: "O Senhor de Apokolips. Você busca a ordem absoluta através do controle e do poder, sendo uma força imparável da natureza.", 
        image: "https://w0.peakpx.com/wallpaper/655/659/HD-wallpaper-darkseid-dc.jpg" 
    },
    "Coringa": { 
        name: "Coringa", 
        description: "O Palhaço do Crime. Para você, a vida é uma piada sem sentido e o caos é a única verdade libertadora.", 
        image: "https://static.wikia.nocookie.net/viloes/images/4/4e/Joker_Crowbar.webp/revision/latest?cb=20250628015520&path-prefix=pt-br" 
    },
    "Arlequina": { 
        name: "Arlequina", 
        description: "A Princesa do Caos. Independente e imprevisível, você vive a vida nos seus próprios termos, com muita energia e um toque de loucura.", 
        image: "https://wallpaper.forfun.com/fetch/85/8525e6806118ee2d2ce09d9aed130d90.jpeg" 
    }
};

const questions = [
    {
        text: "Diante de um problema complexo, qual sua primeira reação?",
        options: [
            { text: "Mapear todas as variáveis e criar um plano de resolução.", scores: { "Batman": 3, "Lex Luthor": 2, "Darkseid": 1 } },
            { text: "Confiar nos meus instintos e agir no calor do momento.", scores: { "Flash": 3, "Arlequina": 2, "Coringa": 1 } },
            { text: "Buscar uma solução que minimize o sofrimento de todos.", scores: { "Superman": 3, "Mulher-Maravilha": 2, "Aquaman": 1 } },
            { text: "Usar minha influência para que outros resolvam por mim.", scores: { "Lex Luthor": 3, "Darkseid": 2, "Aquaman": 1 } },
            { text: "Encarar o desafio com coragem, não importa o risco.", scores: { "Lanterna Verde": 3, "Mulher-Maravilha": 2, "Superman": 1 } }
        ]
    },
    {
        text: "Como você define o sucesso pessoal?",
        options: [
            { text: "Alcançar a excelência e ser o melhor naquilo que faço.", scores: { "Lex Luthor": 3, "Batman": 2, "Coringa": 1 } },
            { text: "Viver com liberdade e sem amarras sociais.", scores: { "Arlequina": 3, "Coringa": 2, "Flash": 1 } },
            { text: "Cumprir meu dever e proteger o que é certo.", scores: { "Superman": 3, "Mulher-Maravilha": 2, "Lanterna Verde": 1 } },
            { text: "Ter controle absoluto sobre o meu próprio destino.", scores: { "Darkseid": 3, "Aquaman": 2, "Batman": 1 } },
            { text: "Superar meus próprios medos e limitações.", scores: { "Lanterna Verde": 3, "Flash": 2, "Mulher-Maravilha": 1 } }
        ]
    },
    {
        text: "Qual dessas qualidades você mais admira em alguém?",
        options: [
            { text: "A capacidade de manter a calma sob pressão extrema.", scores: { "Batman": 3, "Superman": 2, "Lanterna Verde": 1 } },
            { text: "A honestidade brutal, mesmo que doa.", scores: { "Mulher-Maravilha": 3, "Aquaman": 2, "Darkseid": 1 } },
            { text: "O bom humor constante, mesmo em tragédias.", scores: { "Flash": 3, "Arlequina": 2, "Coringa": 1 } },
            { text: "A ambição de querer sempre mais da vida.", scores: { "Lex Luthor": 3, "Darkseid": 2, "Arlequina": 1 } },
            { text: "A lealdade incondicional às suas raízes.", scores: { "Aquaman": 3, "Superman": 2, "Mulher-Maravilha": 1 } }
        ]
    },
    {
        text: "Se você pudesse mudar o mundo, o que faria primeiro?",
        options: [
            { text: "Eliminaria o caos e estabeleceria uma ordem rígida.", scores: { "Darkseid": 3, "Batman": 2, "Lex Luthor": 1 } },
            { text: "Inspiraria as pessoas a serem a melhor versão de si mesmas.", scores: { "Superman": 3, "Lanterna Verde": 2, "Flash": 1 } },
            { text: "Acabaria com todas as regras que limitam a diversão.", scores: { "Coringa": 3, "Arlequina": 2, "Flash": 1 } },
            { text: "Ensinaria a todos o valor da verdade e da honra.", scores: { "Mulher-Maravilha": 3, "Aquaman": 2, "Superman": 1 } },
            { text: "Investiria em tecnologia para superar os limites biológicos.", scores: { "Lex Luthor": 3, "Batman": 2, "Lanterna Verde": 1 } }
        ]
    },
    {
        text: "Como você lida com uma traição?",
        options: [
            { text: "Analiso onde errei ao confiar e aprendo a lição.", scores: { "Batman": 3, "Lex Luthor": 2, "Darkseid": 1 } },
            { text: "Sinto a dor, mas perdoo para seguir em frente.", scores: { "Superman": 3, "Flash": 2, "Mulher-Maravilha": 1 } },
            { text: "A traição é apenas uma oportunidade para um novo começo.", scores: { "Coringa": 3, "Arlequina": 2, "Lex Luthor": 1 } },
            { text: "Retribuo na mesma moeda para que não se repita.", scores: { "Aquaman": 3, "Darkseid": 2, "Mulher-Maravilha": 1 } },
            { text: "Enfrento o traidor olho no olho e exijo a verdade.", scores: { "Mulher-Maravilha": 3, "Lanterna Verde": 2, "Aquaman": 1 } }
        ]
    },
    {
        text: "Qual é o seu maior medo?",
        options: [
            { text: "Perder o controle sobre as situações ao meu redor.", scores: { "Lex Luthor": 3, "Darkseid": 2, "Batman": 1 } },
            { text: "Ser incapaz de ajudar quem precisa de mim.", scores: { "Superman": 3, "Flash": 2, "Lanterna Verde": 1 } },
            { text: "Ficar preso em uma vida monótona e previsível.", scores: { "Arlequina": 3, "Coringa": 2, "Flash": 1 } },
            { text: "Ver o colapso de tudo o que ajudei a construir.", scores: { "Aquaman": 3, "Mulher-Maravilha": 2, "Batman": 1 } },
            { text: "Deixar que o medo me impeça de agir.", scores: { "Lanterna Verde": 3, "Mulher-Maravilha": 2, "Coringa": 1 } }
        ]
    },
    {
        text: "Em uma discussão, qual sua postura?",
        options: [
            { text: "Uso a lógica e fatos para desarmar o oponente.", scores: { "Batman": 3, "Lex Luthor": 2, "Coringa": 1 } },
            { text: "Tento mediar e encontrar um ponto comum.", scores: { "Superman": 3, "Mulher-Maravilha": 2, "Flash": 1 } },
            { text: "Debocho e transformo a conversa em uma piada.", scores: { "Coringa": 3, "Arlequina": 2, "Flash": 1 } },
            { text: "Imponho minha autoridade e encerro o assunto.", scores: { "Darkseid": 3, "Aquaman": 2, "Lex Luthor": 1 } },
            { text: "Defendo meu ponto de vista com paixão e energia.", scores: { "Lanterna Verde": 3, "Flash": 2, "Mulher-Maravilha": 1 } }
        ]
    },
    {
        text: "O que você faz nas suas horas livres?",
        options: [
            { text: "Estudo ou trabalho em projetos pessoais.", scores: { "Lex Luthor": 3, "Batman": 2, "Darkseid": 1 } },
            { text: "Busco adrenalina e novas experiências.", scores: { "Flash": 3, "Arlequina": 2, "Lanterna Verde": 1 } },
            { text: "Passo tempo com pessoas que amo ou na natureza.", scores: { "Aquaman": 3, "Superman": 2, "Mulher-Maravilha": 1 } },
            { text: "Pratico atividades que desafiem meu corpo e mente.", scores: { "Mulher-Maravilha": 3, "Lanterna Verde": 2, "Batman": 1 } },
            { text: "Apenas deixo as coisas acontecerem sem planejar nada.", scores: { "Coringa": 3, "Arlequina": 2, "Flash": 1 } }
        ]
    },
    {
        text: "Qual sua relação com as regras?",
        options: [
            { text: "As regras são necessárias para a sobrevivência da sociedade.", scores: { "Superman": 3, "Mulher-Maravilha": 2, "Aquaman": 1 } },
            { text: "Eu crio minhas próprias regras e as sigo à risca.", scores: { "Batman": 3, "Darkseid": 2, "Aquaman": 1 } },
            { text: "Regras foram feitas para serem quebradas ou ignoradas.", scores: { "Coringa": 3, "Arlequina": 2, "Flash": 1 } },
            { text: "Regras são ferramentas para os fortes controlarem os fracos.", scores: { "Darkseid": 3, "Lex Luthor": 2, "Coringa": 1 } },
            { text: "Sigo as regras, a menos que elas firam minha consciência.", scores: { "Lanterna Verde": 3, "Superman": 2, "Mulher-Maravilha": 1 } }
        ]
    },
    {
        text: "Como você gostaria de ser lembrado?",
        options: [
            { text: "Como alguém que fez o impossível parecer fácil.", scores: { "Flash": 3, "Lanterna Verde": 2, "Coringa": 1 } },
            { text: "Como um símbolo de justiça e esperança.", scores: { "Superman": 3, "Mulher-Maravilha": 2, "Batman": 1 } },
            { text: "Como o arquiteto de uma nova era de progresso.", scores: { "Lex Luthor": 3, "Darkseid": 2, "Batman": 1 } },
            { text: "Como alguém que viveu intensamente e sem arrependimentos.", scores: { "Arlequina": 3, "Coringa": 2, "Flash": 1 } },
            { text: "Como o protetor feroz do meu povo e ideais.", scores: { "Aquaman": 3, "Mulher-Maravilha": 2, "Lanterna Verde": 1 } }
        ]
    }
];

let currentQuestionIndex = 0;
let userScores = {};

for (let char in characters) {
    userScores[char] = 0;
}

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.text;
    optionsContainer.innerHTML = '';
    
    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option.scores));
        optionsContainer.appendChild(button);
    });
}

function selectOption(scores) {
    for (let char in scores) {
        userScores[char] += scores[char];
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    progressBar.style.width = `100%`;

    let sortedResults = Object.keys(userScores).map(char => {
        return { name: char, score: userScores[char] };
    }).sort((a, b) => b.score - a.score);

    const mainChar = characters[sortedResults[0].name];
    const maxPossibleScore = 30;
    const percentage = Math.min(Math.round((sortedResults[0].score / maxPossibleScore) * 100), 100);

    document.getElementById('result-img').src = mainChar.image;
    document.getElementById('result-name').innerText = mainChar.name;
    document.getElementById('result-percentage').innerText = `${percentage}% de compatibilidade`;
    document.getElementById('result-description').innerText = mainChar.description;

    const secondaryList = document.getElementById('secondary-list');
    secondaryList.innerHTML = '';
    
    for (let i = 1; i <= 3; i++) {
        const res = sortedResults[i];
        const charData = characters[res.name];
        const li = document.createElement('li');
        const pcent = Math.min(Math.round((res.score / maxPossibleScore) * 100), 100);
        li.innerHTML = `<span>${charData.name}</span> <span>${pcent}%</span>`;
        secondaryList.appendChild(li);
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    for (let char in userScores) {
        userScores[char] = 0;
    }
    resultContainer.classList.add('hidden');
    startScreen.classList.remove('hidden');
}
