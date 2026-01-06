/*
Exercício -
Complete a função squareSum.
Ela deve receber vários números, elevar cada um ao quadrado e depois somar todos esses valores.

Por exemplo, se os números forem [1, 2, 2], a função deve calcular o quadrado de cada número e somar tudo no final.
*/

function squareSum(numeros){
    let soma = 0;
    for(let contador = 0; contador < numeros.length; contador++){
        let pegandoOsnumeros = numeros[contador]
        let soma = soma + (pegandoOsnumeros * pegandoOsnumeros) //Vc vai multiplicar os numeros da do array com eles mesmo a cada volta.
    }
    return numeros
}
const listaNumeros = [1,2,2]
squareSum(listaNumeros)