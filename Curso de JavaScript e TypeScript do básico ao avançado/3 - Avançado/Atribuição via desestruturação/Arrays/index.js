// =======================================================
// REST (...) – usado para AGRUPAR o restante dos valores
// =======================================================

// Array original de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Desestruturação do array:
// - Os três primeiros valores são atribuídos a variáveis
// - O restante dos valores é agrupado no array "resto"
const [
  primeiroNumero,
  segundoNumero,
  terceiroNumero,
  ...resto
] = numeros;

// Exibe os valores desestruturados
console.log(
  primeiroNumero,   // 1
  segundoNumero,    // 2
  terceiroNumero,   // 3
  resto              // [4, 5, 6, 7, 8, 9]
);

// =======================================================
// ARRAYS MULTIDIMENSIONAIS (array dentro de array)
// =======================================================

// Estrutura do array:
// indice externo →    0        1            2
//                     ↓        ↓            ↓
// indices internos  0 1 2    0 1 2      0   1  2
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]
];

// Acessando o valor 6:
// - numeros2[1]  → [4, 5, 6]
// - numeros2[1][2] → 6
console.log(numeros2[1][2]); // 6

// =======================================================
// DESESTRUTURAÇÃO DE ARRAYS MULTIDIMENSIONAIS
// =======================================================

// Mesmo array, mas agora usando desestruturação
const numeros3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Cada sub-array é atribuído a uma variável
const [lista1, lista2, lista3] = numeros3;

// Acessa o valor 9:
// - lista3 → [7, 8, 9]
// - lista3[2] → 9
console.log(lista3[2]);
