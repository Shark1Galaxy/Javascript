const numeros = [1,2,3,4,5,6,7,8,9,10];

//Usando arrow functions
console.log(numeros.reduce((acumulador,entradaInicial) => acumulador + entradaInicial))


//Usando callbacks
console.log(numeros.reduce(function (acumulador, entradaInicial) {
    return acumulador + entradaInicial 
}))

//Usando funções tradicionais
console.log(numeros.reduce(minhaFunction) + ' Com função tradicional')
function minhaFunction(acumulador,entradaInicial){
    return acumulador + entradaInicial
}

console.log(numeros.reduce((acumulador, entradaInicial) => Math.floor(acumulador + entradaInicial)))