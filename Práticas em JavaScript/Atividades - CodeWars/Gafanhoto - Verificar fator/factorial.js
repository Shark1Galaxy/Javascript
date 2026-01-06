//Entrada
//base 3
//o factor é 2

//Processo
// Verifica se factor divide base exatamente.
// Se o resto da divisão for 0, é um fator.
// Se não for 0, não é um fator.

//Saida
// false, pois 3 / 2 da 6 sobra 1. logo não é igual a 0, pois se sobra zero, logo é um numero factorial


function checkForFactor (base, factor) {
    return base % factor === 0 ? true : false;
}
checkForFactor(3,2)