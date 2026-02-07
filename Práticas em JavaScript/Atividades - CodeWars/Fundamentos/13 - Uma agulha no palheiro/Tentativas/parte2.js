/*
Você consegue encontrar a agulha no palheiro?

Escreva uma função findNeedle() que recebe um array cheio de coisas inúteis, mas que contém uma "needle" (agulha).

Depois que sua função encontrar a agulha, ela deve retornar uma mensagem (como uma string) dizendo:

"found the needle at position " + o índice onde a agulha foi encontrada.

Ou seja:

Exemplo (Entrada → Saída)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

Saida
→ "the needle found the needle at position 5"
*/

const findNeedle = (haystack) => {return `found the needle at position ${haystack.indexOf('needle')}`}