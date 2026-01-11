/*
1. Inverter Número 
Escreva uma função em JavaScript que inverta um número. 

Entrada
x = 32243

Processo
1 - Vamos criar a função com parametro numbers para receber os valores e a chama a baixo com os valores - V
2 - Nesse caso, para melhor resolução, eu converti o Number para uma string, assim, podendo usar o metodos para pesquisar na string - V
3 - Agora, precisamos pegar sempre pegar o ultimo elemento e ao mesmo tempo sempre que pega o ultimo elemento, jogar ele em uma variavel de string vazia. V
4 - Bom, já que queremos o último elemento , eu pensei, tá, o metodo, at() ele aceita umeros negativos, e ja´que le me retorna o carectere do indice que eu mencionodentro dele. logo posso usar o -1. ai ele me retorna. ai. com o loop, poderiamos fazer o seguinte: eu faria contador recebe = 1, onde, enquanto contador que é 1, for menor ou igual ao tamanho da string de conversãoToString que é 5. ele vai executar o blco de baixo, onde como dissie, já que at recebe -1, eu posos dizer que conversaoTOString.at(-contador). oq significa. contador ele vale 1, correto? se eu flo, que eu quero qeu ele pege o at(-1) ultimo elemento, eu possoar usar o proprio contador que é e colocar dentro do at(-contadr) === at(-1). e já qeu ele executa o bloco de basixo, e adiciona +1 em contador. logo assim que ele veriicar a condição e ver qeu é verdadeir e descer. vai ser at(-contador) === at(-2). logo vai pegar o 2 elemetno do indice da string.
5 - Como queremos o último elemento, pensei em usar o método at(), já que ele aceita índices negativos.
Esse método retorna o caractere do índice informado, então posso usar -1 para pegar o último caractere.

Com o loop, dá pra fazer assim: crio um contador começando em 1. Enquanto o contador for menor ou igual ao tamanho da string (conversaoToString.length), o código executa.

Dentro do loop, uso conversaoToString.at(-contador).
Quando o contador vale 1, isso vira at(-1) e retorna o último caractere.
Depois o contador aumenta, vira 2, e então at(-2) pega o penúltimo caractere, e assim por diante, até percorrer toda a string de trás para frente.


Saída esperada: 
34223 
*/
function converterNumeros(numbers){
    let conversaoToString = String(numbers)
    let armazemNewString = ''; //isso é uma string vazia
    for(let contador = 1; contador <= conversaoToString.length; contador++){ //tamanho da string 5
        armazemNewString += conversaoToString.at(-contador); //eu estou armazenando esses valores dentro de amarzem. a cada vez que passsa o loop dentro 
    }
}
converterNumeros(12345)
