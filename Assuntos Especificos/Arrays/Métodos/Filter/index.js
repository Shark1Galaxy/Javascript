const numeros = [1,2,3,4,5,6,7.8,9,10];

console.log(numeros.filter(numeros => numeros % 2 === 0))

console.log(numeros.filter(function(numeros){
    return numeros % 2 === 0
}))

console.log(numeros.filter(numerosPares))

function numerosPares(valores){
    return valores % 2 === 0
}

console.log(numeros.filter(function(numeros){
    return numeros < 2
}))
