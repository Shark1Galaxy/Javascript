// Função que realiza uma tarefa, mas não retorna nenhum valor
function dizerNome() {
    console.log('Jonatam');
}
dizerNome(); // Chamando a função

// Função que retorna um valor para ser usado em outros lugares (cálculos, operações, etc.)
function multiplicarPorDois(valor) {
    return valor * 2;
}
console.log(multiplicarPorDois(5)); // Exibe o resultado da função

const resultadoValor = multiplicarPorDois(5); // A variável recebe o valor retornado pela função
console.log(resultadoValor); // Exibe o valor armazenado na variável