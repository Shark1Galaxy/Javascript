/*
Crie uma função que receba um número inteiro como argumento e retorne "Even" para números pares ou "Odd" para números ímpares.

Entrada
2
3

Processo 
1- Bom, como sabemos, quando dividimos o numero por 2 caso sobre, ele retona 0. logo é par, se sobrou na divisão, signifca que é impar
2 - Criar função com parametro para receber o valor  - V
3 - 

Saida
par
impar
*/

const evenOrOdd = (number) => {return number % 2 === 0 ? 'Even' : 'Odd';}
evenOrOdd()