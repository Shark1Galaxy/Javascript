const pessoa = {
    nome: 'Marcos',
    idade: 23
}

//Key-value - Chaves e valor
for(let chave in pessoa){
    console.log(chave, pessoa['nome'] + ' ou ' + pessoa.nome)
}

const coresMinhas = ['Red', 'blue', 'green'];
for(let indice in coresMinhas){
    console.log(indice, coresMinhas[indice])
}