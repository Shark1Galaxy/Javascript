/*
Escreva uma função chamada setAlarm / set_alarm / set-alarm / setalarm (dependendo da linguagem) que recebe dois parâmetros.

O primeiro parâmetro, employed (empregado), é true quando você está empregado.
O segundo parâmetro, vacation (férias), é true quando você está de férias.

A função deve retornar true se você estiver empregado e não estiver de férias (pois essas são as circunstâncias em que você precisa configurar um alarme).
Ela deve retornar false em todos os outros casos.

Exemplos:
employed	vacation	retorno
true	    true	        false
true	    false	        true
false	    true	        false
false	    false	        false
*/


const setAlarm = (employed,vacation) => {return employed && !vacation}