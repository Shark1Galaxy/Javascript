/*Escreva uma função em JavaScript para colocar a primeira letra de uma string em 
maiúscula. 
Dados de teste : 
console.log(capitalize('exercícios de strings em JS')); 
"Exercícios de strings em JS"  */

const capitalize = string => string[0].toUpperCase().concat(string.slice(1))
console.log(capitalize('exercícios de strings em JS'))