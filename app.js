function sum (a, b) {
    return a+b;
}
console.log(sum(7,3));



const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares

    let valueInDollar = valueInEuro * 1.2;

    return Number(valueInDollar.toFixed(2));
}

// let oneEuroIs = {
    //     "JPY": 127.9, // japan yen
    //     "USD": 1.2, // us dollar
    //     "GBP": 0.8, // british pound
    // }


const fromDollarToYen = (valueInDollar) => {
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * 154.1;
    // retornamos el valor
    return Number(valueInYen.toFixed(2));

}

const fromYenToPound = (valueInYen) => {
    // convertimos el valor a yenes
    let valueInPound = valueInYen * 159.9;
    // retornamos el valor
    
    return Number(valueInPound.toFixed(2));
    
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };