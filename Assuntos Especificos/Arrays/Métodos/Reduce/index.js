// EXEMPLO 1: SOMANDO TODOS OS NÚMEROS DE UM ARRAY

// Temos um array de números de 1 a 10
const numeros = [1,2,3,4,5,6,7,8,9,10];

// O método reduce recebe dois parâmetros principais:
// 1) Uma função de callback que vai ser executada para cada elemento do array
// 2) Um valor inicial (opcional) que será o valor inicial do acumulador

const somaTotal = numeros.reduce((acumulador, atual) => {
    // 'acumulador' é o valor que vai guardando o resultado da soma até o momento
    // 'atual' é o valor do elemento atual do array que está sendo processado

    const total = acumulador + atual; // soma o valor atual ao acumulador
    return total; // devolve o acumulador atualizado para a próxima iteração
}, 0); // O 0 aqui é o valor inicial do acumulador

console.log(somaTotal); // Resultado: 55
// Explicação: começa em 0, depois soma 1, depois soma 2 (0+1+2), depois soma 3 (0+1+2+3) e assim por diante até 10


// EXEMPLO 2: FORMA MAIS SIMPLIFICADA
const numericos = [1,2,3,4];

// Aqui usamos uma sintaxe reduzida de arrow function
const somaSimples = numericos.reduce((acumulador, valorAtual) => acumulador + valorAtual);

console.log(somaSimples); // Resultado: 10
// Sem necessidade de criar uma variável interna, o retorno da função já é o novo acumulador


// EXEMPLO 3: SOMANDO VALORES DE UM ARRAY DE OBJETOS

// Array de objetos representando pessoas com nome e idade
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 30 }
];

// Queremos criar um novo objeto onde a chave seja o nome da pessoa e o valor seja a idade
const pessoasPorNome = pessoas.reduce((acumulador, pessoa) => {
    // 'acumulador' começa como um objeto vazio {} (valor inicial passado no reduce)
    // 'pessoa' é o objeto atual do array que está sendo processado

    acumulador[pessoa.nome] = pessoa.idade; 
    // Aqui estamos adicionando uma propriedade ao objeto acumulador
    // Exemplo: primeiro passo -> { Ana: 25 }
    // Segundo passo -> { Ana: 25, João: 30 }

    return acumulador; // retornamos o acumulador atualizado
}, {}); // O {} é o valor inicial, pois queremos criar um objeto

console.log(pessoasPorNome); // Resultado: { Ana: 25, João: 30 }
// Explicação: percorre cada pessoa do array, adiciona o nome como chave e a idade como valor
