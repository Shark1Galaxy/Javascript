/*
Complete a função que recebe dois inteiros ( a, b, onde a < b) e retorna um array contendo todos os inteiros entre os parâmetros de entrada, incluindo -os.

Por exemplo:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

const between = (a,b) => {
    let arrayVazia = [];
    while(a <= b){
        arrayVazia.push(a);
        a++
    }
    return arrayVazia
}
console.log(between(1,4))