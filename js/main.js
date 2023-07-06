///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

//definimos uma constante que robotron vai ser o mesmo que document.querySelector
const robotron = document.querySelector("#robotron")

    //   Escutador de eventos:
    //    Precisa informar em qual elemento ocorrerá o evento de clicar
    //    E após isso devemos falar o que irá fazer após o "click"
    //   (Após Clicar na imagem do robô sera executado no console(F12) uma mensagem)
    



                                   //Função anônima , Só sera executada quando o evento do click na imagem for disparado   
                                   //Nas ultimas versões do js , podemos substituir uma função anônimas por arrow fuction () => que terá o mesmo impacto                 
robotron.addEventListener('click',  () => {
    console.log('Não enconste na minha armadura, humano')
}) 



function dizOi(nome) {
    console.log("Olá " + nome )
    console.log("Seja bem vindo ao Robotron")
}

dizOi("Cauan")
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Manipular para que todos os outros recebam a mesma função de adicionar ou remover itens para o "robo"
const controle = document.querySelectorAll("[data-controle]")

// Iremos pegar todos os elementos que estao com o data-atributte estatisticas e iremos dar a ele um evento
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
     }

//Funcionará de forma dinamica para todos os elementos (sem ter que fazer um por um no código)
// de forma simples, toda vez que houver um clique irá realizar tal função
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle ){
    const peca = controle.querySelector(".controle-contador")
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    }
    else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){ 
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
    }
    )

}