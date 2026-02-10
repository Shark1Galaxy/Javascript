/* Crie uma função que recebe um array de 3 números
   e coloque eles em ordem crescente, sem usar métodos prontos */
function ordemCrescente(arr) {
    for (let indice = 0; indice < arr.length; indice++) {
        for (let segundaVolta = 0; segundaVolta < arr.length; segundaVolta++) {
            if (arr[segundaVolta] > arr[segundaVolta + 1]) {
                let temporario = arr[segundaVolta]
                arr[segundaVolta] = arr[segundaVolta + 1]
                arr[segundaVolta + 1] = temporario
            }
        }

        /*
        O que acontece aqui é o funcionamento do algoritmo Bubble Sort.

        A cada volta do loop externo (indice), o loop interno (segundaVolta)
        percorre o array comparando o elemento atual com o próximo.

        Se o valor atual for maior que o valor seguinte,
        eles trocam de posição usando uma variável temporária.

        Esse processo faz com que, a cada passagem completa,
        o maior número "flutue" para o final do array.
        */
    }
    return arr
}

console.log(ordemCrescente([8, 6, 1]))
