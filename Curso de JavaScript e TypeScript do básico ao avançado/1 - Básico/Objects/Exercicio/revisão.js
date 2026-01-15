
//Preciso que faça um programa, onde, ele vai jogar na tela os dados que entraram em input e jogar no console, dentro de um object.
function meuEscopo(){
    //Aqui estou, fazendo uma função, onde, ela cancela o recarregamento automatico que o navegador faz com um submit. 
    const form = document.querySelector('.form');
    const resultadoFinal = document.querySelector('div#resultado');
    form.addEventListener('submit', function(eventeNotApaga){
        eventeNotApaga.preventDefault();

        //Chamando os inputs com seus valores pelo DOM
        const nomePessoa = document.querySelector('input#nome').value;
        const sobrenomePessoa = document.querySelector('input#sobrenome').value;
        const pesoPessoa = document.querySelector('input#peso').value;
        const alturaPessoa = document.querySelector('input#altura').value;

        //Jogar na tela
        resultadoFinal.innerHTML += nomePessoa + " " + sobrenomePessoa + " " +
        pesoPessoa;

        //Colocando dados no object
        const valoresArray = [];

        valoresArray.push({
            nome: nomePessoa,
            sobrenome: sobrenomePessoa,
            peso: pesoPessoa,
            altura: alturaPessoa
        })
        console.log(valoresArray[0])
    })
}
meuEscopo() //Eu preciso chamar ela, pois é algo que tem que ser automatico, onde, eu não coloquei a função em nenhum lugar o html pra chamar com alguma interação algo assim.

        /*
        O que eventeNotApaga.preventDefault() faz?
            Ele impede o comportamento padrão do evento.

            No seu caso específico:
            O evento é o submit de um formulário.

            O comportamento padrão do formulário é recarregar a página e enviar os dados.

            👉 Quando você usa preventDefault():
            A página não recarrega
            O formulário não é enviado automaticamente

            Seu JavaScript continua rodando normalmente (por isso o console.log('oi') aparece)

            Em poucas palavras:
            preventDefault() cancela a ação automática que o navegador faria.

            Exemplo prático:

            Sem preventDefault():
            Clicou em "Enviar" → página recarrega ❌
            Com preventDefault():
            Clicou em "Enviar" → página não recarrega ✔️
            Você pode validar dados, mostrar mensagens, etc. 
        */
