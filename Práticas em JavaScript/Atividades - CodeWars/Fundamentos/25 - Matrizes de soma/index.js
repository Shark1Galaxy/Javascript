/*
Escreva uma função que receba um vetor de números e retorne a soma desses números. Os números podem ser negativos ou não inteiros. Se o vetor estiver vazio, retorne 0.

Exemplos
Entrada: [1, 5.2, 4, 0, -1]
Saída:9.2

Entrada: []
Saída:0

Entrada: [-2.398]
Saída:-2.398
*/
function sum (numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}
console.log(sum([1, 5.2, 4, 0, -1]))