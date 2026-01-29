/*
Tamanho do Objeto  
Escreva um programa em JavaScript para obter o tamanho (quantidade de propriedades) de um 
objeto JavaScript.  
Objeto de exemplo:  

var student = {   name 
: "David Rayy",    sclass : "VI",  
  rollno : 12  
};  
*/
const student = [{name: "David Rayy",sclass : "VI", rollno : 12}]

const lengthToObject = () => { return Object.keys(student[0]).length} //Object.keys é um metood onde, ele transfroamr em array o objeto no caso as chaves dele
console.log(lengthToObject())