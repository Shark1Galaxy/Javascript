const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Viniicus', 
    idade: 23, 
    endereco: {
        rua: 'Rua Manoel Aleixo da Silva',
        numero: 10,
        logradouro: 'C'
    }
};


const { nome , sobrenome, idade, endereco: {rua, numero,logradouro}} = pessoa
console.log(nome, sobrenome, idade,rua, numero)

console.log('Com resto')
const {nome1, ...resto} = pessoa
console.log(resto)

function exibirNome({nome}, {idade}){
    return {
        nome,
        idade
    }
}
const resultado = exibirNome({nome: 'Marcos', idade: 23})
console.log(resultado)