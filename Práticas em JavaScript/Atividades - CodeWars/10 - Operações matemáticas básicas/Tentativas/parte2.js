/*
Sua tarefa é criar uma função que realize quatro operações matemáticas básicas.

A função deve receber três argumentos:

operação (string/caractere),
valor1 (número),
valor2 (número).

A função deve retornar o resultado dos números após aplicar a operação escolhida.

Exemplos (Operador, valor1, valor2 → saída):

('+', 4, 7) → 11
('-', 15, 18) → -3
('*', 5, 5) → 25
('/', 49, 7) → 7
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
            return 'operador inválido'
    }
}