let palavraSecreta = ''; 
let letrasErradas = [];
let letrasCorretas = [];
let vidas = 5;

const respostaContainer = document.getElementById('palavra-container');
const btnAdivinhar = document.getElementById('btn-adivinhar');
const cardJogo = document.querySelector('.card-shadow'); 

// --- EFEITOS VISUAIS ---
function efeitoErro() {
    cardJogo.classList.add('animate-shake');
    setTimeout(() => cardJogo.classList.remove('animate-shake'), 500);
}

const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    .animate-shake { animation: shake 0.2s ease-in-out 0s 2; border-color: #ef4444 !important; }
`;
document.head.appendChild(style);


// --- LÓGICA DO JOGO ---
async function buscarCharadas() {
    try {
        const baseUrl = 'https://api-de-charadass.vercel.app';
        const endpoint = "/charadas/aleatoria";
        const respostaApi = await fetch(baseUrl + endpoint);
        const dados = await respostaApi.json();
        console.log(dados)
        palavraSecreta = dados.resposta.toUpperCase();
        document.getElementById('pergunta-desafio').textContent = dados.pergunta;

        desenharPalavra();
        atualizarVidas();

    } catch (error) {
        document.getElementById('pergunta-desafio').textContent = "Erro ao conectar com o servidor";
        console.error("Erro na busca:", error);
    }
}


// função que senha a palavra na tela (tanto no inicio - oculta. como ao decorrer das letras digitadas - ' _ M _ R') 
function desenharPalavra() {
    let exibicao = "";
    for (let letra of palavraSecreta) {
        if (letra === " ") {
            exibicao += "  "; 
        } else if (letrasCorretas.includes(letra)) {
            exibicao += letra + " ";
        } else {
            exibicao += "_ ";
        }
    }
    respostaContainer.textContent = exibicao;
    return exibicao;
}

// função que analise se a letra digitada está correta, quando a pessoa digita algo ('keydwon')
window.addEventListener('keydown', (evento) => {
    const letra = evento.key.toUpperCase();
    
    // ignora se não for letra de A-Z (ignora se for numeros) ou se já foi digitada
    if (!/^[A-ZÀ-Ÿ]$/.test(letra) || evento.key.length > 1) return;
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    // confere se a letra digitada esta correta (contem na palavra)
    if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
    } else {
        letrasErradas.push(letra);
        vidas -= 1;
        efeitoErro(); // Ativa o tremor visual
    }

    const textoAtual = desenharPalavra();
    atualizarVidas();
    verificarFimDeJogo(textoAtual);
});

// função que atualiza as vidas
function atualizarVidas() {
    const container = document.getElementById('vidas-container');
    container.textContent = "❤️".repeat(vidas) + "🖤".repeat(5 - vidas); 
}

// função que identifica o fim do jogo
function verificarFimDeJogo(textoNaTela) {
    if (vidas <= 0) {
        setTimeout(() => {
            alert("GAME OVER! 💀 A resposta era: " + palavraSecreta);
            location.reload();
        }, 100);
    } else if (!textoNaTela.includes("_") && palavraSecreta !== "") { // se n tiver o tracinho (na teoria completa) e se a palavra seceta n estiver vazia
        setTimeout(() => {
            alert("PARABÉNS! 🎉 Você é um gênio!");
            location.reload();
        }, 100);
    }
}

// função do botão adivinhar
btnAdivinhar.addEventListener('click', () => {
    const chute = prompt("Qual é a sua resposta?").toUpperCase();
    if (!chute) return;

    if (chute === palavraSecreta) {
        alert("NA MOSCA! 🎯");
        location.reload();
    } else {
        alert("ERROU! Perdeu 2 vidas! ❌");
        vidas -= 2;
        if (vidas < 0) vidas = 0;
        efeitoErro();
        atualizarVidas();
        verificarFimDeJogo(desenharPalavra());
    }
});

// Inicialização
iniciarJogo();
function iniciarJogo() {
    buscarCharadas();
}