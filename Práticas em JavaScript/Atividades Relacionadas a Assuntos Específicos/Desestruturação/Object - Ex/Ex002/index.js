/*
O objeto de fotos sempre existe, porém: 
• Apenas a fotoPrincipal vem sempre preenchida 
• fotoSecundaria e fotoVerso podem não existir 

Caso alguma delas não esteja disponível, deve-se usar o valor padrão: 
O objetivo é extrair 3 fotos do produto. 
*/

function eCommerce(){
    const fotos = {
        fotoPrincipal: 'FOTO1'
    }
    const {fotoPrincipal = 'FOTORESERVA', fotoSecundaria = 'foto', fotoVerso ='foto'} = fotos //Foi definido como padrão em fotoPrincipal, caso o resultaod de como undefined
    return fotoPrincipal + ' ' + fotoSecundaria + ' ' + fotoVerso
}
console.log(eCommerce())