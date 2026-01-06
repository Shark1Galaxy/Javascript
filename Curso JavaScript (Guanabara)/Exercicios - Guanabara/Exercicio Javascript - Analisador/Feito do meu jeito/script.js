    const entradadDados = document.querySelector('input#entrada-numeros')
    let amarmazemDados = []; //Escopo global
    let textoResultado = document.querySelector('div#resultado');

    function adicionandoDados(){
    const conversaoDados = Number(entradadDados.value)
    const selectDados = document.querySelector('select#select-dados')

    if(conversaoDados === 0){
        alert('Zero não é válido!')
    } else if(conversaoDados < 0 || conversaoDados > 100){
        alert('[ERRO], digite dados corretos!')
    } else {
        const sectionDados = document.createElement('option')
        sectionDados.text = `O Valor ${conversaoDados} foi adicionado`
        selectDados.appendChild(sectionDados);
        amarmazemDados.push(conversaoDados);
    }
    textoResultado.innerHTML = ''; //Como o código executa de baixo pra cima, apos ele finalizar o else, ele desce pra proxima linha, e executa esse textoResultado, limpando o código
}
    
function finalizarDados(){
    if(entradadDados.value.length === 0){
        alert('Você precisa adicionar os numeros antes de finalizar!')
    } else {
    //Somando todos os números do array
    let soma = 0; //Usado para armazenar os numeros que vão entrando do array
    for(let contador = 0; contador < amarmazemDados.length; contador++){
    let pegandoAmazem = amarmazemDados[contador]
    soma += pegandoAmazem //Ele armazzena o valor, e dps na outra volta, ele soma com o numero qeu já tem dentro de soma, até finalizar
    }
    textoResultado.innerHTML = (
        `
        <p>Ao todo, temos ${amarmazemDados.length} números cadastrados</p> 
        <p>O maior valor é ${amarmazemDados.sort().at(-1)}</p>
        <p>O menor valor é ${amarmazemDados.sort().at(0)}</p>
        <p>Somando todos os valores, temos ${soma}</p>
        <p>A média dos valores digitados è ${soma / 5}</p>
        `
        )
    }
}