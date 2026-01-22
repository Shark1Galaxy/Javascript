/*
Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort. 
*/

function ordemCrescente(listaInteira){
    let arrayValores = [];
    if(listaInteira[0] < listaInteira[1]){
        arrayValores.push(listaInteira[0])
        arrayValores.push(listaInteira[1])
    }else if(listaInteira[0] === listaInteira[1]){
        return 'Os números são iguais'
    } else {
        arrayValores.push(listaInteira[1])
        arrayValores.push(listaInteira[0])
    }
    return arrayValores
}
const arrayValores = [2,2]
console.log(ordemCrescente(arrayValores));