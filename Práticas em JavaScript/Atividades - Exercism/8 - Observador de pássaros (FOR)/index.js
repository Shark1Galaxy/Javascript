/*
1. Determinar o número total de pássaros observados até agora 
Vamos começar analisando os dados de forma geral. Descubra quantos pássaros você contou no total desde 
que começou os registros. 
Implemente uma função totalBirdCount que receba um objeto semelhante a um array contendo a 
contagem de pássaros por dia. Ela deve retornar o número total de pássaros observados.

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]; 
totalBirdCount(birdsPerDay); 
// => 34
*/

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]; 
function totalBirdCount(){
    let somaTotal = 0;
    for(let contador = 0; contador < birdsPerDay.length; contador++){
        somaTotal += birdsPerDay[contador]
    }
    return somaTotal
}
totalBirdCount()

/*
2. Calcular o número de pássaros visitantes em uma semana específica 
Agora que você já tem uma noção geral dos números, quer fazer uma análise mais detalhada. 
Implemente uma função birdsInWeek que receba um objeto semelhante a um array com a contagem diária de pássaros e um número da semana. Ela deve retornar o número total de pássaros observados naquela semana específica. Você pode assumir que as semanas sempre são registradas completamente. 

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]; 
birdsInWeek(birdsPerDay, 2); 
// => 12 

Bom, vamos lá, ele diz que quer o total de passaros corresponde a semana especifica, mas como assim? bom, ali tem no total, 14 dias. pois ele dis que a cada dia ele marca quantos passaros passaram, 1 dia passou 2, no segundo passou 5 e assim vai, se ali tem 14 dias, logo são 2 semananas, e no enunciado ele fala quer qeu a 2 semana, ou seja. é so contar a partir do 0,2 em diante que correspondem a  semana */

function birdsInWeek(birdsPerDay, semana) {
    const semana2 = (semana - 1) * 7;
    const ultimosSemana = semana2 + 7; // 7 + 7 = 14 = 2 semanas
    let somaTotal = 0;
    for(let contador = semana2; contador < ultimosSemana; contador++){
        somaTotal += birdsPerDay[contador] 
    }
    return somaTotal
}
const resultado = birdsInWeek(birdsPerDay, 2) // => 12
console.log(resultado)

/*
1️⃣ O array não sabe o que é “semana”

Ele só conhece posição.

[2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
 0  1  2  3  4  5  6  7  8  9 10 11 12 13

O array começa no zero, não no 1.
2️⃣ Cada semana tem 7 dias (regra fixa)
Então os blocos ficam assim:

Semana 1 → posições 0 até 6
Semana 2 → posições 7 até 13
Semana 3 → posições 14 até 20

Percebe o padrão?
👉 toda semana pula de 7 em 7

*/