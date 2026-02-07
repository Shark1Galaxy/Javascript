/*
Exercício -
Aqui está a tradução para o português:

> **Complete a função de soma dos quadrados** de forma que ela **eleve ao quadrado cada número** passado para ela e **depois some todos os resultados**.
>
> Por exemplo, para **[1, 2, 2]**, ela deve retornar **9**, porque
> (1² + 2² + 2² = 1 + 4 + 4 = 9).

Entrada
[1,2,2]

Processo
1 - Vamos, fazer um meio de que pegar todos os numeros do array um por um = loop - V
2 - Precisamos criaru ma forma de aramzaenar a cada vez que ele em algum lugar - V
3- Pricesamos 1, multiplicar esse valores, com eles memso a cada vez que ele passa no loop. 1 x 1 , 2x2 ,p ois ele diz que é sobre e depois. jogar dentro de algum lugar. - V
4 - retorna o valor fora do loop uma vez que ele vai cancelar o loop. -V

Saida
9 = 1 + 4 + 4 = 9;

*/

function squareSum(numbers){
    let somaValores = 0;
    for(let pos in numbers){
      somaValores += numbers[pos] * numbers[pos]
    }
    return somaValores
}
listArray = [1,2,2]
squareSum(listArray)