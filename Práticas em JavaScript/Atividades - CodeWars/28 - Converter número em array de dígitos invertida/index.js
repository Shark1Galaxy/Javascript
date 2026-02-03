/*Dado um número aleatório não negativo, você deve retornar os dígitos desse número dentro de um array em ordem inversa.


Exemplo (Entrada => Saída):
35231 => [1,3,2,5,3]
0     => [0] 

*/



const digitize = n => String(n).split('').map(Number).reverse()
console.log(digitize(35231))
