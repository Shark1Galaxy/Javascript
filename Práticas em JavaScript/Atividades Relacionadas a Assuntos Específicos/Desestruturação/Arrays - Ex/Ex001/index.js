/*
1️⃣ Exibir apenas a primeira foto do produto 
Em um sistema de e-commerce, cada produto possui uma representação em formato JSON, com os dados do 
produto e um array de fotos. 

Na listagem de produtos, você precisa exibir somente a primeira foto, portanto basta capturar o primeiro 
valor do array. 
Os demais valores não são necessários.
*/

const fotos = ['Foto1','Foto2','Foto3','Foto4','Foto5'];
const [primeiraFoto] = fotos
console.log(primeiraFoto)