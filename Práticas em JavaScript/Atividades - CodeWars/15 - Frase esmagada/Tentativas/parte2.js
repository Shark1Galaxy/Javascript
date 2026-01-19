/*
Sentence Smash
Escreva uma função que receba um array de palavras e as una formando uma frase, retornando essa frase. Você pode ignorar qualquer necessidade de sanitizar as palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra.

Atenção: não deve haver espaço no início nem no final da frase.

Exemplo:
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
Suposições
Você pode assumir que receberá apenas palavras.

Não é possível assumir o tamanho do array.
Você pode assumir que sempre receberá um array.
*/

function smash(words){
    let stringVazia = '';
    for(let position in words){
        stringVazia += words[position];
        stringVazia += ''
    }
    return stringVazia
}
smash([])
console.log(smash([]))