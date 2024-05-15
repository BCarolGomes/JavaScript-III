// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  let soma = 0;
  for (let n1 = 1; n1 <= n; n1++) {
    soma += n1;
  }
  return soma;
}

// Verifica se um número é par
function ehPar(number) {
  return number % 2 === 0;
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
} else {
    return fibonacci(n - 1) + fibonacci(n - 2);
}
}

module.exports = { somaNumeros, ehPar, fibonacci };