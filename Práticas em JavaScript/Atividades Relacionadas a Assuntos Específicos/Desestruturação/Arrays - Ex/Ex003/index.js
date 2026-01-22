/*Em um sistema de e-commerce, todos os produtos possuem o nó de fotos, porém esse array pode estar 
vazio, já que o cadastro de fotos não é obrigatório. 

Neste caso: 
• Extraia a primeira foto do array 
• Caso ela não exista, exiba uma foto padrão com a URL: */

const fotos = ['Foto1','Foto2','Foto3','Foto4','Foto5'] 
const [primeiraFoto = 'https://i.pinimg.com/1200x/73/ab/3e/73ab3e50436cb47f79922c2b68b2e4d9.jpg'] = fotos //Caso não receba valores, com padrão ela vai receer o link da foto
console.log(primeiraFoto)