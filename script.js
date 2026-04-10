// capturando os elementos html
const cardInner = document.getElementById('card-inner')
const campoPergunta = document.getElementById('pergunta')
const campoResposta = document.getElementById('resposta')
const btnNova = document.getElementById('btn-nova')

// evento que faz o card girar
cardInner.addEventListener('click', function girar() {
    cardInner.classList.toggle('[transform:rotateY(180deg)]')
})

// função que irá buscar as charadas no backend
async function buscarCharadas() {
    try{
        const baseUrl = 'https://api-de-charadass.vercel.app'
        const endpoint = "/charadas/aleatoria"

        const respostaApi = await fetch(baseUrl+endpoint)

        const dados = await respostaApi.json()
        console.log(dados)

        campoPergunta.textContent = dados.pergunta 
        campoResposta.textContent = dados.resposta

    } catch(error){
        campoPergunta.textContent = "Error ao conectar com o servidor";
        console.error("Erro na busca:", error);
    }
}

buscarCharadas()

btnNova.addEventListener('click', () => {
    // remove a rotação para garantir que o card volte para a frente
    cardInner.classList.remove('[transform:rotateY(180deg)]');
    
    // chama a função para buscar a nova charada
    buscarCharadas();
});

