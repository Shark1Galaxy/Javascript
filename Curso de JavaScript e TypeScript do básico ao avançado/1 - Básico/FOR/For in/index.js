//For in -> Retorna o indice ou chave (string, array ou objetos)
const frutas = ['Pera', 'Uva', 'Maçã'];

console.log('\nPercorrendo o indice com os valores\n')
for(let positionn in frutas){
    console.log(frutas[positionn])
}

console.log('\nPercorrendo o indice\n')
for(let positionn in frutas){
    console.log(positionn)
}

console.log('\nPercorrendo um objeto(iterado) com valores\n')
const pessoa = {
    name: 'Marcos',
    sobrenome: 'Vinicius',
    idade: 23
}
for (let chave in pessoa){
    console.log(pessoa[chave])
}

console.log('\nPercorrendo um objeto(iterado) só a chave\n')
for (let chave in pessoa){
    console.log(chave)
}