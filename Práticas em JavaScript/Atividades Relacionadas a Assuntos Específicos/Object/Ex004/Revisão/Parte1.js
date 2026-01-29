/*
Exibir Status de Leitura  
Escreva um programa em JavaScript para exibir o status de leitura (nome do livro, autor e status 
de leitura) dos seguintes livros:  

var library = [      {  
       author: 'Bill Gates',        
       title: 'The Road Ahead',  
       readingStatus: true     },  
   {  
*/
const library = [{author: 'Bill Gates',title: 'The Road Ahead', readingStatus: true}]

function statusReading(library){
    return library[0].readingStatus == true ? `Autor: ${library[0].author} e Titutlo: ${library[0].title}` : 'Não está lendo';
}

console.log(statusReading(library))
