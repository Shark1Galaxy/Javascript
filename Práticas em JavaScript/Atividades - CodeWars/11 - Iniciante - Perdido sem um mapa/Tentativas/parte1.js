/*
Dado um array de números inteiros, retorne um novo array com cada valor dobrado.

Entrada 
[1,2,3]

Processo
0 - Ele precisar quer que retorma dentro dessa função o dobro dos valores do array
1 - Criar função com um parametro x, onde ele vai receber a array com os valores
2 - Precisamos criar a array, para que o x consiga ter os valores. com isso, preciasmos criar um array, para segurarmos, vamos criar uma array atribuando ao parametro.
3 - Precisamos criar uam formar de pegar o sempre 1 numero, multiplicar ele e jogar em outra arary. para receber os valores dobrados.
4 - Solução, é fazer um loop para percorrer o array. e a cada vez que ele executa o bloco e manda o indice correspondente, ele vai mutiplicar * 2. logo o dobro

Saida
[2,4,6]
*/
function maps(x = [1,2,3]){
    let arrayValores = [];
    for(let pos in x){
    arrayValores.push(x[pos] * 2);
    }
   return arrayValores
}
maps()