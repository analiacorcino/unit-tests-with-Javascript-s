// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

        // esperamos que la suma de esos 2 números sea 23
        expect(total).toBe(23);
    });

test("One euro should be 1.206 dollars", function(){
     // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
        
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.20); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    expect(fromEuroToDollar(14.9)).toBe(17.88);
    expect(fromEuroToDollar(700.3)).toBe(840.36);
});

// let oneEuroIs = {
    //     "JPY": 127.9, // japan yen
    //     "USD": 1.2, // us dollar
    //     "GBP": 0.8, // british pound
    // }


// cambiar los numeros a estos dos test

test("One dollar should be 154,1 yen", function(){
    // importo la funcion desde app.js
   const { fromDollarToYen } = require('./app.js')
       
   // hago mi comparacion (la prueba)
   expect(fromDollarToYen(3.5)).toBe(539.35); //1 dolar son 154,1 yenes, entonces 3.5 dolares deberian ser = (3.5 * 154,1)
   expect(fromDollarToYen(14.9)).toBe(2296.09);
   expect(fromDollarToYen(700.3)).toBe(107916.23);
});




test("159.9 yen should be one pound", function(){
    // importo la funcion desde app.js
   const { fromYenToPound } = require('./app.js')
       
   // hago mi comparacion (la prueba)
   expect(fromYenToPound(3.5)).toBe(559.65); //1 pound son 159.9 yenes, entonces 3.5 pound deberian ser = (3.5 * 159.9)
   expect(fromYenToPound(14.9)).toBe(2382.51);
   expect(fromYenToPound(700.3)).toBe(111977.97);
});