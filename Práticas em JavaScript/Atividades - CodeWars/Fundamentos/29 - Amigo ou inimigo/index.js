/*Crie um programa que filtre uma lista de strings e retorne uma lista contendo apenas o nome de seus amigos.

Se um nome tiver exatamente 4 letras, você pode ter certeza de que é um amigo seu! Caso contrário, pode ter certeza de que não é...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []

As sequências de entrada conterão apenas letras.
Observação: mantenha a ordem original dos nomes na saída.

Entrada
Input = ["Ryan", "Kieran", "Jason", "Yous"]

Processo
Bom, basciametne precisamos criar uam formar de retorar uma novo array contendo apeans nome de pessoas com apenas 4 caracter=es. é simplkies, usarmos o metodo filter para desolver uma novo arrary com o nome com 4 letras

Saida
Output = ["Ryan", "Yous"]
*/
function friend(friends){
    return friends.filter(nomeQuatro => nomeQuatro.length === 4)
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))
