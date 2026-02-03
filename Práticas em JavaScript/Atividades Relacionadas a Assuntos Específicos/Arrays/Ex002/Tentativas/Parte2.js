/*
 Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua 
própria função para isso

com isso, precisamos criar um metodo chamado bubbleSort, onde não é mt recomendando mas pra aprender mais sobre logicaa é mt utilç
*/

function ordermCrescente(arr){
    for(let indice = 0; indice < arr.length; indice++){
        for(let indice = 0; indice < arr.length; indice++){
            if(arr[indice] > arr[indice + 1]){
            let temporario = arr[indice]
            arr[indice] = arr[indice + 1]
            arr[indice + 1] = temporario
        }
    }
}
    console.log(arr)
}
ordermCrescente([5,1,2])