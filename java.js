const convertbutton = document.querySelector("button");
const convertButton = document.querySelector("button");
const fromSelect = document.querySelector(".currency-select-top");
const toSelect = document.querySelector(".currency-select");
const inputEl = document.querySelector(".currency-input");
const fromDisplay = document.querySelector(".currency-value-to-convert");
const toDisplay = document.querySelector(".currency-value");
const toCurrencyName = document.getElementById("currency-name");
const toCurrencyImage = document.querySelector(".currency-image");
const fromCurrencyImage = document.querySelector(".Arrow-img");

// Defina aqui as moedas e suas taxas relativas ao Real (BRL).
// A taxa significa: 1 unidade da moeda = X BRL.
const currencies = {
    BRL: { name: "Real Brasileiro", rate: 1, locale: "pt-BR", code: "BRL", img: "./assets/brasil 2.png" },
    USD: { name: "Dólar Americano", rate: 5.25, locale: "en-US", code: "USD", img: "./assets/Dolar.png" },
    EUR: { name: "Euro", rate: 5.97, locale: "de-DE", code: "EUR", img: "./assets/euro.png" },
    ARS: { name: "Peso Argentino", rate: 0.0036, locale: "es-AR", code: "ARS", img: "./assets/Argentina.png" },
    BTC: { name: "Bitcoin", rate: 319513.51, locale: "en-US", code: "BTC", img: "./assets/bitcoin.png" },
    GBP: { name: "Libra Esterlina", rate: 6.89, locale: "en-GB", code: "GBP", img: "./assets/libra.png" }
};

function populateSelects() {
    // Limpa e popula os selects a partir do objeto currencies
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";
    for (const key in currencies) {
        const opt1 = document.createElement("option");
        opt1.value = key;
        opt1.textContent = `${currencies[key].code} ${currencies[key].name}`;
        fromSelect.appendChild(opt1);

        const opt2 = document.createElement("option");
        opt2.value = key;
        opt2.textContent = `${currencies[key].code} ${currencies[key].name}`;
        toSelect.appendChild(opt2);
    }
    // Seleciona padrões (BRL -> USD)
    fromSelect.value = "BRL";
    toSelect.value = "USD";
}

function parseInputAmount(text) {
    if (!text) return 0;
    // Lida com formatos como 10.000,00 ou 10000.00
    const normalized = String(text).trim().replace(/\./g, "").replace(/,/g, ".");
    const n = parseFloat(normalized);
    return isNaN(n) ? 0 : n;
}

function formatCurrency(value, locale, code) {
    // Alguns códigos (como BTC) não são suportados por Intl para style: 'currency'.
    try {
        return new Intl.NumberFormat(locale, { style: "currency", currency: code }).format(value);
    } catch (e) {
        // Fallback simples
        return `${value.toFixed(8)} ${code}`;
    }
}

function convertValue() {
    const amount = parseInputAmount(inputEl.value);
    const fromKey = fromSelect.value;
    const toKey = toSelect.value;
    const from = currencies[fromKey];
    const to = currencies[toKey];
    if (!from || !to) return;

    // Converter: amount (from) -> BRL -> to
    const amountInBRL = amount * from.rate;
    const converted = amountInBRL / to.rate;

    fromDisplay.innerHTML = formatCurrency(amount, from.locale, from.code);
    toDisplay.innerHTML = formatCurrency(converted, to.locale, to.code);
}

function updateToInfo() {
    const toKey = toSelect.value;
    const to = currencies[toKey];
    if (!to) return;
    toCurrencyName.innerHTML = to.name;
    toCurrencyImage.src = to.img;
    // Atualiza imagem/label da moeda de origem também
    const fromKey = fromSelect.value;
    const from = currencies[fromKey];
    if (from && fromCurrencyImage) fromCurrencyImage.src = from.img;
    convertValue();
}

populateSelects();
fromSelect.addEventListener("change", updateToInfo);
toSelect.addEventListener("change", updateToInfo);
convertButton.addEventListener("click", convertValue);
inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") convertValue();
});
currencyselect.addEventListener("change", changeCurrency);
