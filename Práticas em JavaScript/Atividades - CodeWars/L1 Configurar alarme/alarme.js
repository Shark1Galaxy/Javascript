/*
Escreva uma função chamada setAlarm que recebe dois parâmetros.
O primeiro parâmetro, employed, é true quando você está empregado, e o segundo parâmetro, vacation, é true quando você está de férias.

A função deve retornar true se você estiver empregado e não estiver de férias (pois são essas as circunstâncias em que você precisa programar um alarme).
Caso contrário, deve retornar false.

Exemplos:

employed | vacation
true | true → false
true | false → true
false | true → false
false | false → false


Entrada: Dois parâmetros booleanos: employed(true) e vacation(true).

Processo:
Nesse caso vamos usar o if/else, ele diz: se ele estiver empregado && !não estiver de ferias, ele retorna true.
Ai basciamente, ele está empregado, ent é true, não está de ferias. vaction é true como padrão, mas como ele disse que não pode estar de ferias, usamos o ! not pra trocar o valor de false para true

Saida: 
Saida precisa se true, caso ele esteja, empregado e não esteja de ferias.

*/
function setAlarm(employed, vacation){
    if(employed === true && !vacation === true){ //Ele está empregaod e (!) não está trabalhando? se sim.
        return true //true
    } else { //caso não
       return false //false
    }
}
setAlarm(true, false)

/*
employed(true): ele está empregado é true, false seria se ele não estivesse empregado
vacation(false): ele não está de ferias, true, seria se ele estivesse de ferias

Resultado: true
*/