function meuEscopo(){
    const resultadoFinal = document.querySelector('div#resultado')
    const formularioMeu = document.querySelector('#form-imc')
    formularioMeu.addEventListener('submit', function(naoCarrega){
        naoCarrega.preventDefault();

        //Valores entrada
        const pesoPessoa = document.querySelector('input#peso');
        const alturaPessoa = document.querySelector('input#altura');
        if(pesoPessoa.value == 0 && alturaPessoa.value == 0){
            alert('Digite os valores')
        } else {
            const calculoImc = Number(pesoPessoa.value) / Number(alturaPessoa.value ** 2);

            if(Number(calculoImc.toFixed(2)) < 18.5){
                resultadoFinal.innerHTML = `Abaixo do Peso com ${calculoImc.toFixed(2)}kg/m²`
            }else if(Number(calculoImc.toFixed(2)) <= 24.9){
                resultadoFinal.innerHTML = `Peso Normal ${calculoImc.toFixed(2)}kg/m²`
            } else if(Number(calculoImc.toFixed(2)) <= 29.9){
                resultadoFinal.innerHTML = `Sobrepeso ${calculoImc.toFixed(2)}kg/m²`
            } else if(Number(calculoImc.toFixed(2)) <= 34.9){
                resultadoFinal.innerHTML = `Obesidade grau 1 ${calculoImc.toFixed(2)}kg/m²`
            } else if(Number(calculoImc.toFixed(2)) <= 39.9){
                resultadoFinal.innerHTML = `Obesidade grau 2 ${calculoImc.toFixed(2)}kg/m²`
            } else {
                resultadoFinal.innerHTML = `Obesidade grau 3 ${calculoImc.toFixed(2)}kg/m²`
            }

        }
    })
}
meuEscopo()

/*
Precisamos calcular o IMC e retonar no div resultado

Entrada
ALTURA: 1,70
Peso: 60kg

Processo
1 - PRIMEIRO, preciaoms criar uma função, submit para tirar o carregamento automatico dao site - V
 2 - precisamos coletar os dados do input de altura e peso - V
 3 - Precisamos calcular os valores conforme a formula de imc que é o indice de Massa Corporal IMC = peso (em kg) / (altura (em metros) x altura) / V

Como calcular o seu IMC:
Meça seu peso: Em quilogramas (kg).
Meça sua altura: Em metros (m).
Eleve sua altura ao quadrado: Multiplique sua altura por ela mesma (altura x altura).
Divida: Divida seu peso (kg) pelo resultado da altura ao quadrado (m²). 

Exemplo:
Pessoa com 70 kg e 1,75 m de altura:
IMC = 70 / (1,75 x 1,75) = 70 / 3,0625 

Saida
22,86 kg/m².  - Peso normal

*/
