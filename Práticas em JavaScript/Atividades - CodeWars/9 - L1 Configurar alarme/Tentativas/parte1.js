/*
Escreva uma função chamada setAlarm que receba dois parâmetros.
O primeiro parâmetro, employed, é true sempre que você estiver empregado, e o segundo parâmetro, vacation, é true sempre que você estiver de férias.

A função deve retornar true se você estiver empregado e não estiver de férias (pois são essas as circunstâncias em que você precisa definir um alarme).
Caso contrário, deve retornar false.

Exemplos:

Entrada:
employed = true - empregado
vacation = true - esta de feras

Processo
1 - Cria a função com parametros do employerd e vacation onde ambos são true 
2 - Precisamos criar uma função onde, ele precisa verificar. caso ele esteja, empregado e não esteja de ferias. deve retornar true - V


Saida
employed = true - empregado
vacation = false - não está de feras


employed | vacation
true | true → false
true | false → true
false | true → false
false | false → false
*/

const setAlarm = (employed = true, vacation = true) => {return employed && !vacation ? true : false;}
console.log(setAlarm())