/*
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

Você provavelmente conhece o sistema de “curtidas” do Facebook e de outros sites. As pessoas podem curtir publicações de blog, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado de um desses itens.

Implemente uma função que receba um array contendo os nomes das pessoas que curtiram um item. Ela deve retornar o texto de exibição conforme mostrado nos exemplos abaixo:

[]                                -->  "ninguém curtiu isso"
["Peter"]                         -->  "Peter curtiu isso"
["Jacob", "Alex"]                 -->  "Jacob e Alex curtiram isso"
["Max", "John", "Mark"]           -->  "Max, John e Mark curtiram isso"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob e 2 outros curtiram isso"

Nota:
Para 4 ou mais nomes, o número em “e 2 outros” simplesmente aumenta conforme a quantidade de pessoas adicionais.

Processo

1 - O objetivo do exercício é criar um sistema de curtidas semelhante ao do Facebook.
    A função deve analisar a quantidade de nomes dentro do array e retornar uma frase
    diferente para cada situação.

2 - Para resolver isso, utilizamos condições baseadas no tamanho do array (names.length):
    - Se o array estiver vazio (length === 0), retornamos "no one likes this".
    - Se houver 1 nome, retornamos "nome[0] likes this".
    - Se houver 2 nomes, retornamos "nome[0] and nome[1] like this".
    - Se houver 3 nomes, retornamos "nome[0], nome[1] and nome[2] like this".

3 - Quando houver 4 ou mais nomes, exibimos apenas os dois primeiros nomes
    e informamos quantas outras pessoas curtiram.
    Para isso, usamos (names.length - 2), pois os dois primeiros nomes já foram exibidos,
    e o restante entra como "others".

4 - Dessa forma, a função consegue gerar corretamente o texto de curtidas
    para qualquer quantidade de pessoas.
*/
const pessoas= ["Alex", "Jacob", "Mark", "Max"];
function likes(names) {
    if(names.length == 0){
        return 'no one likes this'
    } else if (names.length == 1){
        return `${names[0]} likes this`
    } else if(names.length < 3){
        return `${names[0]} and ${names[1]} like this`
    } else if(names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}
likes(pessoas)

