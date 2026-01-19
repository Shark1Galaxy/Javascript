/*
Complete a função de soma dos quadrados** para que ela eleve ao quadrado cada número passado para ela e depois some todos os resultados.

Por exemplo, para `[1, 2, 2]`, ela deve retornar `9`, porque:
(1^2 + 2^2 + 2^2 = 1 + 4 + 4 = 9).

Entrada
[1,2,2]

Processo 
1 - Função criar - V

Saida
9


*/
function squareSum(numbers){
    let arrayValores = 0;
    for(let position in numbers){
       arrayValores += numbers[position] ** 2;
    }
    return arrayValores
}
squareSum([1,2,2])
