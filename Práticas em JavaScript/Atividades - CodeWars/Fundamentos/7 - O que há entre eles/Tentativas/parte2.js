/*
Complete a função que recebe dois inteiros ( a, b, onde a < b) e retorna um array contendo todos os inteiros entre os parâmetros de entrada, incluindo -os.

Por exemplo:

Entrada
a = 1
b = 4

Saida
[1, 2, 3, 4]
*/

function between(a,b) {
  let arrayValores = [];
  for(let contador = a; contador <= b; contador++){
    arrayValores.push(contador)
  }
  return arrayValores
}
between(1,4)