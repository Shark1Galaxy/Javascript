const pessoal = {
    nome: 'Marcos',
    sobrenome: 'Vinicius',
    idade: '23'
};
//Pesquisar especificamente sem metodos dentro do
console.log(pessoal.nome)
console.log(pessoal.sobrenome)
console.log(pessoal.idade)

//Formas de criar objetos com função (Uma fabrica de objetos)
/**
 * === FACTORY FUNCTION (Função Fábrica) ===
 * Esta função serve como uma "fábrica" de objetos.
 * Em vez de criar cada objeto pessoa manualmente (o que repetiria muito código),
 * usamos esta função para criar e retornar os objetos automaticamente.
 */
function criarPessoas(nome, sobrenome, idade) {
    return {
        // === SINTAXE CURTA (Short Syntax) do ES6 ===
        // Quando o nome da chave do objeto é igual ao nome da variável/parâmetro,
        // não precisamos escrever "nome: nome". O JS entende automaticamente.
        nome,       // É o mesmo que fazer: nome: nome 
        sobrenome,  // É o mesmo que fazer: sobrenome: sobrenome
        idade       // É o mesmo que fazer: idade: idade
    };
}

// === CRIANDO AS INSTÂNCIAS ===
// Aqui estamos chamando a fábrica. Cada vez que chamamos 'criarPessoas',
// ela nos devolve um NOVO objeto com os dados que passamos nos parênteses.

// A variável 'p' agora guarda um objeto: { nome: 'Jose', sobrenome: 'Henrique', idade: 24 }
const p = criarPessoas('Jose', 'Henrique', 24);

const p2 = criarPessoas('Maria', 'carvaalho', 35);
const p3 = criarPessoas('Joao', 'pereira', 43);
const p4 = criarPessoas('Junior', 'Silva', 13);

// === ACESSANDO OS DADOS ===
// Usamos o ponto (.) para acessar uma propriedade específica dentro do objeto criado.
console.log(p.nome, p2.nome, p3.nome, p4.nome);

//--------------------------------------------------------------------------------------
const informationCar = function(nome,modelo,ano,cor){
    return { 
    nome,
    modelo,
    ano,
    cor
    }
};
console.log(informationCar('Nissan','T-CROSS', 2026, 'black').nome);
console.log(informationCar('Nissan','T-CROSS', 2026, 'black').modelo);
console.log(informationCar('Nissan','T-CROSS', 2026, 'black').ano);
console.log(informationCar('Nissan','T-CROSS', 2026, 'black').cor);

const information = (nome,modelo,ano,cor) => {return {nome,modelo,ano,cor}}

console.log(information('Chevrolet','onix-plus', 2023, 'white').nome);
console.log(information('Chevrolet','onix-plus', 2023, 'white').modelo);
console.log(information('Chevrolet','onix-plus', 2023, 'white').ano);
console.log(information('Chevrolet','onix-plus', 2023, 'white').cor);

const info = function(nome,modelo,ano,cor) {
    return {
        nome,
        modelo,
        ano,
        cor
    }
}

console.log(information('Fiat','pailo', 2013, 'white').nome);
console.log(information('Fiat','pailo', 2013, 'white').modelo);
console.log(information('Fiat','pailo', 2013, 'white').ano);
console.log(information('Fiat','pailo', 2013, 'white').cor);
