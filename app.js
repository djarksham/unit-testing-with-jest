// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

/*function fromEuroToDollar (a){
    return a * oneEuroIs.USD;
}*/

function fromDollarToYen (a){
    let yen = fromEuroToDollar(a) * oneEuroIs.JPY;
    return yen;
}

function fromYenToPound (a){
    let pound = fromDollarToYen(a) * oneEuroIs.GBP;
    return pound;
}

console.log(fromEuroToDollar(10))
console.log(fromDollarToYen(10))
console.log(fromYenToPound(10))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};