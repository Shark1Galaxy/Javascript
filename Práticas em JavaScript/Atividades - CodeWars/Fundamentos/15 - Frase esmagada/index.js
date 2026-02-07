/*
Sentence Smash
Escreva uma função que receba um array (lista) de palavras e as junte em uma frase, retornando essa frase. Você pode ignorar qualquer necessidade de sanitizar as palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra. Cuidado: não deve haver espaço no início nem no final da frase!

Entrada
['hello', 'world', 'this', 'is', 'great'] 

Processo
1 - criar a função com o parametro da palavra em si,no caso ele quer receber um array - v
2 - Precisamos criar um loop que sempre que passa pelo array. vai jogar o indice dentro de uma variave vazia de strig- v
3 - tem um problema, pois o começo ele da um espaço, quado ele coloca o indice 0, para resolte, criamos uma codição onde, se o a posição do idice do loop for a 1(0). do que 1 o words[0]. ele vai jogar, na frasefinal sem espaço caso n . ele vai jogar o resto com espaço.

Saida
'hello world this is great'
*/


function smash (words) {
   let fraseFinal = '';
   for(let position in words){
     if(words[position] === words[0]){
       fraseFinal += words[position]
     } else {
       fraseFinal += ' ' + words[position]
     }
   }
   return fraseFinal
};
const resultado = smash(['hello', 'world', 'this', 'is', 'great'])
console.log(resultado)