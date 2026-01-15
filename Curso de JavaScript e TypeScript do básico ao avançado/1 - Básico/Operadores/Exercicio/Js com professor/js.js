//Capctura evento de sbumit do formulário
const form = document.querySelector('#form-imc');

//Prevensão de resetar a pagina automaticamente
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('input#peso');
    const inputAltura = evento.target.querySelector('input#altura');

    const pesoPessoa = Number(inputPeso.value);
    const alturaPessoa = Number(inputAltura.value);

    const functionImc = getImc(pesoPessoa, alturaPessoa);
    const nivelImc = getImcNivel(functionImc)
    
    const mensagem = `O seu IMC é ${functionImc} (${nivelImc})`
    setResultado(mensagem)
    
});

//Função para saber o nivel do Imc 
function getImcNivel(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc < 18.5)  return nivel[0]
}
//Função para calcular o IMC
const getImc = (peso, altura) => {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
} 

//Função para criar paragrafos
function criarParagrafo(className){
    const paragrafoCriado = document.createElement('p');
    paragrafoCriado.classList.add('className'); //Aqui estou dizendo uma classe para meu paragrafo assimque a função for chamada
    return paragrafoCriado
}

//Função criada para jogar na tela 
function setResultado(mensagem){
    const resultado = document.querySelector("div#resultado");
    resultado.innerHTML = '';
    const paragrafo = criarParagrafo();
    paragrafo.innerHTML = mensagem
    resultado.appendChild(paragrafo)
}
