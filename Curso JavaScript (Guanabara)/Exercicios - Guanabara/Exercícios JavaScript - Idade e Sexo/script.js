function verificar(){
const nowAgora = new Date();
const anoAtual = nowAgora.getFullYear();
const anoNascimento = Number(document.getElementById('numbermonth').value); 
const resultadoFinal = Math.abs(anoNascimento - anoAtual);//o Math,src converte de negativo para positivo o numero
const textoIdade = document.getElementById('textoIdade');
const imagemPessoa = document.querySelector('img');

if(anoNascimento === 0 || anoNascimento > anoAtual){ //Verificação caso,ele não coloque nenhum valor ou coloque um valor acima do ano Atual
   window.alert('[ERRO] Algo não está correto!') 
} else {
    const sexoPessoa = document.getElementsByName('genero');
    let pessoGenero = ''; // Uma variavel string vazia, so esperando para receber o genero pelo 
    
    //[0] é a 1 caixa o Masculino [1] é a 2 caixa Feminino
     if(sexoPessoa[0].checked) { //Caso seja caiax 0 pessoGenero = 'Masculino1
        pessoGenero = 'Masculino';

        //Ai nesse caso, se escolher masculino, dentro desse if fizemos a condições para verificar a imagem
        if(resultadoFinal >= 0 && resultadoFinal < 10){ //Está entre 0 e1 10 anos?
            imagemPessoa.src = 'img/man/criança.png'
        } else if(resultadoFinal < 18){  //é menor de 18 anos?
            imagemPessoa.src = 'img/man/adolescente.png'
        } else if(resultadoFinal < 50){ //é menor de 50 anos?
            imagemPessoa.src = 'img/man/adulto.png'
        } else { //É a cima de disso?
            imagemPessoa.src = 'img/man/velho.png'
        }

    } else { //Caso seja caixa 1 pessoGenero = 'Feminino';
        pessoGenero = 'Feminino';

        //Ai nesse caso, se escolher feminion, dentro desse else fizemos a condições para verificar a imagem
        if(resultadoFinal >= 0 && resultadoFinal < 10){ //Está entre 0 e1 10 anos?
            imagemPessoa.src = 'img/women/criança.png'
        } else if(resultadoFinal < 18){ //é menor de 18 anos?
            imagemPessoa.src = 'img/women/adolescente.png'
        } else if(resultadoFinal < 50){ //é menor de 50 anos?
            imagemPessoa.src = 'img/women/adulta.png'
        } else { //É a cima de disso?
            imagemPessoa.src = 'img/women/velha.png'
        }
        
    }

    //Mudar o texto padrão Preencha os dados acima para ver o resultado!
    textoIdade.innerHTML= `Detectamos uma pessoa do gênero ${pessoGenero} com ${resultadoFinal} anos`
} 

}
