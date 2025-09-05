//Função que realiaza uma tarefa e não retorna nada
function dizerNome() {
    console.log('Marcos');
}
dizerNome();

//Função que realiza uma tarefa e retorna algo
function multiplicarPorDois(valor) { //Valor é um parametro
    return valor * 2; //Devolvendo para quem chamou a função(multplicarPorDois)
}
console.log(multiplicarPorDois(5)); //Aqui to chamando a função e passando o argumento 5