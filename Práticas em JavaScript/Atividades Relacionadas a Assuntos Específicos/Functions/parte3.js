/*
Combinações de String 
Escreva uma função em JavaScript que gere todas as combinações de uma string. 


Entrada:'dog' 

Processo
1 - Criar a função com o paremetro para receber a string.

Saída esperada: d, do, dog, o, og, g
*/

function combinationString(string){
    let amarzemDados = [];
    for(let contador = 0; contador < string.length; contador++){
        console.log(amarzemDados.push(string[contador]))
    }
    console.log(amarzemDados)
}
combinationString('dog')