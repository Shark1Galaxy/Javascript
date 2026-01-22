/*
Em um sistema de e-commerce, cada produto é representado em JSON e possui um objeto de fotos, 
separado em: 
• fotoPrincipal 
• fotoSecundaria 
• fotoAdicional 

Na listagem, você precisa exibir: 
• O nome do produto 
• A fotoPrincipal 
Os demais dados não são necessários.
*/

function eComerce(){
    const produto = {
        nome: 'Tulipa',
        imagens: {
            fotoPrincipal: 'FOTO1',
            fotoSecundaria: 'FOTO2',
            fotoAdicional: 'Foto adicional'
        }
    }
    const {nome, imagens: {fotoPrincipal}} = produto
    return nome + ' ' +fotoPrincipal
}
console.log(eComerce())