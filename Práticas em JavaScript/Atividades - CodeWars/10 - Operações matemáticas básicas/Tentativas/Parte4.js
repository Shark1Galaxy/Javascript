/*
Criamos um objeto que funciona como um "mapa de operações".

- Cada chave do objeto é um operador matemático ('+', '-', '*', '/')
- Cada valor é uma função que recebe dois números (a e b)
- A função associada à chave executa a operação correspondente
*/
const basicOperations = {
    '+': (a, b) => a + b, // Soma
    '-': (a, b) => a - b, // Subtração
    '*': (a, b) => a * b, // Multiplicação
    '/': (a, b) => a / b, // Divisão
}

/*
Função principal que executa a operação matemática.

Parâmetros:
- operation: operador matemático ('+', '-', '*', '/')
- x: primeiro valor numérico
- y: segundo valor numérico

Funcionamento:
1. Acessa o objeto basicOperations usando o operador como chave
2. Recupera a função correspondente à operação
3. Executa essa função passando x e y
4. Retorna o resultado
*/
const basicOp = (operation, x, y) => basicOperations[operation](x,y)
