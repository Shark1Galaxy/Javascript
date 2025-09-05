function parimpar(n) {
    if (n % 2 == 0) { //22 % 2 = resto (0) == 0, se fosse outro número como: 23 % 2 (23/2 = sobra 1 na divisão) = resto (1) impar != 0
        return 'Par!'
    } else {
        return 'Ímpar!'
}
 }
 console.log(parimpar(223)); //Aqui eu to chamando a função e passando o valor 223 como argumento no (n).
/*
 ou
let res = parimpar(4);
console.log(res);
*/

function maiorOuMenor(argumentoo1, argumento2) {
    if (argumentoo1.value > argumento2.value) {
        return argumento1 + ' é maior que ' + argumento2;
    } else {
        return argumento1 + ' é menor que ' + argumento2;
    }
}
console.log(maiorOuMenor(5, 2));