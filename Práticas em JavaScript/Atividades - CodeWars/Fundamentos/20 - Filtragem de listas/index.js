/*
Neste kata, você irá criar uma função que recebe uma lista contendo inteiros não negativos e strings, e retorna uma nova lista com as strings removidas (filtradas).

Exemplos:

filter_list([1, 2, 'a', 'b']) == [1, 2]
filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

Entrad
filter_list([1, 2, 'a', 'b'])

Processo
Precisamos fazer uma foram de percorrer o array e a cada vez que ele me retornar verificar se e´uma string ou não,. caso seja, ele me retonra os valores em um array vazia dos numeos apenas

1 - Criar fução com o parametro para recever os valores 
2 - Bom, basicamente ele quer pegar apenas os valores positivos do array. pra isso antes,vamos fazer um loop para rodar o array todo.
3 - Com isso podemos usar o metodo isInteger. pois ele vai me retornar verdadeiro se é ou não um numero verdadeiro, e com isso, criamos uma condição para caso seja true. ele vai me retornar o valor apenas que é inteiro.

Saida([1,2])
*/
function filter_list(l) {
    let arrayVazia = []
    for(let position in l){
        if(Number.isInteger(l[position])){
            arrayVazia.push(l[position])
        }
    }
    return arrayVazia
}

const resultado = filter_list([1, 'a', 'b', 0, 15])
console.log(resultado)