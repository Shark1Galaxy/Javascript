function soma(n1=0 , n2=0){ //Podemos usar o =0 para definir um valor padrão, caso o usuário não informe um valor, pq se n tiver nada na variável, o JS entende como NaN (Not a Number (sem número))
    return n1 + n2;
}
console.log(soma(7,3)); //o return, retorna o valor da função para onde ela foi chamada, ou seja n1(7) + n2(3) = 10