/*const v = function(x){
    return x * 2
}
console.log(v(5))
*/

const botao = document.getElementById('botao-clicavel');

function alertUsuario(){
    alert('Botão clicado')
}
botao.addEventListener('click', alertUsuario);
  
//Função Anonima é fazer uma função, sem precisar por um nome dela
//EXEMPLO:
botao.addEventListener('click',  function(){
    alert('Botão clicado com função anonima')
});

// Exemplo 1: Função anônima para dobrar um número
const dobrar = function(num) {
    return num * 2;
};
console.log(dobrar(10)); // Saída: 20
