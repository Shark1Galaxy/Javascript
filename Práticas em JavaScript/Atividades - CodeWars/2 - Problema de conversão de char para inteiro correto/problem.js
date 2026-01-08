/*
Você pergunta a uma garotinha: "Quantos anos você tem?"
Ela sempre responde "x anos", onde x é um número aleatório entre 0 e 9.

Escreva um programa que retorne a idade da menina (0–9) como um número inteiro.

Assuma que a string de entrada do teste é sempre válida. Por exemplo, a entrada pode ser "1 year old" ou "5 years old". O primeiro caractere da string sempre será um número.

Entrada
x 


Procesos
O exercício pede apenas que o primeiro dígito do número mude, podendo variar entre 0 e 9, enquanto o restante do número deve permanecer o mesmo.

Para isso, pegamos o parâmetro como string e convertimos somente o primeiro caractere para número, usando Number(inputString[0]). Dessa forma, estamos alterando apenas o início do valor. O restante da string é utilizado normalmente na chamada, sem modificações.

Isso garante que o valor esteja entre 0 e 9, porque estamos acessando apenas o índice 0 da string, que representa um único dígito.
Se quiséssemos trabalhar com números maiores, como 10, 11 ou 12, seria necessário acessar mais de um índice (por exemplo, 0 e 1). Como isso não é feito, o programa funciona corretamente apenas para números de um dígito, ou seja, de 0 a 9.

Saida
x idade dela

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