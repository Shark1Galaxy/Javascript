//Usando funções de seta (arrow functions)
const numeros = [1,2,3,4,5,6,7];
console.log(numeros.map(numeroEntrada => numeroEntrada * 2));

//Usando callbacks
console.log(numeros.map(function(valoresEntrada){
    return valoresEntrada * 2
}))

//Usando funções convencionais
console.log(numeros.map(multiplicarFuncao))
function multiplicarFuncao(valorEntrada){
    return valorEntrada * 2
}

console.log(numeros.map(Math.sqrt))