/*
Você consegue encontrar a agulha no palheiro?

Escreva uma função findNeedle() que receba um array cheio de coisas aleatórias, mas que contenha uma única "needle".

Depois que sua função encontrar a agulha, ela deve retornar uma mensagem (como uma string) que diga:

"found the needle at position " mais o índice onde a agulha foi encontrada, por exemplo:

Exemplo (Entrada --> Saída)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
→ "found the needle at position 5"

Entrada 
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

Saida
"found the needle at position 5"
*/

const findNeedle = (haystack) => {return `found the needle at position ${haystack.indexOf('needle')}`}

