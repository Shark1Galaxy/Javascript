/*
Nesta tarefa simples, você recebe um número e precisa torná-lo negativo. Mas talvez o número já seja negativo?

Exemplos
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Processo
BOm, como posso deixar um numero negativo? se ele entrar positivo, sai negativo

Notas
O número pode já ser negativo, caso em que nenhuma alteração é necessária.
O zero (0) não é verificado quanto a nenhum sinal específico. Zeros negativos não fazem sentido matemático.
*/

const makeNegative = num => num > 0 ? -num : num;
console.log(makeNegative(10))

cost