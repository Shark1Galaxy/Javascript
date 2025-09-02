const pessoa ={
    nome: "Marcos", idade: 25
};

//key - value
for(let chave in pessoa){ // nome e idade
    console.log(chave,pessoa['nome']);
}