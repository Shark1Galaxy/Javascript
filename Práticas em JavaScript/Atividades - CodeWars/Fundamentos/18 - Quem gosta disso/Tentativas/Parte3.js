/*
Você provavelmente conhece o sistema de “curtidas” do Facebook e de outros sites. As pessoas podem curtir publicações de blog, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado de um desses itens.

Implemente uma função que receba um array contendo os nomes das pessoas que curtiram um item. Ela deve retornar o texto de exibição conforme mostrado nos exemplos abaixo:

[]                                -->  "ninguém curtiu isso"
["Peter"]                         -->  "Peter curtiu isso"
["Jacob", "Alex"]                 -->  "Jacob e Alex curtiram isso"
["Max", "John", "Mark"]           -->  "Max, John e Mark curtiram isso"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob e 2 outros curtiram isso"

Nota:
Para 4 ou mais nomes, o número em “e 2 outros” simplesmente aumenta conforme a quantidade de pessoas adicionais.
*/
function likes(names) {
    const [primerioNome,segundoNome,terceiroNome] = names
  switch(names.length){
    case 0: return 'no one likes this'
    case 1: return `${primerioNome} likes this`
    case 2: return `${primerioNome} and ${segundoNome} like this`
    case 3: return `${primerioNome}, ${segundoNome} and ${terceiroNome} like this`
    default: return `${primerioNome}, ${segundoNome} and ${names.length - 2} others like this`
  }
}