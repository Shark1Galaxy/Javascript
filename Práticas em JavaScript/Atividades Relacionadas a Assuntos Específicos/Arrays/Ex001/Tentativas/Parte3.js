/*
Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort. 
*/

//Colocar em ordem do menor para o maior

function emOrdemCrescente(arr){
    const [numero1, numero2] = arr
    if(numero1 === numero2 || numero2 === numero1){
        return null
    }else if(numero1 > numero2){
        return [numero2, numero1]
    } else {
        return [numero1,numero2]
    }
}
console.log(emOrdemCrescente([1,2]))