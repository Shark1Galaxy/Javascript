/*
Complete a função de soma dos quadrados** para que ela eleve ao quadrado cada número passado para ela e depois some todos os resultados.

Por exemplo, para `[1, 2, 2]`, ela deve retornar `9`, porque:
(1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9).

Entrada
[1,2,2]

Saida
9
*/

const squareSum = numbers => numbers.reduce((acumulador, valorAtual) => acumulador + (valorAtual ** 2),0)
console.log(squareSum([1,2,2]))