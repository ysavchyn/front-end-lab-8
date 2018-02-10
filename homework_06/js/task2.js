let amountEuro = parseFloat(prompt("Enter amount of EURO:")),
    amountUsd = parseFloat(prompt("Enter amount of USD:")),
    coefficientEuro = 33.4602,
    coefficientUsd = 27.1196,
    _EuroToUsd = (coefficientEuro / coefficientUsd).toFixed(3);

console.log(amountEuro + " euros are equal " + EuroToUah(amountEuro, coefficientEuro) + " UAH, " + amountUsd + " dollars are equal " + UsdToUah(amountUsd, coefficientUsd) + " UAH, one euro is equal " + _EuroToUsd + " dollars.");

function EuroToUah(amountEuro, coefficient) {
    return (amountEuro * coefficient).toFixed(0);
}

function UsdToUah(amountUsd, coefficient) {
    return (amountEuro * coefficient).toFixed(0);
}