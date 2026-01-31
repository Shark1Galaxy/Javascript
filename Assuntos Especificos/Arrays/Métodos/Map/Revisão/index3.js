const numeros = [1,58,13,3,9,6,11,15];

const resultado = numeros.map(function(elemento, index,array){
    return elemento + ' Posição: ' + index
})
console.log(resultado)

const resultado2 = numeros.map(numeroMultiplicados => numeroMultiplicados * 2);
console.log(resultado2);

const raizQuadrada = numeros.map(Math.sqrt);
console.log(raizQuadrada);

const negativosTodos = numeros.map(numero => -numero);
console.log(negativosTodos)