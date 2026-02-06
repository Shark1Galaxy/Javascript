const squareSum = numbers => numbers.reduce((acumulador, valorAtual) => acumulador + (valorAtual * valorAtual),0)
console.log(squareSum([1,2,2]))