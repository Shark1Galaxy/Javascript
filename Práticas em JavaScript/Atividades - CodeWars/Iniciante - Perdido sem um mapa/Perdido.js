/*
Dado um array de números inteiros, retorne um novo array com cada valor duplicado.

Por exemplo:

[1, 2, 3] --> [2, 4, 6]

Entrada
[1,2,3]

//Processo, 
// 1 criar uma loop par percorrer o array - Feito
// 2 Agora precisamos cirar uma forma de a cada vez que o loop voltar com o indicei do array. ele vai somar mais ele mesmo.
// Fizemos uma variavel fora, do loop, pois sempre que o x[pos], ele retorna um dos valores do array, ele vai armazenar dentro de armazemDados. e valor que é uma variavel vazia.push, vai receber o valor atual do loop * 2, dando os eu dobro.

Saida
[2,4,6] - ou seja, a cada vez que o numero aparecer,ele se multiplica
*/
function maps(x){
    let valor = [];
    for(let pos in x){
        let armazemDados = x[pos];
        valor.push(armazemDados * 2);
    }
    return valor
}
let arrayValores = [1,2,3];
maps(arrayValores)