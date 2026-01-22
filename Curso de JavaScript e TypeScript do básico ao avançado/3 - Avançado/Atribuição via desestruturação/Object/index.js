const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Viniicus', 
    idade: 30, 
    endereco: {
        rua: 'Av Brasil',
        numero: 230
    }
};

//Atribuiçãoi via desestruturação em Object
const { nome, regulamento = true /*Valor padrão*/ , sobrenome, idade, } = pessoa
console.log(nome, sobrenome, regulamento, idade)

console.log('Com resto')
const { nome1, sobrenome1, ...resto} = pessoa
console.log(nome1, resto)

console.log('Pegando o endereço')
const {endereco: {rua = true, numero} } = pessoa
console.log(rua, numero)