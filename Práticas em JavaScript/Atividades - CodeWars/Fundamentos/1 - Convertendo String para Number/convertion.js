/*
Precisamos de uma função que consiga transformar uma string em um número. Quais formas de fazer isso você conhece?

Observação: Não se preocupe, todas as entradas serão strings, e toda string será uma representação perfeitamente válida de um número inteiro.


Exemplos:
Entrada  Saida
"1234" →  1234

"605" →  605

"1405" → 1405

"-7" → -7 
*/

const stringToNumber = function(str){
  return Number(str);
}