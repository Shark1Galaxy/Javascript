/*
Você consegue encontrar a agulha no palheiro?
Escreva uma função findNeedle() que receba um array cheio de coisas aleatórias, mas que contenha uma "needle" (agulha).

Depois que sua função encontrar a agulha, ela deve retornar uma mensagem (como string) dizendo:
"found the needle at position " + o índice onde a agulha foi encontrada.

Entrada 
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

Processo
1 - Precisamos criar ua função chamado fiNeedle() com o parametro(haystack) para receber o valor de needle - V
2 - Bom, isso, atribuimos uma array no haystack com os valores aletaroios e criamos uma retorno onde, ele vai pegar o `found the needle at position + usando indexOf com o nome needle, pois o exercicio quer que retorne a posição do nome. seja lá qualquer arrayh aleatorio mas tendo esse nome ele retona a posição.

Saida
"found the needle at position 5"

*/

const findNeedle = (haystack = []) => { return `found the needle at position ${haystack.indexOf('needle')}`;}