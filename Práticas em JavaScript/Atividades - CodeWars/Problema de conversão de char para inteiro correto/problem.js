/*
Emtrada

"4 anos" → 

"9 ano" → 

//Saida
deve devolver 4
deve devolver 9
como um numero inteiro, não uma string
Só precisa extrair o número que já está no começo da frase.
*/

function getAge(inputString){
  if(inputString[0] >= 0 && inputString[0] < 10){
    return Number(inputString[0])
  }
 }
console.log(getAge('4 years old'))

function getAge(inputString){
    return parseInt(inputString[0])
}
getAge('4 years old')

//Feito verificando outras resoluções
/*
Entrada
entrar 4 5 6 7 8 9 etc years old

Saida
Retornar apenas o número inteiro contido na string, de 0 a 9.*/
function getAge(inputString){
  if(inputString[0] >= 0 && inputString[0] <10){
    return parseInt(inputString[0]) //Passando a string do começo para um numero inteiro
    }
}
getAge('4 years old')