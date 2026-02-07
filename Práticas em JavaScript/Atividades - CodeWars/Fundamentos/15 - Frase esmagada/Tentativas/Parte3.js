/*
Sentence Smash
Escreva uma função que receba um array de palavras e as junte para formar uma frase, retornando essa frase. Você pode ignorar qualquer necessidade de sanitizar as palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra.
Atenção: não deve haver espaço no início nem no final da frase!

Exemplo
Entrada
['hello', 'world', 'this', 'is', 'great'] ⇒ 

Processo
Simples, usamos o meotodo join,pois ele serve para juntar todos os elementos de um array em uma única string.

Saida
'hello world this is great'

Suposições

Você pode assumir que receberá apenas palavras.
Você não pode assumir o tamanho do array.
Você pode assumir que realmente receberá um array.

O que estamos testando
Estamos testando laços (loops) básicos e manipulação de strings. Isso é voltado para iniciantes que estão começando a aprender sobre loops e manipulação de strings.

Aviso
Este desafio é para iniciantes, então o objetivo é testar apenas loops básicos e manipulação de strings.
*/

const smash = (words) => {return words.join(' ')} //Ese espaços entras as ' ' é usado pra por um espaso entre as palavras. já que o join transforamr array em string