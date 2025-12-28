function somar(){
    const pesoPessoa = document.querySelector('input#peso');
    const alturaPessoa = document.querySelector('input#altura');
    const textFinal = document.querySelector('div#resultado');

    if(pesoPessoa.value.length == ''|| alturaPessoa == ''){
        textFinal.style.color = 'red';
        textFinal.innerHTML = '[ERRO] Algo não ocorreu bem!'  
    } else {
        const conversaoPeso = Number(pesoPessoa.value)
        const conversaoAltura = Number(alturaPessoa.value);

        textFinal.innerHTML = (conversaoPeso / conversaoAltura ** 2).toFixed(3)
    }
}