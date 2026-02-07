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
    if(inputString[0] <= 9){ //O problema fala os numeros seriam aleatrios entre 0 e 9, mas o que muda apenas era o numero, o resto da string, ainda permanece, no caso, years old
        return Number(inputString[0])
    }
}
getAge('4 years old')
