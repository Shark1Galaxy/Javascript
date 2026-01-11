/*
Crie uma função que responda à pergunta "Você toca banjo?".
Se o seu nome começar com a letra "R" ou com "r" minúsculo, você toca banjo!

A função recebe um nome como único argumento e retorna uma das seguintes strings:

name + " plays banjo" 
name + " does not play banjo"
Os nomes fornecidos são sempre sequências de caracteres válidas.

Entrada
Você toca banjo? : Raul, Rubens raiam.

Processo:
1 - Precisamos armazenar os dados dentro do parametro - V
2 - Preciamos antes de tudo, criar uma condição, onde se ele toca ou não banjo - V
3 - A condição verdadeira, é basicamente, se a inicial do noime dele for R, é verdadeiro e mesmo que ele coloque r minusculo, convertemos para R maisculos, e coparamos com o "R" literal - V
4 - Else para caso o nome não começe com R

Saida:
Raul ou Rubens ou raim toca banjo
Pedro não toca banjo
*/


function areYouPlayingBanjo(name) {
    return name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;
}
areYouPlayingBanjo()