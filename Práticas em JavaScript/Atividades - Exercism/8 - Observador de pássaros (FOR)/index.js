/*
1. Determinar o número total de pássaros observados até agora
Vamos começar analisando os dados de forma geral. Descubra quantos pássaros você contou no total desde que começou os registros.

Implemente uma função totalBirdCount que receba um objeto semelhante a um array contendo a contagem de pássaros por dia. Ela deve retornar o número total de pássaros observados.

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount(birdsPerDay);
// => 34
*/



export function totalBirdCount(){
    let soma = 0;
    const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
    for(let position in birdsPerDay){
       soma += birdsPerDay[position]
    }
    return soma
}
console.log(totalBirdCount());

/*
2. Calcular o número de pássaros visitantes em uma semana específica

Agora que você já tem uma noção geral dos números, quer fazer uma análise mais detalhada.

Implemente uma função birdsInWeek que receba um objeto semelhante a um array com a contagem diária de pássaros e um número da semana. Ela deve retornar o número total de pássaros observados naquela semana específica. Você pode assumir que as semanas sempre são registradas completamente.


Entrada
[2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

Saida
12

// => 12
*/
export function birdsInWeek(valor){
    return totalBirdCount() / valor - 5
}
console.log(birdsInWeek(2));
/*
Corrigir um erro de contagem

Você percebeu que, durante todo o tempo em que estava observando os pássaros, havia um deles escondido em um canto distante do jardim. Você descobriu que esse pássaro sempre aparecia a cada dois dias no seu jardim. Você não sabe exatamente onde ele estava nos dias intermediários, mas com certeza não estava no seu jardim. Sua intuição de observador também diz que esse pássaro estava presente no primeiro dia registrado na lista.

Com essa nova informação, escreva uma função fixBirdCountLog que receba um objeto semelhante a um array com a contagem diária de pássaros. Ela deve corrigir o erro de contagem modificando o array original.

birdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsPerDay);s
// => [3, 5, 1, 7, 5, 1]
*/
export function fixBirdCountLog(){
    const birdsPerDay = [2, 5, 0, 7, 4, 1];
    let arrayValores = [];
    for(let contador = 0; contador < birdsPerDay.length; contador++){
        if(arrayValores[contador] === 2){
             arrayValores.push(birdsPerDay[contador] + 1);
        } else if(arrayValores[contador] === 0){
            arrayValores.push(birdsPerDay[contador] + 1);
        } else if(arrayValores[contador] === 4){
             arrayValores.push(birdsPerDay[contador] +1 );
        } else {
             arrayValores.push(birdsPerDay[contador]);
        }
    }
    return arrayValores
}
console.log(fixBirdCountLog());
// => [3, 5, 1, 7, 5, 1]
//     0     2     3   