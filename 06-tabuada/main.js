'use strict'

const criarListaNumeros = function(){
    let lista = []

    for(let i = 1; i <= 10; i++){
        lista.push(i)
    }
    return lista
}

const criarListaAdicao = function(quantidade){
    let lista = []

    for(let i = 1; i <= 10; i++){
        lista.push(Number(quantidade) + Number(i))
    }
    return lista
}

const criarListaSubtracao = function(quantidade){
    let lista = []
    

    for(let i = 1; i <= 10; i++){

        lista.push(quantidade - i)
    }
    return lista
}

const criarListaMultiplicacao = function(quantidade){
    let lista = []

    for(let i = 1; i <= 10; i++){
        lista.push(quantidade * i)
    }
    return lista
}

const criarListaDivisao = function(quantidade){
    let lista = []

    for(let i = 1; i <= 10; i++){
        lista.push(quantidade / i)
    }
    return lista
}

const gerar = function(){
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = ""
    let quantidade = document.getElementById('quantidade').value
    
    

    let pegarListaNumeros = criarListaNumeros()
    let pegarListaAdicao = criarListaAdicao(quantidade)
    let pegarListaSubtracao = criarListaSubtracao(quantidade)
    let pegarListaMultiplo = criarListaMultiplicacao(quantidade)
    let pegarListaDivisao = criarListaDivisao(quantidade)

    
    for(let i = 0; i < 10; i++){
        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        
        tr.append(td1, td2, td3, td4, td5)
        tabela.appendChild(tr)

        td1.textContent = pegarListaNumeros[i]
        td2.textContent = pegarListaAdicao[i]
        td3.textContent = pegarListaSubtracao[i]
        td4.textContent = pegarListaMultiplo[i]
        td5.textContent = pegarListaDivisao[i].toFixed(2)

    }


}

console.log(criarListaAdicao(10))