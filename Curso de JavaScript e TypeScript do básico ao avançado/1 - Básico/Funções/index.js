//Função simples que retorna valores
function saudacao(nome){
    return `Bom dia, ${nome}!` //Ele diz pra encerrar: encerre essa função. nada mais sera executado, ainda que tenha mais linha. o return ele encerra a função
}
const valorQualquer = saudacao('Marcos');
console.log(valorQualquer);


function somaValores(valor1, valor2){
    const resultado = valor1 + valor2
    return resultado  //Ele diz pra encerrar: encerre essa função. nada mais sera executado, ainda que tenha mais linha. o return ele encerra a função
}

/*
//Funções são blocos de código que só são executados quando chamadas Elas podem receber parâmetros, processar valores e retornar um resultado. A função continua existindo no programa, mas sua execução acontece apenas no momento da chamada.

Funções não “se apagam” após a execução
A função continua existindo na memória enquanto o programa estiver rodando (ou enquanto houver referência a ela).

Funções podem sim ser guardadas em variáveis
Em JavaScript, funções são valores. Elas podem ser armazenadas em variáveis, passadas como parâmetros e retornadas por outras funções.

Execução ≠ armazenamento
O que “não fica guardado” é o resultado da execução, a menos que você salve esse resultado em uma variável.
*/
console.log(somaValores(2,2))
console.log(somaValores(1,3))
console.log(somaValores(3,5))

//Não é possivel pegar uma variavel dentro de uma função, pois ela está protegida
//Tanto que , se fizemos uma variavel com o mesmo nome, só que fora da função, vai funcionar pois, como disse, oq ta dentro da função. não interfere fora
function somaValor(valor1, valor2){
    const resultado = valor1 + valor2
    return resultado //Ele diz pra encerrar: encerre essa função. nada mais sera executado, ainda que tenha mais linha. o return ele encerra a função
}
const resultado = somaValor(1,4)
console.log(resultado + ' Pegou a variável fora')

function somaValor(valor1, valor2){
    const resultado = valor1 + valor2
    return resultado //Ele diz pra encerrar: encerre essa função. nada mais sera executado, ainda que tenha mais linha. o return ele encerra a função
}

