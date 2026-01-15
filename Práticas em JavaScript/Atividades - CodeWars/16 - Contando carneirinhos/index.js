/*
Considere um array/lista de ovelhas em que algumas podem estar faltando em seus lugares. Precisamos de uma função que conte o número de ovelhas presentes no array (true significa que a ovelha está presente).

Por exemplo:
[true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]

A resposta correta seria 17.
Dica: Não se esqueça de verificar valores inválidos como null ou undefined.

Entrada
[true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]

Processo
1 - CRIAR A FUNÇÃO 
2 - Precisamos, criar um loop que vai percorrer toda esse array. e retorna apenas os valores que são true,porém, como isso vai resolver a questão. de numero, como vou cotnar isso? bom, basicamente criamos uma condição, onde. a cada vez que ele pecorrer o loop e verificar qeu é a posição atual do loop é igual a true. uma variavel fora do loop vazia de 0, recebe 1, e assinm vai até pecorrer todo o loop

Saida
Temos 17 ovelhas ativas
*/

function countSheeps(sheep) {
    let soma = 0; //Variavel para receber os valores, no caso o contador de true do array
    for(let position in sheep){
       if(sheep[position] === true){ //A cada vez qeu passa no loop, ele verificar que é um valor boleano true. ele vai adiconar +1 no soma, se não, ele não adiciona nada, e vai até pecorer o loop todo e contar quantos true tem
         soma++ 
       }
    }
    return soma
}
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]
))
