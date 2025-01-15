// Criando os Valores das moedas
const USD = 6.09;
const EUR = 6.24;
const GBP = 7.38;
// Obtendo os elementos do Formulario.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");
// manipulando o input amount para receber apenas números
amount.addEventListener("input", () =>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "");
} )

// Captando o evento de submit (enviar) do formulario.
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
        default:
            alert("Selecione uma moeda.");
            break;
    }   
}

// Função para converter a moeda.
 function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        // Calcula o total
        let total = amount * price;

        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "");

        // Exibe o resultado total
        result.textContent = `${total} Reais`
        // Aplica a calsse de exibe o footer para mostrar o resultado.
        footer.classList.add("show-result");
    }   catch (error) {        
        footer.classList.remove("show-result");
        alert("Não foi possivel converter, tente novamente.");
    }

 }

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}
