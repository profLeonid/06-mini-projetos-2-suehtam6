'use strict'

const criarListaNumeros = function(quantidade) {
    let listaNumeros = []

    for (let i = 1; i <= quantidade; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

const criarListaPar = function(quantidade) {
    let lista = []
    let qtdeDobro = (Number(quantidade) * 2)
    let cont = 1


    while (cont <= qtdeDobro) {
        if (cont % 2 == 0) {
            lista.push(cont)
        }
        cont++

    }
    return lista
}

const criarListaImpar = function(quantidade) {
    let lista = []
    let qtdeDobro = (Number(quantidade) * 2)
    let cont = 1


    while (cont <= qtdeDobro) {
        if (cont % 2 == 1) {
            lista.push(cont)
        }
        cont++

    }
    return lista
}

const criarMultiplosCinco = function(quantidade) {
    let cont = 1
    let lista = []
    let resultado

    while (cont <= quantidade) {
        resultado = cont * 5
        cont++
        lista.push(resultado)
    }
    return lista
}

const criarListaPotencia = function(quantidade){
    let potecia = 2
    let lista   = []
    let resultado
    for(let i = 0; i < quantidade; i++){
       resultado = potecia**i
        lista.push(resultado)
        
    }
    return lista

}

function gerar(){
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = ""
    let quantidade = document.getElementById('quantidade').value
    
    

    let pegarListaNumeros = criarListaNumeros(quantidade)
    let pegarListaPar = criarListaPar(quantidade)
    let pegarListaImpar = criarListaImpar(quantidade)
    let pegarListaMultiploDeCinco = criarMultiplosCinco(quantidade)
    let pegarListaPotencia = criarListaPotencia(quantidade)

    
    for(let i = 0; i < quantidade; i++){
        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        
        tr.append(td1, td2, td3, td4, td5)
        tabela.appendChild(tr)

        td1.textContent = pegarListaNumeros[i]
        td2.textContent = pegarListaPar[i]
        td3.textContent = pegarListaImpar[i]
        td4.textContent = pegarListaMultiploDeCinco[i]
        td5.textContent = pegarListaPotencia[i]

    }


}
