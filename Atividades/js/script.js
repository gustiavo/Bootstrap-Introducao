// procedimento nome(){
//     var temp
//     processo 
//     escreval temp
// }

const botao = document.querySelector("#botaoTema")
// addEventListener = adicionar um "ouvidor" de eventos
botao.addEventListener('click',modo)

function modo(){
    // document = HTML // querySelector = selecionar elementos        
    let body = document.querySelector("body")
    let atualTemaClaro = document.querySelector("#atualTemaClaro")
    let atualTemaEscuro = document.querySelector("#atualTemaEscuro")

    if(botao.checked){
        //setAttribute (atributo,valor)
        body.setAttribute("data-bs-theme","dark")
        temaAtualClaro.style.display = "none"
        temaAtualEscuro.style.display = "block"
    } else{
        body.setAttribute("data-bs-theme", "light")
        temaAtualClaro.style.display = "block"
        temaAtualEscuro.style.display = "none"

    }

}