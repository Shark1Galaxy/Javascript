/* Cria um array de 1 até N substituindo:
https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
  - Múltiplos de 3 por "Fizz"
  - Múltiplos de 5 por "Buzz"
  - Múltiplos de 3 e 5 por "FizzBuzz"

  N será sempre maior ou igual a 1.

  Entrada
  fizzbuzz(3)
  
  Processo
  Só criar uma função, onde eu verifico se o resto da divisão é zero usando o operador %, simples assim. Essa função recebe um número n e devolve um array novo, que vai conter todos os números do começo até o valor de n. Por exemplo, fizzbuzz(3) retorna [1, 2, 3], porque eu faço um loop de 1 até 3. Durante esse loop, sempre que eu encontrar números que sejam múltiplos de 3 e 5, eu jogo "FizzBuzz" no array; se forem múltiplos apenas de 3, eu coloco "Fizz"; se forem múltiplos apenas de 5, eu coloco "Buzz"; e, caso não sejam múltiplos de nenhum dos dois, eu adiciono o próprio número ao array.

  Saida
  [1, 2, "Fizz"]
*/

function fizzbuzz(n){
  let arrayVazia = [];
  for(let contador = 1; contador <= n; contador++){
    if(contador % 3 === 0 && contador % 5 === 0){
      arrayVazia.push('FizzBuzz')
    } else if(contador % 3 === 0){
      arrayVazia.push('Fizz');
    } else if(contador % 5 === 0){
      arrayVazia.push('Buzz')
    } else {
      arrayVazia.push(contador)
    }
  }
  return arrayVazia
}
console.log(fizzbuzz(15))