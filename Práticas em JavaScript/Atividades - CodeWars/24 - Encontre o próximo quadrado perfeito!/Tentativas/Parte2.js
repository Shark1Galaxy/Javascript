const findNextSquare = sq =>
  Number.isInteger(Math.sqrt(sq))
    ? (Math.sqrt(sq) + 1) ** 2
    : -1;

// Funcionamento:
// Um número é considerado um quadrado perfeito quando sua raiz quadrada é um número inteiro
// (ou seja, não possui casas decimais).
// Primeiro, calculamos a raiz quadrada de `sq`.
// Se essa raiz for inteira, então `sq` é um quadrado perfeito.
// Nesse caso, somamos 1 à raiz e elevamos ao quadrado para obter o próximo quadrado perfeito.
// Caso a raiz não seja inteira, retornamos -1.

console.log(findNextSquare(121));