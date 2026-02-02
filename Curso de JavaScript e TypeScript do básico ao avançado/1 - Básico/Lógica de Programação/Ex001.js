//Escreva uma função que receba dois numeros como parâmetros e retorne o maior entre eles.

const maiorNumero = (num1, num2) => {return num1 > num2 ? num1 : num2}
console.log(maiorNumero(1,5))

//Vertentes --- Video
const maior = Math.max(1,10);
console.log(maior);

//ou
console.log(Math.max(1,10));

function max(x, y){
    if(x > y){return x;}
}

console.log(max(7,3));