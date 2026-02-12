/*Complete a solução de forma que ela retorne verdadeiro se o primeiro argumento (uma string) passado terminar com o segundo argumento (também uma string).

Exemplos:

Entrada
String: Abc
Eding: bc

String: ABC
Eding: d

Saida
true
false

USado o metodo endsWith já resolve
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript


*/
const solution = (str,ending) => str.endsWith(ending);
