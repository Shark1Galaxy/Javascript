let numeroFirst = 0.7; //Number 
let numeroSecond = 0.1; //Number

numeroFirst += numeroSecond
numeroFirst += numeroSecond
numeroFirst += numeroSecond
console.log(numeroFirst)
console.log(typeof numeroFirst.toFixed(1))
console.log(typeof parseInt(numeroFirst.toFixed(1)))
console.log(parseFloat(numeroFirst.toFixed(1)))

console.log(Number.isFinite(numeroFirst))
console.log(Number.isInteger(numeroFirst))
console.log(Number.isSafeInteger(numeroFirst))
console.log(Number.isNaN(numeroFirst + numeroSecond))

