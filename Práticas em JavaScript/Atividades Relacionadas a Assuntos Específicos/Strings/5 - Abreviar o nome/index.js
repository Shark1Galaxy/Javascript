/*Escreva uma função em JavaScript para converter uma string em sua forma abreviada. 

Dados de teste : 
console.log(abbrev_name("Robin Singh")); 
"Robin S."  */

const abbrev_name = name => name.slice(0,7) + '.'
console.log(abbrev_name('Robin Singh'))