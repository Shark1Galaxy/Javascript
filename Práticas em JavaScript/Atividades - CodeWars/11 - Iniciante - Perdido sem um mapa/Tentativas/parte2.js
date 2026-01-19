/*
Dado um array de números inteiros, retorne um novo array com cada valor duplicado.

Por exemplo:
Entrada
[1, 2, 3]

Processo
1 - Criar função com parametro - V
2 - Precisamos percorrer o array. e acada  vez que o umero desce on bloco, ele vai duplicoar e jogar em um array vazio - V
Saida
[2, 4, 6]
*/
function maps(x){
    let arrayValores = [];
    for(let position in x){
        arrayValores.push(x[position] * 2);
    }
    return arrayValores
}
maps([1,2,3])

