/*
https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

https://gemini.google.com/app/903b9f707c6576ba?hl=pt-BR
Neste kata, você deve escrever uma função que retorna as posições e os valores dos “picos” (ou máximos locais) de um array numérico.
Por exemplo, o array arr = [0, 1, 2, 5, 1, 0] tem um pico na posição 3, com valor 5 (já que arr[3] é igual a 5).

A saída deve ser retornada como um objeto com duas propriedades: pos e peaks. Ambas devem ser arrays.
Se não houver nenhum pico no array fornecido, a saída deve ser:

{ pos: [], peaks: [] }


Exemplo:
pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) deve retornar
{ pos: [3, 7], peaks: [6, 3] }
(ou o equivalente em outras linguagens).

Todos os arrays de entrada serão arrays válidos de inteiros (podem estar vazios), então não é necessário validar a entrada.

O primeiro e o último elemento do array não devem ser considerados picos (no contexto matemático, não sabemos o que existe antes ou depois deles, então não é possível afirmar se são picos).

Além disso, cuidado com os platôs (plateaus)!

[1, 2, 2, 2, 1] tem um pico

[1, 2, 2, 2, 3] e [1, 2, 2, 2, 2] não têm pico

No caso de um pico em forma de platô, retorne apenas a posição e o valor do início do platô.

Por exemplo:
pickPeaks([1, 2, 2, 2, 1]) retorna
{ pos: [1], peaks: [2] }
(ou equivalente em outras linguagens).

Processo
Antes de tudo ,precisamos verficair como podemos filtaer os numeros que são maiores que os outros dentro do array

*/


function pickPeaks(arr){
    let arrayPosition = []
    let peack1 = []
    for(let i = 1; i < arr.length - 1; i++){
        //lOGICA: O 1 indice que é 5 > 1 - esse 1 é o anterior e 5 > 1 - esse é o final do array.
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            arrayPosition.push(i)
            peack1.push(arr[i])
        }
    }
    return {pos: arrayPosition , peaks: peack1}
}
const resultado = pickPeaks([1, 5, 1])
console.log(resultado)