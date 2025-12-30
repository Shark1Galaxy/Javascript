/**
 * Verifica se um número é par ou impar
 * 
 * function paripar(entradaNumero)
 * O número que será verificado (um parâmetro é como uma "caixa" que recebe uma informação para a função usar)
 * 
 *  paripar(223); - Imprime no console se o número é par ou impar
 * 
 * Bloco de baixo
 * Esta função recebe um número como entrada e verifica se ele é par ou impar:
 * - Se o número dividido por 2 deixar resto 0 (===0), ele é PAR
 * - Se o número dividido por 2 deixar algum resto, ele é IMPAR
 * 
 * Exemplo de Parâmetro:
 * Um parâmetro é uma variável que a função usa para receber dados.
 * Pense como uma caixa aberta que você coloca algo dentro antes de usar.
 * Quando você chama paripar(223), o número 223 entra na caixa "entradaNumero"
 * e a função usa esse valor para fazer a verificação.
 */

function paripar(entradaNumero){
    if(entradaNumero % 2 ===0){
        return console.log(`${entradaNumero} é Par`)
    } else {
        return console.log(`${entradaNumero} é impar`)
    }
}
paripar(223);