/*
Operadores de comparação
> maior que
< menor que
>= maior ou igual
<= menor ou igual
== igualdade (valor)
=== igualdade estrita (valor e o tipo)
!= diferente (valor)
!== diferente estritamente (valor e tipo)

Todas elas me retornam true ou false. pois sãos comparações
*/


const valorUm = 10;
const valorDois = 5;
const valorTreis = '10'; // string, não é number

// Maior que (>)
console.log(valorUm > valorDois); // true → 10 é maior que 5

// Menor que (<)
console.log(valorUm < valorDois); // false → 10 não é menor que 5

// Maior ou igual (>=)
console.log(valorUm >= valorDois); // true → 10 é maior que 5

// Menor ou igual (<=)
console.log(valorUm <= valorDois); // false → 10 não é menor nem igual a 5

// Igualdade NÃO estrita (==)
// Compara apenas o valor, ignora o tipo
// O JavaScript converte a string '10' em number
console.log(valorUm == valorTreis); // true

// Igualdade estrita (===)
// Compara valor E tipo
// Number é diferente de string
console.log(valorUm === valorTreis); // false

// Diferente NÃO estrito (!=)
// Compara apenas o valor
// Como 10 == '10', então NÃO é diferente
console.log(valorUm != valorTreis); // false

// Diferente estrito (!==)
// Compara valor E tipo
// Number é diferente de string
console.log(valorUm !== valorTreis); // true
