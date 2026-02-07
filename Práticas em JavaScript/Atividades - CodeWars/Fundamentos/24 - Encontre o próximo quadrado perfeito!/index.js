/*
Você pode conhecer alguns quadrados perfeitos bem grandes. Mas e o PRÓXIMO?

Complete o método findNextSquare, que encontra o próximo quadrado perfeito inteiro depois daquele passado como parâmetro.
Lembre-se de que um quadrado perfeito inteiro é um número inteiro n tal que √n também é um número inteiro.

Se o argumento não for um quadrado perfeito, retorne -1 ou um valor vazio como None ou null, dependendo da linguagem utilizada.
Você pode assumir que o argumento é não negativo.

Exemplos (Entrada → Saída)
121 → 144
625 → 676
114 → -1   # porque 114 não é um quadrado perfeito

Processo
O processo consiste em calcular a raiz quadrada de um número e verificar se o resultado é um valor inteiro. Em JavaScript, isso é feito utilizando Math.sqrt(numero). Caso a raiz quadrada não seja inteira, significa que o número não é um quadrado perfeito, e nesse caso o retorno deve ser -1. Se a raiz quadrada for inteira, isso indica que o número é um quadrado perfeito, como por exemplo 121, cuja raiz é 11, já que 11 × 11 = 121, ou 144, cuja raiz é 12, pois 12 × 12 = 144. A partir dessa raiz inteira, encontramos o próximo quadrado perfeito incrementando a raiz em +1 e elevando esse novo valor ao quadrado, utilizando o operador ** ou Math.pow. Assim, se a raiz for 11, a próxima raiz será 12, e o próximo quadrado perfeito será 12 ** 2, resultando em 144. Dessa forma, a lógica é simples: se a raiz quadrada for inteira, calcula-se o próximo quadrado perfeito; caso contrário, retorna-se -1.


*/

function findNextSquare(sq){
    const resultado = Math.sqrt(sq)
    if(Number.isInteger(resultado)){
       return (resultado + 1) ** 2;
    } else {
        return -1
    }
}
console.log(findNextSquare(625))
