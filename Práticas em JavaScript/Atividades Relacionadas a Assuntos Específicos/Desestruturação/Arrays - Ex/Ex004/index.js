/*Na página de produto: 
• Capture a primeira foto e guarde em uma variável separada (foto principal) 
• As demais fotos devem ser exibidas como miniaturas utilizando um loop for  

Entendimento
Ele quer que eu pegue a 1 foto, e exiba o resto com o loop for? 
Mais ou menos, na vdd, ele quer que vc pegue a 1 foto, coloque dentro de um objeto com foto principal e oresto ai sim com arrayvazia
*/

const fotos = ['Foto1','Foto2','Foto3','Foto4','Foto5'] 

function firstAndRest(valores){
    const [primeiraFoto] = valores
    const arrayVazia = []
    for(let contador = 1; contador < valores.length; contador++){
        arrayVazia.push(valores[contador])
    }
    return {
        fotoprincipal: primeiraFoto,
        arrayVazia
    }
}
const resultado = firstAndRest(fotos)
console.log(resultado)