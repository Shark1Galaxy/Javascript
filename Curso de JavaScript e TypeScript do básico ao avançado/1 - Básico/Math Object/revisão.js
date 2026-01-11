let numeroFirst = 9.54687;

/*
A sintaxe para os métodos Math any é:Math.method(number)

Número para inteiro
Existem 4 métodos comuns para arredondar um número para um inteiro:

Math.round(numeroFirst)	Retorna numeroFirst arredondado para o número inteiro mais próximo.

Math.ceil(numeroFirst)	Retorna numeroFirst arredondado para o número inteiro mais próximo.

Math.floor(numeroFirst)	Retorna numeroFirst arredondado para baixo para o número inteiro mais próximo.

Math.trunc(numeroFirst)	Retorna a parte inteira de numeroFirst ( novidade no ES6 )

*/
console.log(Math.floor(numeroFirst) + ' Método com floor - A redonda pra baixo')
console.log(Math.ceil(numeroFirst) + ' Método com ceil - A redonda pra cima')
console.log(Math.round(numeroFirst) + ' Método com round - retorna o número inteiro mais próximo:')
console.log(Math.trunc(numeroFirst) + ' Método com truch - Retorna a parte inteira de numeroFirst ( novidade no ES6 )')
console.log(Math.sign(numeroFirst) + ' Método com sign - Retorna se numeroFirst é negativo, nulo ou positivo. Se numeroFirst for positivo, retorna 1 Se x for negativo, retorna -1, Se numeroFirst for zero, retorna 0')
console.log('Math.trunc() e Math.sign() foram adicionados ao JavaScript 2015 - ES6')
console.log(Math.max(1,2,3,4,5,6,12312,23,43) + ' Método com max - Ele retorna o maior número dessa sequência (1,2,3,4,5,6,12312,23,43)')
console.log(Math.min(1,2,3,4,5,6,12312,23,43) + ' Método com min - Ele retorna o menor número dessa sequência (1,2,3,4,5,6,12312,23,43)')
console.log(Math.pow(8,2) + ' Método com pow, retorna o valor de 8 elevado à potência de 2 === 8 x 2 = 64')
console.log(Math.sqrt(9) + ' Método com sqrt - retorna a raiz quadrada de 9')
console.log(Math.abs(-5) + ' Método com abs - retorna o valor positvo de -5 == 5') ;