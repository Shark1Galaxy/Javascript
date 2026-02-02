/*
https://www.youtube.com/watch?v=F0FoCmNV0WM
https://www.youtube.com/watch?v=nSkKB0i8Kno
05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem 
crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise 
sobre bubble sort em js.

Entrada
[5,3,2]

Processo
1 - Precisamos criar uma função, com parametro do array - V
2 - Bom, o bubblesort, ele basicametne vai comparrar os numeros no caso, o indice atual com seu visinho, ent faazemos um loop para pecorrer o array, e comparar o elemento com o visinho.
3 - So que, o buble sort, ele justamente faz com que o numero do comçeo se for maior seja jogadord no final, mas essa foram de jogar no final faz que o umero subsequente fique preso no meio do caminho. onde, para que garantirmos isso, preciamos criarmos um segundo loop. exemplo:

Vamos ver um exemplo prático com o array [5, 3, 2]:
Passagem 1 (O primeiro Loop):

Comparar 3 > 2: O 3 é maior, então trocam. -> Array fica [3, 5, 2]
Comparar 3 > 1: O 3 é maior, então trocam. -> Array fica [3, 2, 5]

Percebe-se que o número 2 ficou preso no meio do caminho. Para resolver isso corretamente, precisamos executar um novo loop para percorrer o array novamente e reorganizar os valores, assim como fizemos na primeira passagem.
Antes disso, é fundamental verificar se o número atual é maior que o próximo, usando a condição
if (arr[position] > arr[position + 1]).
Exemplo: 3 > 2 → nesse caso, os valores precisam ser trocados de lugar.
Mas essa troca não pode ser feita diretamente. Se fizermos algo como
arr[position] = arr[position + 1], o valor original será sobrescrito.
Por exemplo, o 5 desapareceria, resultando em dois 3 no array 😱, porque o valor original de arr[position] é perdido.
Por isso, o processo correto de troca segue estes passos:

Verificamos se o índice atual é maior que o próximo.
Array inicial: [5, 3, 2]

Armazenamos temporariamente o valor do índice atual (o maior) em uma variável auxiliar:
let temporariaVariavel = arr[position]
Estado: [5, 3, 2] | temporariaVariavel = 5

Substituímos o valor do índice atual pelo valor do índice vizinho:
arr[position] = arr[position + 1]
Estado intermediário: [3, 3, 2]

Por fim, colocamos o valor armazenado na variável temporária no índice vizinho:
arr[position + 1] = temporariaVariavel
Resultado após a primeira comparação: [3, 5, 2]

Esse processo garante que os valores sejam trocados corretamente sem perda de dados, permitindo que o array seja ordenado progressivamente a cada nova iteração do loop.
4 - Porém, se verificiarmos , vemos que a saida foi [3,2,5], poisde fato o 5 ele flutuou até o fim do array, mas o 2 ficou preso no moeio do caminho como poderia resolver isso, bom, da mesma foram fizemos um loop pra pecorerr a 1 vez, fazemos um novo, porém dentro do loop que da a 1 passada no array. Esse novo loop vai fazer com que o algoritmo execute a primeira onda de verificação (no nosso array de exemplo, essa verificação é flutuar o 5 até o final do Array) que em seguida fará a segunda onda de verificação, num total de verificações com o tamanho do Array, simbolizando que todos os números dentro do Array serão utilizados"

Saida
[2,3,5]
*/

function bubbleSort(arr){
    //1 verificação no array para verificiar os numeros maiores
    for(let position = 0; position < arr.length; position++){ 
        //2 verificação no array para verificiar os numeros maiores
        for(let indice = 0; indice < arr.length; indice++){
            if(arr[indice] > arr[indice + 1]){ //Condição, onde vai verficar, se o indice 0(5) > indice 1(3), caso seja verdadeiro ele executa as seguintes instruções:
            let temporariaVariavel = arr[indice] //Aqui eu vou guardar o valor atual da posição. que no nosso exemplo é 5
            arr[indice] = arr[indice + 1] // Aqui estou falando que o indice atual, vai ser apagado (5) do array e substituido pelo proximo indice do array1 (3)
            arr[indice + 1] = temporariaVariavel //e aqui, ele vai pegar o indice atual que é 3, e vai substituir pelo 5 que foi armazenado na variavel a cima de temporariaVariavel;
        }
    }
 }
    console.log(`Array Ordenado: ${arr} ` );
}
bubbleSort([5,3,2,10,15])

/* Passos do array */
/* 1 - O índice 0 é maior que o índice 1? Se sim, executamos o bloco abaixo - arr[position] > arr[position + 1]*/
/* Array: [5, 3, 2] */

/* 2 - Armazenamos o valor do índice maior atual (5) em uma variável temporária -  let temporariaVariavel = arr[position] */
/* Array: [5, 3, 2] | temporariaVariavel = 5 */

/* 3 - Pegamos o índice atual (5) e substituímos pelo índice vizinho (3)- arr[position] = arr[position + 1] */
/* Array: [3, 3, 2] */

/* 4 - Pegamos o índice vizinho (3) e substituímos pelo valor armazenado na variável temporária (5) */
/* Array: [3, 5, 2] */
/* Resultado final após primeira comparação: [3, 5, 2] */