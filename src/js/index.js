

// Objetivo- quando clicarmos na aba , temos que monstar o
//  conteudo da aba que foi clidada pelo usuario
//   e esconder o conteudo da aba anterior.

//   passo 1 - dar um jeito de pegar os elementos
//    que representam as abas no html .

//    passo 2 - dar um jeito de indentificar o clique 
//    no elemento da aba .

//    passo 3 - quando o usuario clicar, desmarcar
//    a aba selecionada.

//    passo 4 - marcar a aba clicada como selecionada .

//    passo 5 - esconder o conteudo anterior.

//    passso 6 - monstrar o conteudo da aba selecionada.


// passo 1 - dar um jeito de pegar os elementos  que representam as abas no html .
// console.log(document.querySelectorAll (".aba"));
const abas = document.querySelectorAll (".aba");
// console.log(abas);

// passo 2 - dar um jeito de indentificar o clique no elemento da aba .
abas.forEach(aba => {

    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionada")){
            return
        }
        selecionarAba(aba)
        mostrarInformacao(aba)
    })
})

function selecionarAba(aba){
    // passo 3 - quando o usuario clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionada")
    // console.log(abaSelecionada);
    abaSelecionada.classList.remove("selecionada");

    // passo 4 - marcar a aba clicada como selecionada.
    aba.classList.add("selecionada");
}
  
function mostrarInformacao(aba){    
    // passo 5 - esconder o conteudo anterior
     const informacaoSelecionada = document.querySelector(".informacao.selecionada")
     // console.log(informacaoSelecionada)
     informacaoSelecionada.classList.remove("selecionada");

    //    passso 6 - monstrar o conteudo da aba selecionada.
    const idDoElementoDaInformacaoDaAba = `informacao-${aba.id}`
    // console.log(idDoElementoDaInformacaoDaAba)

    const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDaAba)
    informacaoASerMostrada.classList.add("selecionada") 
}