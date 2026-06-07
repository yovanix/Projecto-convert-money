const convertbutton = document.querySelector("button");
const currencyselect = document.querySelector(".currency-select");
function convertvalue() {
    const inputCurrencyValue = document.querySelector(".currency-input").value;

    const Real = document.querySelector(".currency-value-to-convert");

    const Dolar = document.querySelector(".currency-value");

    console.log(currencyselect.value);

    const DolarToday = 5.25;
    const EuroToday = 5.97;
    const PesoToday = 0.0036 ;
    const BitcoinToday = 319.513; 51;
    const libraToday = 6.89;

    if (currencyselect.value == "Dolar") {

        Dolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday);


    }

    if (currencyselect.value == "Euro") {
        Dolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday);

    }

    if (currencyselect.value == "Peso") {
        Dolar.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / PesoToday);

    }
    if (currencyselect.value == "Bitcoin") {
        Dolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinToday);

        if (currencyselect.value == "Libra") {
            Dolar.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday);
        }


    }


    Real.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);



}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");

    if (currencyselect.value == "Dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";
    }

    if (currencyselect.value == "Euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }
    if (currencyselect.value == "Peso") {
        currencyName.innerHTML = "Peso Argentino";
        currencyImage.src = "./assets/Argentina.png";
    }
    if (currencyselect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }
    if (currencyselect.value == "Libra") {
        currencyName.innerHTML = "Libra Esterlina";
        currencyImage.src = "./assets/libra.png";
    }
    convertvalue();
}

currencyselect.addEventListener("change", changeCurrency);
convertbutton.addEventListener("click", convertvalue);
