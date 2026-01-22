/*
 Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua 
própria função para isso
*/

function ordemCrescente(listInteira){
    return listInteira.sort()
}
const arrayValores = [5,2,3]
const resultado = ordemCrescente(arrayValores)
console.log(resultado)