function somar(){
    
    const valorReal = Number(document.querySelector('input#inputTemp').value)
    const selectParte1 = document.getElementById('fromUnit').value;
    const selectParte2 = document.getElementById('toUnit').value;
    const resultadoTexto = document.getElementById('resultText')

if(valorReal == 0){
        resultadoTexto.innerText = '[ERRO] Por favor, informe um valor'
    } else if (selectParte1 === 'celsius' && selectParte2 === 'celsius' || selectParte1 === 'fahrenheit' && selectParte2 === 'fahrenheit') {
        resultadoTexto.innerHTML = `Não é possível realizar uma conversão entre ${selectParte1} e ${selectParte2}.`
    } else if(selectParte1 === 'celsius' && selectParte2 === 'fahrenheit') {
       const resultadoFinalPrimeiraParte = (valorReal * 9) / 5 + 32;
        resultadoTexto.innerHTML = `${resultadoFinalPrimeiraParte.toFixed(2).replace('.', ',') } °F`
       
    } else {
        const resultadoFinalSecundaParte = (valorReal - 32) * 5 / 9;
        resultadoTexto. innerHTML = ` ${resultadoFinalSecundaParte.toFixed(2).replace('.', ',')} °C`
    }

}

