/*

Verificar Palíndromo 
Escreva uma função em JavaScript que verifique se uma string passada é um palíndromo ou não. 
Um palíndromo é uma palavra, frase ou sequência que é lida da mesma forma de trás para frente, 
por exemplo: madam ou nurses run.

Entrada
Subi no onibus
Casa

Processo
1 - Precisamos guardar criar a função com um parametro para guarda essa string
3 - Para evitar erros de caracteres, vamos jogar tudo pra maisculo
2 - Qual foi minha lógica. PALIDROMOS são palavras frases enfim que são lidas da memas forma de tras pra frente. se são lidas da mesma forma de tras pra frente. logo o começo e o fim tem a mesma letra. logo é um palidromo. ai é so criar uma condição simples: se o palidromo[0] for igual === a o ultimo elemento da string.at(-1) pois precisamos usar o at pq o modo convensional n aceita numeros negativos. ele é um palidromo, caso não falso não é um palidromo.

Saida
É um palindromo
Não é um palindromo

*/

function verificadorPalindromo(string){
    const upperCase = string.toUpperCase();
    if(upperCase[0] === upperCase.at(-1)){
        console.log('É um palidromo')
    } else {
        console.log('Não é um palidromo')
    }
}
verificadorPalindromo('Subi no onibus');
