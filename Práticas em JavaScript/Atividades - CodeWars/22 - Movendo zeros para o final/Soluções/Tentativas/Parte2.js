/*
Escreva um algoritmo que receba um vetor e mova todos os zeros para o final, preservando a ordem dos demais elementos.

moveZeros( // returns
ENTRADA
[false,1,0,1,2,0,1,3,"a"])

Processo
1 - Bom, ele quer pegar os zeroso que ficam dentro desse array e jogar no ulitmo
2 - Vamos primeiro filtar os valores que não são zero ou seja diferentes !==. bom eu vou usar o operador ... para pegar do final ao começo todos os elemento do array todos sos valores. sem precisar usar um loop pra isso.

Saida
[false,1,1,2,1,3,"a",0,0]
*/


function moveZeros(arr) {
    return [
        ...(arr.filter(numeros => numeros !== 0)),
        ...(arr.filter(numeros => numeros === 0))
    ]
}
const resultado = moveZeros([false,1,0,1,2,0,1,3,"a"])
console.log(resultado)