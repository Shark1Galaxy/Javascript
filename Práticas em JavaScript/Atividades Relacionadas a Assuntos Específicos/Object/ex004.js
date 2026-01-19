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
const libraruStatus = function(){
    const library = {
        author: 'Bill Gates',        
       title: 'The Road Ahead',  
       readingStatus: true
    }   
    return `O Author do livro é: ${library.author}.O Titulo do livro é: ${library.title}. O status do livro está em ${library.readingStatus === true ? 'O livro está ativo': 'O livro está offline'}`
}
console.log(libraruStatus());