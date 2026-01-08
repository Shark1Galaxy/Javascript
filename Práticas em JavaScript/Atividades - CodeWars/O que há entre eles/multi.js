/*
Complete a função que recebe dois inteiros (a e b, onde a < b) e retorna um array (lista) com todos os números inteiros entre os parâmetros de entrada, incluindo eles mesmos.

Por exemplo:

a = 1
b = 4
→ [1, 2, 3, 4]

Entrada
A = 1 e B 4. ou seja, ele vai de 1 á 4

//Processo

/*
PROCESSO
Minha logica foi, se ele quer que ele quer que eu jogue na array o numero que vai de por exemplo: de 1 à 4, eu crio uma variavel que vai ser um array vazio, depois eu faço um laço de repetição com while, depois eu faço a condição de que enquanto o valor de A for menor ou igual ao valor de B, eu jogo o valor de a, dentro do valorArray, e depois eu incremento o valor de A, para que ele vá aumentando até chegar no valor de B (4), e quando chegar no valor de B, ele para o loop e retorna o valorArray com os valores dentro dele.

Saida
Sai dento do array = [1,2,3,4]
*/

function between(a, b){
  let valorArray = [];
  while(a <= b){
    valorArray.push(a);
    a++;
  }
  return valorArray;
}
between(1,4)

