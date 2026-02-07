/*
Sua tarefa é criar uma função que execute quatro operações matemáticas básicas.

A função deve receber três argumentos:
operação (string ou caractere), valor1 (número) e valor2 (número).

A função deve retornar o resultado dos números após aplicar a operação escolhida.

Exemplos (Operador, valor1, valor2) → saída:

Entrada
('+', 4, 7)
('-', 15, 18) 
('*', 5, 5)
('/', 49, 7)


Processo
1 - Criar fução com 3 parametros, onde 1 vai ser o operador, e os outros 2 dos numeros que vão entrar - V
2 - Preciamos de uma forma, onde, assim que ele indificar o operador correspondende, ele me deolve o resultado da soma correspondende ao operador - V
3 - solução, usar o switch. onde, sempre que ele ler que o operador o parametro operador. ele vai para o operador corresponde nos cases.


Saida
11
-3
25
7

*/

function basicOp(operation, value1, value2){
    switch(operation){
        case '+':
            return value1 + value2
        break
        case '-':
             return value1 - value2
        break
        case '*':
             return value1 * value2
        break
        case '/':
             return value1 / value2
        break
        default:
            return 'Operador não localizado entre + e /'
    }
}
console.log(basicOp('+', 4, 7));