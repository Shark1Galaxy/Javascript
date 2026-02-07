/*
Escreva um algoritmo que receba um vetor e mova todos os zeros para o final, preservando a ordem dos demais elementos.

Entrada
[false,1,0,1,2,0,1,3,"a"]

Processo
Aqui é criar um loop, onde ele vai pecorrer todo o array. assi mque encontrar o 0. ele ignora e passa pro proximo

Saida
[false,1,1,2,1,3,"a",0,0]
*/


function moveZeros(arr) {
    let arrayVazia = []
  for(let position in arr){
    if(arr[position] !== 0 || arr[position] === false){
        arrayVazia.push(arr[position])
        }
    }
    while(arrayVazia.length < arr.length){ //Se o tamanho do arrayVazia que é 7 < 9 for menor que o tamanho do arr que e´9. vamos adicionar 0
        arrayVazia.push(0)
    }

  return arrayVazia
}
const resultado = moveZeros([false,1,0,1,2,0,1,3,"a"])
console.log(resultado)