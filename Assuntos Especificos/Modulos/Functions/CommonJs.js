//Modulos com CommonJs
const soma = (a,b) => a + b

const subtratio = (a,b) => a - b

//Forma mais simples, exportando um objeto com as funções
module.exports = { soma, subtratio }

//Forma mais simples, exportando apenas uma função
module.exports = soma // Função unica

//Forma mais verbosa
module.exports = { 
    soma(a,b) {
        return a + b
    }, 
    subtratio(a,b) {
        return a - b
    }
}

//Forma mais verbosa, exportando apenas uma função com arrow function
module.exports = {
    soma: (a,b) => a + b,
    subtratio: (a,b) => a - b
}