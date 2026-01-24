/*
Você provavelmente conhece o sistema de "curtidas" do Facebook e de outras páginas. As pessoas podem "curtir" postagens de blog, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado de tal item.

Implemente uma função que recebe um array contendo os nomes das pessoas que curtiram um item. Ela deve retornar o texto de exibição conforme os exemplos:

//Entrada                           //Saida
[]                                -->  "ninguém curtiu isto"
["Peter"]                         -->  "Peter curtiu isto"
["Jacob", "Alex"]                 -->  "Jacob e Alex curtiram isto"
["Max", "John", "Mark"]           -->  "Max, John e Mark curtiram isto"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob e 2 outros curtiram isto"

Observação: Para 4 ou mais nomes, o número em "e 2 outros" simplesmente aumenta.

Processo
Bom, preciasmos criar uam forma de ler o tamanho do array e a partir disso. retoranr a string correspondente as pessaos e seus taamanhao etc
*/

function likes(names) {
    const [primeiroNome, segundoNome,terceiroNomes] = names
    if(names.length <= 0){
        return 'no one likes this'
    } else if(names.length < 2){
        return `${primeiroNome} likes this`
    } else if(names.length < 3){
        return `${primeiroNome} and ${segundoNome} like this`
    } else if(names.length < 4){
        return `${primeiroNome}, ${segundoNome} and ${terceiroNomes} like this`
    } else {
        return `${primeiroNome}, ${segundoNome} and ${names.length - 2} others like this`
    }
}
const resultado = likes(["Alex", "Jacob", "Mark", "Max"])
console.log(resultado)