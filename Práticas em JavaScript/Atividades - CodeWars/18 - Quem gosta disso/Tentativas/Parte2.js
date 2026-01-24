/*
Você provavelmente conhece o sistema de "curtidas" do Facebook e de outras páginas. As pessoas podem "curtir" postagens de blog, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado de tal item.

Implemente uma função que recebe um array contendo os nomes das pessoas que curtiram um item. Ela deve retornar o texto de exibição conforme os exemplos:

//Entrada                           //Saida
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Observação: Para 4 ou mais nomes, o número em "e 2 outros" simplesmente aumenta.

Processo
Bom, preciasmos criar uam forma de ler o tamanho do array e a partir disso. retoranr a string correspondente as pessaos e seus taamanhao etc
*/

function likes(names) {
    const [primeiroNome,segundoNome,terceiroNome] = names
  switch(names.length){
    case 0: return 'no one likes this';
    case 1: return `${primeiroNome} likes this`;
    case 2: return `${primeiroNome} and ${segundoNome} like this`;
    case 3: return `${primeiroNome}, ${segundoNome} and ${terceiroNome} like this`;
    default: return `${primeiroNome}, ${segundoNome} and ${names.length - 2} others like this`
  }
}
likes([])