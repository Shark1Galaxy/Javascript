/*
Você pergunta a uma garotinha: "Quantos anos você tem?"
Ela sempre responde: "x years old", onde x é um número aleatório entre 0 e 9.

Escreva um programa que retorne a idade da garota (0 a 9) como um inteiro.

Assuma que a string de entrada do teste sempre será válida.
Por exemplo, a entrada pode ser "1 year old" ou "5 years old".
O primeiro caractere da string sempre será um número.
*/

/*
Emtrada

"4 anos" → 

"9 ano" → 

//Saida
deve devolver 4
deve devolver 9
como um numero inteiro, não uma string
Só precisa extrair o número que já está no começo da frase.
*/
const getAge = (inputString) => {return inputString[0] < 10 ? Number(inputString[0]):'Its not';}