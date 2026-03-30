'use strict'

function criarListaNumeros(quantidade) {
    let listaNumeros = []

    for (let i = 1; i <= quantidade; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaPar(quantidade) {
    let lista = []
    let qtdeDobro = (Number(quantidade) * 2)
    let cont = 0


    while (cont <= qtdeDobro) {
        if (cont % 2 == 0) {
            lista.push(cont)
        }
        cont++

    }
    return lista
}

function criarListaImpar(quantidade) {
    let lista = []
    let qtdeDobro = (Number(quantidade) * 2)
    let cont = 0


    while (cont <= qtdeDobro) {
        if (cont % 2 == 1) {
            lista.push(cont)
        }
        cont++

    }
    return lista
}

function criarMultiplosCinco(quantidade) {
    let cont = 0
    let lista = []
    let resultado

    while (cont <= quantidade) {
        resultado = cont * 5
        cont++
        lista.push(resultado)
    }
    return lista
}

console.log(criarMultiplosCinco(10))
