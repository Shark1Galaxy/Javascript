/*
Exercício -
Complete a função squareSum.
Ela deve receber vários números, elevar cada um ao quadrado e depois somar todos esses valores.

Por exemplo, se os números forem [1, 2, 2], a função deve calcular o quadrado de cada número e somar tudo no final.
*/
const numeros = [1,2,2]
function squareSum(numbers){
  let soma = 0; // Variável para armazenar a soma dos quadrados
  for(let contador = 0; contador < numbers.length; contador++){
    let contando = numbers[contador] // Variável para pegar o valor atual do array em cada iteração do lopp
    soma = soma + (contando * contando) // Soma o quadrado do valor exemplo 2x2 = 4 - 1x1 = 2 e soma = soma + o resultado de (contador * contador)
  }
  return soma // Retorna o resultado final após o loop
}
console.log(squareSum(numeros))

// Entrada
// Array = [1,2,2] para percorrer o array com os dados

// Processo
// 1 x 1 + 2 x 2 + 2 x 2 = 9

// Saída
// 9