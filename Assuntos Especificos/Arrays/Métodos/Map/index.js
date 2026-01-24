/*Sintaxe: array.map(function(currentValue, index, array), thisValue) */
const numbers = [1, 2, 3, 4, 5];

const numbersMultpliedByTwo = numbers.map(function(number){
    return number * 2
})
console.log(numbersMultpliedByTwo)

/*map() pega uma lista, aplica uma função em cada item e retorna outra lista com os resultados. */

// O dobro do número com arro function
const numeros2 = [1,2,3,4,5,6,7];
const dobro = numeros2.map(numeros => numeros * 2)
console.log(dobro)

//o dobro com funções normais
const numeros3 = [1,2,3,4,5,6,7,9,10];
const dobro2 = numeros3.map(numerosFunction)

function numerosFunction(value){
    return value * 2
}
console.log(dobro2)

//com function callback
const numeros4 = [1,2,3,4,5,6,7,8,9,10];
const dobro3 = numeros4.map(function(valores){
    return valores * 2
});
console.log(dobro3)

//Podemos usar outros metodos dentro do map pra devolver
const numeros5 = [1,2,3,4,5,6,7,8,9,10];
const dobro4 = numeros5.map(Math.sqrt)
console.log(dobro4) //Ele me retornar a raiz de cada indice

//Com object
const pessoas = [
    {nome: 'Marcos', idade: 16},
    {nome: 'Joana', idade: 15}
];

const nomes = pessoas.map(pessoa => pessoa.nome)
const idades = pessoas.map(idade => idade.idade)
console.log(nomes)
console.log(idades)