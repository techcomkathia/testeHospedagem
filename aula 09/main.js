let vitoriaJogador = 0
let vitoriaComputador = 0
let empate = 0

const imgDadosJogador =[
    "imagens/dadoVermelho1.png",
    "imagens/dadoVermelho2.png",
    "imagens/dadoVermelho3.png",
    "imagens/dadoVermelho4.png",
    "imagens/dadoVermelho5.png",
    "imagens/dadoVermelho6.png"
]

const imgDadosComputador= [
    "imagens/dadoPreto1.png", // 0
    "imagens/dadoPreto2.png", // 1
    "imagens/dadoPreto3.png", // 2
    "imagens/dadoPreto4.png", // 3
    "imagens/dadoPreto5.png", // 4
    "imagens/dadoPreto6.png"  // 5
]


function sortear(){
    let tamanho = imgDadosComputador.length
    return Math.floor(Math.random()*tamanho)
}

function gerarDados(){
    //gera um array numérico de 0 a 5
    return [
        sortear(),
        sortear(),
        sortear()
    ]
}

//necessita de um array como parâmetro

function somarDados(arrayNumerico){

    // let soma = 0
    // for(num of arrayNumerico){
    //     soma += num+1
    // }

    // return
    return arrayNumerico.reduce((soma,numero)=>soma +(numero+1),0)
}

function verificarGanhador( pontosJogador, pontosComputador){
    //verifica ganahdor e atribui um texto
    // ao final insere o texto na div responsável pele exibição 
    //do resultado
    let texto = ''
    if (pontosJogador > pontosComputador) {
        texto = ` Você ganhou com ${(pontosJogador - pontosComputador)} pontos de diferença` 

        vitoriaJogador +=1
     

    } else if(pontosComputador > pontosJogador) {
        texto = ` Você pedeu com ${(pontosComputador - pontosJogador)} pontos de diferença` 

        vitoriaComputador +=1
        
    }else{
        texto = `EMPATE! Você e o computador fizeram ${pontosComputador} pontos`
       
    }

    // usando a div 
    document.getElementsByClassName('resultado')[0].innerHTML = `<p> ${texto}</p>`

    //usando o parágrafo 
    // document.getElementById('ganhador').innerHTML = texto
}


function mostrarDados(dComputador, dJogador){
    //Elementos HTML das imagens dos dados jogador
    dadoJ1 = document.getElementById("dadoJ1")
    dadoJ2 = document.getElementById("dadoJ2")
    dadoJ3 = document.getElementById('dadoJ3')

    //Elementos HTML das imagens dos dados jogador
    dadoC1 = document.getElementById("dadoC1")
    dadoC2 = document.getElementById("dadoC2")
    dadoC3 = document.getElementById('dadoC3')


    //alterando o SRC dos dados

    //dados computador
    dadoC1.src = imgDadosComputador[dComputador[0]]
    dadoC2.src = imgDadosComputador[dComputador[1]]
    dadoC3.src = imgDadosComputador[dComputador[2]]

    //dados jogador
    dadoJ1.src = imgDadosJogador[dJogador[0]]
    dadoJ2.src = imgDadosJogador[dJogador[1]]
    dadoJ3.src = imgDadosJogador[dJogador[2]]

}


function iniciarJogo(){
    //cria um array de números (índices) para os dados
    let arrayJogador= gerarDados() // [n1,n2,n3]
    let arrayComputador=gerarDados() // [n1,n2,n3]
    //usando os arrays de números (índices) monta as imagens dos dados
    mostrarDados(arrayJogador,arrayComputador)
    //soma pontos do array de números ( índice +1 ) e retorna o total de pontos por jogador
    let pontosJogador= somarDados(arrayJogador)
    let pontosComputador=somarDados(arrayComputador)
    //verificaGanhador e retorna o resultado
    verificarGanhador(pontosJogador, pontosComputador)

    // usando a div para exibir o total de vezes que o jogador ganhou
    document.getElementsByClassName('resultado')[0].innerHTML += `<p> você ganhou ${vitoriaJogador} ${(vitoriaJogador<=1 ? "rodada": "rodadas")}</p>`
}



const btnJogar = document.getElementById("jogar")

btnJogar.addEventListener("click", iniciarJogo)


