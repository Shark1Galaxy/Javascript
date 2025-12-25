/*
//Codigo convensional e nada viavel
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
console.log('Tudo bem?');
*/

//Estrutura de repetição com texte no inicio - testa, executa , volta , texta , executa e assim vai
let contador = 1; //Contador começa com 1
while(contador <= 6){ //Enquanto contador for < que 6. ele vai executar o bloco de baixo ↓
    console.log(`Passo ${contador}`)
    contador++ 
    /*
    Assim que esse bloco é executado, o contador inicia com valor 1.
    Em seguida, o código entra no while e executa o bloco interno.
    Ao final da execução, ocorre o contador++, que incrementa o valor do contador em 1.
    O fluxo então retorna para a condição do while, que é verificada novamente.
    Esse processo se repete, fazendo o contador assumir os valores 2, 3, 4, 5 e 6.
    Quando o contador chega a 6, a condição do while deixa de ser verdadeira (pois 6 não é menor que 6).
    Nesse momento, a condição retorna false e o laço while é encerrado.
    */
}

