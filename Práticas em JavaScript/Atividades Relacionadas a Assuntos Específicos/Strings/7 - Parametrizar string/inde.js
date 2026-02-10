/*Escreva uma função em JavaScript para parametrizar uma string. 
Dados de teste : 
console.log(string_parameterize("Robin Singh dos EUA.")); 
"robin-singh-dos-eua" */

const string_parameterize = string => string.split(' ').join('-')
console.log(string_parameterize('Robin Singh dos EUA.'))