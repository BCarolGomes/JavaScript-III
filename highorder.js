// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    let n1 = [];

    for (let n2 = 0; n2 <numeros.length; n2++) {
        n1.push(numeros[n2] * 2);
    }
    return n1;
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    let n1 = 0;

    for(let n2 = 0; n2 < numeros.length; n2++){
        n1 += numeros[n2]
    }
    return n1
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    let numPares = [];
    
    for (let n1 of n2) {
        if (n1 % 2 ===0) {
            numPares.push(n1);
        }
    }
    return numPares;
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};