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
Bom, o quadrado perfeito é justamente pegar a raiz quadrada perfeita. depois tenta descobrir a proxima raiz perfeita;

1 - Vamos armazenar em algum lugar a raiz qudrada do numero da entrada do parametro;
2 - bom, preciamos antre de tudo fazer uam verificação onde, se for numero inteiro logo ér um quadrado perfeito. true se for float. falso
3 - Bom, para que seja descoberto a proxima raiz perfeita. precisamso fduplicar o resultado da raiz perfeita;
*/

function raizPerfeita(sq){
    const raizFeita = Math.sqrt(sq)
    if(Number.isInteger(raizFeita)){
        return (raizFeita + 1) ** 2
    } else {
        return -1
    }
}
const resultado = raizPerfeita(121)
console.log(resultado)