/*
/*
Escreva um algoritmo que receba um vetor e mova todos os zeros para o final, preservando a ordem dos demais elementos.

Entrada
[false,1,0,1,2,0,1,3,"a"]

Processo
Aqui é criar um loop, onde ele vai pecorrer todo o array. assi mque encontrar o 0. ele ignora e passa pro proximo

Saida
[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr){
    return[
        ...(arr.filter(numeroSemZero => numeroSemZero !== 0)),//Aqui ele está lendo o array como todo, do começo ao fim. e ta adicinado um filtro onde, caso o numero seja diferente de zero, ele vai jogar na tela
        ...(arr.filter(numerComZero => numerComZero === 0)) //Aqui caso o numero seja igual a 0 ele joga na teal
    ]
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
