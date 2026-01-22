/*
Complete a função que recebe dois inteiros ( a, b, onde a < b) e retorna um array contendo todos os inteiros entre os parâmetros de entrada, incluindo -os.

Por exemplo:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

const between = (a , b) => {
    let arrayVazio = [];
    while(a <= b){
        arrayVazio.push(a);
        a++
    }
    return arrayVazio
}
console.log(between(1,4))