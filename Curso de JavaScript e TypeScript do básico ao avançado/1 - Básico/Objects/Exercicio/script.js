function meuEscopo(){
    const form = document.querySelector('.form');
    const resultadoFinasl = document.querySelector("div#resultado")

    const pessoas = [];

    form.addEventListener('submit', function(evento){
        evento.preventDefault(); //Previne de o envento ser apagado como padrão do navegador
        const nomePessoa = document.querySelector('input#nome').value;
        const sobrenomePessoa = document.querySelector('input#sobrenome').value;
        const pesoPessoa = document.querySelector('input#peso').value;
        const alturaPessoa = document.querySelector('input#altura').value;
        
        //Era só isso
        pessoas.push({
            nome: nomePessoa,
            sobrenome: sobrenomePessoa,
            peso: pesoPessoa,
            altura: alturaPessoa
        })

        console.log(pessoas)
        resultadoFinasl.innerHTML += `Nome: ${nomePessoa} Sobrenome: ${sobrenomePessoa} peso: ${pesoPessoa} altura: ${alturaPessoa}`
    })

}
meuEscopo();

