const convertbutton = document.querySelector("button");
const currencyselect = document.querySelector(".currency-select");
function convertvalue() {
    const inputCurrencyValue = document.querySelector(".currency-input").value;

    const Real = document.querySelector(".currency-value-to-convert");

    const Dolar = document.querySelector(".currency-value");

    console.log(currencyselect.value);

    const DolarToday = 5.25;
    const EuroToday =6.25;


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
    convertvalue();
}

currencyselect.addEventListener("change", changeCurrency);
convertbutton.addEventListener("click", convertvalue);
              