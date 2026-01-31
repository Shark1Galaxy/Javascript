//o find, diferente do filter, ele basicamente, vai me devolver o 1 elemento que de true da função. o filter ele devovle todos do array, já o find me devolve o 1 que achar a lista
const idades = [10,23,15,19,50];

const maioresDeIdades = idades.find(idadesPessoa => idadesPessoa > 18)
console.log(maioresDeIdades)


const pessoas = [
    {nome: 'Marcos', idade: 18},
    {nome: 'Jose', idade: 23}
]

const maiorIdade = pessoas.find(idadeMaior => idadeMaior.idade >= 18)