//Crie uma função que receba um número inteiro como argumento e retorne verdadeiro "Even"para números pares ou "Odd"falso para números ímpares.

//Entrada
//Crie uma função com o nome evenOrOdd
//Receba um numero inteiro 

//Processo
// Caso, dentro da divisão por 2, sobre 0 (number % 2 === 0),
// significa que o número é par.
// Caso contrário, é ímpar.
//Um número par é aquele que pode ser dividido por 2 sem sobrar nada.

//Saida
// e retorne verdeiro Even if
//caso não , falso, Odd

function evenOrOdd(number) {
  if(number % 2 === 0){
    return 'Even';
  } else {
    return 'Odd';
  }
}
evenOrOdd();