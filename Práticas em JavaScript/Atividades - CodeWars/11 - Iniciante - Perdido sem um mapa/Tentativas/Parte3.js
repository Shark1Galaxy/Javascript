/*
Dado um array de números inteiros, retorne um novo array com cada valor duplicado.

Por exemplo:

[1, 2, 3] --> [2, 4, 6]
*/

const maps = x => {return x.map(valor => valor * 2)}
const resultado = maps([1,2,3])
//metodo map, ele devolve um novo array com o  resultado a função
//no caso aqui, eu dou o meotodo map. crio o parametro valor criando uma
//função para receber o valor de x * 2