//Estudar mais sobre o infinity que vi ontem!
let numeroFirst = 9.54687;
//Eles são arredondados para um numero inteiro
console.log(Math.floor(numeroFirst)) //arredondado para baixo para o número inteiro mais próximo.
console.log(Math.ceil(numeroFirst)) //Ele arredonda o número para cima - 10
console.log(Math.round(numeroFirst)) //Ele retorna o número inteiro mais próximo:
console.log(Math.max(1,2,3,4,5,-10,-50,15000,9,8,9,6)); //Ele retorna o maior número dessa sequência.
console.log(Math.min(1,2,3,4,5,-10,-50,15000,9,8,9,6)); //Ele retorna o menor número dessa sequência.
console.log(Math.PI) //Ele retorna o numero de pi
console.log(Math.pow(2, 10)) //Ele retorna o valor de 2 elevado à potência de 10, ou seja, 2 elevado a 10. (Seria a mesma coisa de usar o ** operador aritimètico 2 ** 10)
let raizQuadrada = 9;
console.log(Math.sqrt(raizQuadrada)) //Ele diz a raiz quadrada do numero. eu poderia fazer também raizQuadrada ** 0.5 ou raizQuadrada ** (1/2) - 1 / 2 da 0,5 kkk 
console.log(Math.abs(-4,7)) // ele retorna o valor absoluto de um número, ou seja, transforma qualquer número em positivo (se ele já for positivo, nada muda). 

/*
 * Math.abs() retorna o valor absoluto de um número.
 * Isso significa que ele sempre retorna um número positivo.
 * Exemplo: -4.7 se torna 4.7.
 *Math.abs(-10); // 10
Math.abs(5);   // 5
Math.abs(0);   // 0 
 *
 */


// https://www.w3schools.com/js/js_random.asp - Estudar mais sobre revisãr etc
//Mas, como poderiamos transformar esses números floot em um inteiro? bom, de acordo com o w3school, devemos usar o Math.floor - para "converter" para inteiro!
const numeroAleatorio = Math.floor(Math.random() * 10)/*
 * Gera um número aleatório entre 0 e 9 (sem incluir o 10).
 *
 * Math.random() gera um número decimal entre 0 e 1.
 * Exemplo: 0, 0,237, 0,9999, (nunca chega a 1).
 *
 * Multiplicando por 10, o valor passa a variar de 0 até 9.99.
 * Exemplo: 0.0, 3.5, 9.99. (Não incluindo, 10)
 *
 * Math.floor() arredonda o número para baixo,
 * transformando-o em um número inteiro.
 *
 * Resultado final: números inteiros de 0 a 9.
 * 3,5 torna-se 3
 * 9,99 torna-se 9
 * 0,1 torna-se 0
 * 
 * Os possíveis resultados inteiros são então de 0 a 9 (inclusive).
 * Em outras palavras, o intervalo é [0, 9] .
 */
console.log(numeroAleatorio) 

//Ok. mas caso eu queria colocar não de 0 à 10, mas de sla, 1 à 10 ou 2 à 10, como que faço?
const numeroAleatorio2 = Math.floor(Math.random() * 10)  +  3 ; 

/*
Regra geral
Para gerar um número inteiro entre mínimo e máximo (inclusive):
Math.floor(Math.random() * (max - min + 1)) + min;

Exemplos práticos
🔹 De 0 a 10
Math.floor(Math.random() * 11);

🔹 De 1 a 10
Math.floor(Math.random() * 10) + 1;
👉 O + 1 empurra o intervalo para começar no 1.

🔹 De 1 a 100
Math.floor(Math.random() * 100) + 1;

🔹 De 2 a 10
Math.floor(Math.random() * 9) + 2;
👉 Agora o intervalo começa no 2.

🔹 De 3 a 10
Math.floor(Math.random() * 8) + 3;

Por quê funciona?
Math.random() * 8 → gera números de 0 até 7.999…
Math.floor() → transforma em 0 a 7
+ 3 → desloca o intervalo para 3 a 10

Resultado final:
👉 números inteiros possíveis: 3, 4, 5, 6, 7, 8, 9, 10
*/