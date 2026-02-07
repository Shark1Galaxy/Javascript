/*
Considere um array/lista de ovelhas em que algumas ovelhas podem estar faltando em seus lugares. Precisamos de uma função que conte o número de ovelhas presentes no array (true significa que a ovelha está presente).

Por exemplo:
Entrada
[true, true, true, false, true, true, true, true, true, false,
 true, false, true, false, false, true, true, true, true, true,
 false, false, true, true]

Processo
Bom, basciamente precisasmos criar uam formad e ler todos os trues e devolver o valor total.antes eu usarva loops, mas agora vou tentar usar o reduce para me dar a soma de todos os true

Sadia
A resposta correta seria 17.

Dica: Não se esqueça de verificar valores inválidos, como null ou undefined.
*/

function countSheeps(sheep) {
    let soma = 0
    for(let position in sheep){
        if(sheep[position] === true){
            soma += sheep[position]
        }
    }
    return soma
}
const resultado = countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true])
console.log(resultado)

