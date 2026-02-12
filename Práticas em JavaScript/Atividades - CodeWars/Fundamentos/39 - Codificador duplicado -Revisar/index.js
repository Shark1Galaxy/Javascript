/*O objetivo deste exercício é converter uma string em uma nova string onde cada caractere na nova string indica "("se ele aparece apenas uma vez na string original ou ")"se aparece mais de uma vez na string original. Ignore maiúsculas e minúsculas ao determinar se um caractere é duplicado.
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
Entrada         Saida
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  

Processo
1 - Retornar uma nova string onde, se algo se repete, ele vai retornar 2
2 - Precisamos verificar se uma letra se repete e quantas vezez dentro das string. se ela se repetiu diga qual letra se repeitiu. 
3 - Com isso, lupamos novamente, onde, se a letra for difeernte da letra duplicada ele adiciona ( caso seja igual adiciona - )

1 tarefa - verifica se ua letra aparecer mais de uma vez. e dguardar em algu lugar a letra que se repitiu - V
2 Tarefa - pecorrero array, e verificar se a a letra atual é diferente da letra duplicada. 

*/


//outra solução

function duplicateEncode(word) {
    return word.toLowerCase().split('').map( (letraAtual, index, array) => array.indexOf(letraAtual) == array.lastIndexOf(letraAtual) ? '(' : ')' ).join(''); //
}
  
console.log(duplicateEncode('success'))
