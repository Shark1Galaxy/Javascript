/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
Você recebe um array (que terá comprimento de pelo menos 3, mas pode ser muito grande) contendo números inteiros. O array é composto inteiramente por números ímpares ou inteiramente por números pares, exceto por um único número inteiro N.

Escreva um método que receba o array como argumento e retorne esse número “fora do padrão” (outlier) N.

Exemplos
Entrada
[2, 4, 0, 100, 4, 11, 2602, 36] → 11
[160, 3, 1719, 19, 11, 13, -21] → 160

Processo
1 - CRIAR FUNÇÃO com parametro apra receber o array com os valores - V
2 - BOm, 1 precisaoms criar um loop, onde ele vai devolver cada valor dentro do array - V
3 - Agora, precisamos criar uma condição, onde ela vai verificar, se e numero é ou não é positivo -V
4 - Precisamos também eliminar todos os numeros negativos
5 - Bom, agora precisamos arrumar uma forma de tentar indetificar os padrões se todos os numeros. se exemplo, todos forem impar, ele vai me devolver o unico qeu seja o par e virse versa.

Saida
(11 é o único número ímpar)
(160 é o único número par)

*/



function findOutlier(integers) {
  const pares = integers.filter(n => n % 2 === 0);
  const impares = integers.filter(n => n % 2 !== 0);
  return pares.length === 1 ? pares[0] : impares[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))