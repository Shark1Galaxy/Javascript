/*
Nesta tarefa simples, você recebe um número e precisa torná-lo negativo. Mas talvez o número já seja negativo?

Exemplos
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notas
O número pode já ser negativo, caso em que nenhuma alteração é necessária.
O zero (0) não é verificado quanto a nenhum sinal específico. Zeros negativos não fazem sentido matemático.

Entrada
makeNegative(1); 

Processo
1 - o sistema quer pegar os numeros inteiros e converte para negativos, com isso precisasmo primeiro cirar a função para depois fazemos isso
2 - 

Saida
 return -1
*/

const tornandoNevativo = valor =>  valor >= 0 ? -valor : valor;
console.log(tornandoNevativo())

