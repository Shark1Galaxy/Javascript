/*
array.reduce(callback(acumulador, elemento, index, array), valorInicial)
• callback: função chamada para cada elemento, recebendo:

o acumulador: valor que é “acumulado” ao longo das iterações (começa com valorInicial ou o primeiro elemento do array se valorInicial não for fornecido).
o elemento: o elemento atual do array.
o index (opcional): índice do elemento atual.
o array (opcional): o array original.
• valorInicial (opcional, mas recomendado): valor inicial do acumulador.
*/

const numeros = [12,451,541,89,1451];

const somandoNumeros = numeros.reduce(function(acumulador,valorAtual){
   return acumulador + valorAtual 
},0); 
console.log('Total: '+somandoNumeros);

const pessoas = [
{ nome: "Ana", idade: 25 },
{ nome: "João", idade: 30 }
];

//Transformando um array em um objeto
const pessoaPorNome = pessoas.reduce(function(acc,pessoa){
    acc[pessoa.nome] = pessoa.idade; //Aqui estou pegando a varivael acc, com pessoa.nome do objetndo e fazendo ela receber o pessoa.idade
    return acc; //onde aqui quando retorno ele vai por eles dentro de um objeto 
},{});
console.log(pessoaPorNome);