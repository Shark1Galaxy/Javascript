/*
3. Tamanho do Objeto  
Escreva um programa em JavaScript para obter o tamanho (quantidade de propriedades) de um 
objeto JavaScript.  

Objeto de exemplo:  
var student = {   
name : "David Rayy",  
sclass : "VI",  
rollno : 12  
};  
*/

function studanteValue(){
    const pessoa = [{
        nome: 'Marcos',
        sclass: '3 ANO',
        rollno: 12
    }]
    return Object.keys(pessoa[0]).length // Object.keys(pessoa[0]) extrai as chaves do primeiro objeto do array e as retorna como um novo array ['nome', 'sclass', 'rollno'] .length conta quantos elementos estão nesse array, retornando o número de propriedades.
}
console.log(studanteValue())