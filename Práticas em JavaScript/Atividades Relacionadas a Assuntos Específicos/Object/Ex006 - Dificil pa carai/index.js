/*
6. Bubble Sort  
Escreva um algoritmo Bubble Sort em JavaScript.  
Observação: Bubble Sort é um algoritmo de ordenação simples que percorre a lista repetidamente, 
comparando elementos adjacentes e trocando-os se estiverem na ordem errada. 

Dados de exemplo: 
Entrada 
[6, 4, 0, 3, -2, 1]  

Processo

Saída esperada:  
[-2, 0, 1, 3, 4, 6
*/
function corrigindoOrdem(arr) {
  for (let indice = 0; indice < arr.length - 1; indice++) {
    for (let indice2 = 0; indice2 < arr.length - 1; indice2++) {
      if (arr[indice2] > arr[indice2 + 1]) {
        let temporaria = arr[indice2];
        arr[indice2] = arr[indice2 + 1];
        arr[indice2 + 1] = temporaria;
      }
    }
  }
  return arr;
}

const resultado = corrigindoOrdem([6, 4, 0, 3, -2, 1]);
console.log(resultado);
