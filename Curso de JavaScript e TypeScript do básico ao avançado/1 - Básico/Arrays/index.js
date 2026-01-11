//            0123456789101112
const nome = 'Marcos Vinicius' //Com strings
console.log(nome[0])

//                0       1       2
const alunos = ['Marcos','Maria',"João"]; //Com arrays

console.log(typeof alunos) //object
console.log(alunos.slice(0, 3)) //Mesmo jeito de fatiar igual uma string com slice
console.log(alunos instanceof Array) //Essse alunos é uma instancia de array? true or false?

//Aqui basicamente, ele vai adicionando, após o último elemento de um array. no caso se tem 2 ali, ele poe um 3 indice que é josé, e dps um 4 indice que é Fábio e assim vai

alunos[alunos.length] = 'Jose'
alunos[alunos.length] = 'Fábio'
alunos[alunos.length] = 'Alana'

alunos[0] = 'João'; //Posso editar o indice zero, ou seja, ele troca Marcos por João
alunos[3] = 'Luiza'; //Aqui estou colocando um novo indice, apos o João, Indice 3 = Luiza

console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
console.log(alunos[3])

//Metodos em Arrays
alunos.unshift('Roberto') //Esse adiciona no começo do indice do array
alunos.push('Jóse') //Esse método adiciona o José no final do array
alunos.shift() //Esse ele remove o 1 elemento do indice 0
const removidoAluno1 = alunos.shift();
console.log(removidoAluno1)
alunos.pop() //Esse método ele remove o último elemento de umm array
const removidoAlunos = alunos.pop() //Aqui ele retorna o array removido
console.log(removidoAlunos)

delete alunos[1] //Essa forma ele remove do array o elementos
console.log(alunos)
