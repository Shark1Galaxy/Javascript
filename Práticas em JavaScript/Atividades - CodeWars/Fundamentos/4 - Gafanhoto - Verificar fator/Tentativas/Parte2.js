/*
Aqui está a tradução para português:

Esta função deve verificar se factor é um fator de base.
Retorne true se for um fator ou false caso não seja.

Sobre fatores
Fatores são números que podem ser multiplicados entre si para obter outro número.

2 e 3 são fatores de 6 porque:
2 × 3 = 6

Você pode encontrar um fator dividindo números. Se o resto da divisão for 0, então o número é um fator.
Você pode usar o operador módulo (%) na maioria das linguagens para verificar o resto da divisão.
Por exemplo, 2 não é um fator de 7 porque:
7 % 2 = 1

Nota:

base é um número não negativo
factor é um número positivo
*/

const checkForFactor = (base,factor) => {return base % factor === 0}