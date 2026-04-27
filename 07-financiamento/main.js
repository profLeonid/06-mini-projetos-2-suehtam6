'use strict'

const criarListaMeses = function(parcela){
    let lista = []
    for(let i = 1; i <= parcela;i++){
        lista.push(i)
    }

    return lista
}

const criarListaValorParcela = function(valorTotal, parcela){
   return valorTotal / parcela
}

const criarListaJurosDoMes = function(saldoDevedor, juros){
    
    return saldoDevedor * (juros/100)
    
}

const criarListaTotalMes = function(parcela, juros){
    return parcela + juros
}

const criarListaSaldoDevedor = function(valorTotal, parcelaMensal){
    return valorTotal - parcelaMensal
}

const gerar = function(){
    let tabela = document.getElementById('tabela')
    tabela.innerHTML = ""


    let valorTotal = document.getElementById('valorTotal').value
    let juros = document.getElementById('juros').value
    let parcela = document.getElementById('parcelas').value

    let meses = criarListaMeses(parcela)
    let saldoDevedor  = valorTotal


    
    for(let i = 0; i < parcela; i++){
        const tr = document.createElement("tr")

        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        let jurosMes = criarListaJurosDoMes(saldoDevedor, juros)
        let valorParcela = criarListaValorParcela(valorTotal, parcela)
        let parcelaMensal = criarListaTotalMes(valorParcela, jurosMes)
        
        saldoDevedor = criarListaSaldoDevedor(saldoDevedor, valorParcela)
    
        tr.append(td1, td2, td3, td4, td5)
        tabela.appendChild(tr)

        td1.textContent = meses[i]
        td2.textContent = `R$${valorParcela.toFixed(2)}`
        td3.textContent = `R$${jurosMes.toFixed(2)}`
        td4.textContent = `R$${parcelaMensal.toFixed(2)}`
        td5.textContent = `R$${saldoDevedor.toFixed(2)}`

    }


}
