/*Escreva uma função em JavaScript para extrair um número específico de caracteres de 
uma string. 

Dados de teste : 
console.log(truncate_string("Robin Singh",4)); 

"Robi*/

const truncate_string = (string, valor) => string.slice(0,valor)
console.log(truncate_string('Robin Singh',4))