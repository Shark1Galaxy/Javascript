/*
Complete a função que recebe dois números inteiros (a, b, onde a < b) e retorna um array/lista com todos os números inteiros entre os parâmetros de entrada, incluindo os próprios valores.

Por exemplo:
Entrada
a = 1
b = 4

Processo
1 - Preciamos entregar os valores dentro do parametro - V
2 - Precisamos criar uma forma de ele loopar, até o final de 4, pois ele fala que a < 4 LOGO, intendesse que seria, um loop. até o 4 - V
3 - Precisamos armazenar eses valores dentro de uma lista. precisamos criar uma array vazia, para receber os valores. 

Saida
→ [1, 2, 3, 4]


*/
function between(a, b) {
    let arrayValores = [];
  for(let contador = a; contador <= b; contador++){
    arrayValores.push(contador);
  }
  return arrayValores
}
between(1,4)
