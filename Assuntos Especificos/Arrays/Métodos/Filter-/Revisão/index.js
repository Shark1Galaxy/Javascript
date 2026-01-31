const pessoas = [
    {nome: 'Marcos', idade: 23},
    {nome: 'Maria', idade: 25}
]

const resultadoFinal = pessoas.filter(function(idadeMaior){
    return idadeMaior.idade > 23 
})
console.log(resultadoFinal);

//Retorne todas as idades maiores ou iguais a 18
const ages = [32, 33, 16, 40];

const resultado = ages.filter(function(valorAtual){
    return valorAtual < 18
});
console.log(resultado);