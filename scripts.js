let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")


async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/usd-brl,eur-brl").then(function(resposta){
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)



    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ DOLAR AMERICANO") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-us", { style: "currency", currency: "USD" })
    }


    if (select.value === "€ EURO") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("de-DE", {style: "currecy", currency:"EUR"})
}


inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

}

function trocaDeMoeda() {
    let textoMoedas = document.getElementById("textp-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ DOLAR AMERICANO") {
        textoMoedas.innerHTML = "DOLAR AMERICANO"
        bandeiraMoedas.src = "./img/eua.png"
    }

    if (select.value === "€ EURO") {
        textoMoedas.innerHTML = "EURO"
        bandeiraMoedas.src = "./img/euro.png"
    }
    converterMoedas()
}


botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)