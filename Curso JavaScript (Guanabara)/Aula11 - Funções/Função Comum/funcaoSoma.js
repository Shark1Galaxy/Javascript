function soma(entradaNumero1, entradaNumero2){ //Parametros são variaveis locais
    return entradaNumero1 + entradaNumero2
} 
console.log(soma(5,2))


// Se um parâmetro não for definido ao chamar a função, por exemplo, se passarmos apenas entradaNumero1 e não entradaNumero2, o valor de entradaNumero2 será undefined. 
// Nesse caso, a soma resultará em NaN (por exemplo, 7 + undefined = NaN). 
// Para evitar isso, podemos definir um valor padrão para o parâmetro usando o operador =. 
// Assim, se o parâmetro não for informado, ele assumirá o valor padrão especificado.
function soma2(entradaNumero1, entradaNumero2){
    return entradaNumero1 + entradaNumero2
} 
console.log(soma2(7))