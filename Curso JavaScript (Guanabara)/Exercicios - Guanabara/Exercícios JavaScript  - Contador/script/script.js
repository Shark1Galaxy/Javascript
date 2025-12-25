function somar(){
    const firstNumber = document.getElementById('comeconumero');
    const secondNumber = document.getElementById('fimnumero');
    const endNumber = document.getElementById('passo');
    const textResultado = document.querySelector('div#result');
    
    if(firstNumber.value.length == '' || secondNumber.value.length == '' || endNumber.value.length == ''){
        textResultado.innerHTML = 'Impossivel contar!'
        alert('[ERRO], FALTAM DADOS!')
    } else {
        
        const comecoNumber = Number(firstNumber.value);
        const fimNumber = Number(secondNumber.value);
        const passoNumber = Number(endNumber.value);

        //Caso o ele ponha o passo menor que zero
        if(passoNumber <= 0 ){
            alert('Passo inválido! Vamos considerar PASSO 1');
            p = 1
        }

        //Contagem crescente
        if(comecoNumber < fimNumber){
        for(let contador = comecoNumber; contador <= fimNumber; contador += passoNumber){ //contador = contador + passoNumber
        textResultado.innerHTML += `${contador} &#128540`
        }

        //Contagem decrecente
        } else {
        for(let contador = comecoNumber; contador >= fimNumber; contador -= passoNumber){ //contador = contador + passoNumber
        textResultado.innerHTML += `${contador} &#128540`
        }
    }
    }
}