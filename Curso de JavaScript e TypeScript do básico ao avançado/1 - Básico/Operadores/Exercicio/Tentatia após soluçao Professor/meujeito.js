

//Capturando o evento de submit do formulário
const form = document.querySelector("#form-imc"); 
/*
Descrição
O método preventDefault() cancela o evento se ele for cancelável, o que significa que a ação padrão associada ao evento não ocorrerá.

Por exemplo, isso pode ser útil quando:

Ao clicar no botão "Enviar", impeça o envio do formulário.

Observação: Nem todos os eventos são canceláveis. Use a propriedade `cancelable` para verificar se um evento pode ser cancelado.

Observação: O método preventDefault() não impede a propagação adicional de um evento pelo DOM. Use o método stopPropagation() para lidar com isso.
*/
form.addEventListener('submit', function(evento){
    evento.preventDefault(); //Pesquisar e estudar mais sobre esse método preventDefautl();. O evento, ele serve para armazenar no caso aqui, o evento de clicar

   const entradaPeso =  Number(evento.target.querySelector('input#peso').value); //Pegando os elementos atraves do DOM
   const entradaAltura = Number(evento.target.querySelector('input#altura').value);//Pegando os elementos atraves do DOM
   
   const calculadoraDeImc = calculoImc(entradaPeso, entradaAltura); //Chamando a função de calcular o imc e dando os valores dos inputs nela
   const nivelFunction = nivelImc(calculadoraDeImc); //Aqui estou chamando função de nivel de imc, com o calculo de imc detro dela
   setarResultado(`o Seu nivel de IMC é: ${calculadoraDeImc} (${nivelFunction})`) //Chamando função para jogar o resultado na tela
   corSet(nivelFunction)
});

//Função para dar a cor ao paragrafo
function corSet(nivel){
    const resultadoFinal = document.querySelector("div#resultado")
    if(nivel <= 24.9){
        return resultadoFinal.style.bacgroudn = 'green';
    }
}

//Função para em qual nivel de imc a pessoa está
function nivelImc(imcValor){
    const nivel = ['Abaixo do peso',"Peso normal",'Sobrepeso','Obesidade grau 2','Obesidade grau 2','Obesidade grau 3'];
    if(imcValor < 18.8){return nivel[0]}
    if(imcValor < 24.9){return nivel[1]}
    if(imcValor < 29.9){return nivel[2]}
    if(imcValor < 34.9){return nivel[3]}
    if(imcValor < 39.9){return nivel[4]}
    if(imcValor > 40) {return nivel[5]}
    
}

//Função para calcular o valor IMC
const calculoImc = (peso,altura) => {return (peso / (altura ** 2)).toFixed(2)};

//Função para criar paragrafo
const criarParagrafo = () => {const criandoParagrafo = document.createElement('p'); return criandoParagrafo}


function setarResultado(resultadoMensagem){
    const resultadoFinal = document.querySelector('div#resultado'); //Chamando a div de resultado para o javascritp com o 
    resultadoFinal.innerHTML = ''; //Ele exclui o oq tiver dentro da div, assim que for achamado.
    const paragrafoCriador = criarParagrafo(); //Chamando a função
    paragrafoCriador.innerHTML = resultadoMensagem; //Dando um valor a função
    resultadoFinal.appendChild(paragrafoCriador) //Colocando o paragrafo criado dentro da DIV
    
}