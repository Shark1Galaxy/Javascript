/*
/*
Você pergunta a uma garotinha: "Quantos anos você tem?"
Ela sempre responde "x anos", onde x é um número aleatório entre 0 e 9.

Escreva um programa que retorne a idade da menina (0–9) como um número inteiro.

Assuma que a string de entrada do teste é sempre válida. Por exemplo, a entrada pode ser "1 year old" ou "5 years old". O primeiro caractere da string sempre será um número.

Entrada
5 years old

Saida
Só o 1 caractere

*/

const getAge = (inputString) => {return Number(inputString[0])}