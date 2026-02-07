/*
Crie uma função que responda à pergunta "Você toca banjo?".
Se o seu nome começar com a letra "R" ou com "r" minúsculo, você toca banjo!

A função recebe um nome como único argumento e retorna uma das seguintes strings:

name + " plays banjo" 
name + " does not play banjo"
Os nomes fornecidos são sempre sequências de caracteres válidas.
*/

function areYouPlayingBanjo(name) {
    const [primeiraLetra] = name
    return primeiraLetra.toUpperCase() == 'R' ? `${name} plays banjo` : `${name} does not play banjo`;
}
const resultado = areYouPlayingBanjo('Ruan')
console.log(resultado)