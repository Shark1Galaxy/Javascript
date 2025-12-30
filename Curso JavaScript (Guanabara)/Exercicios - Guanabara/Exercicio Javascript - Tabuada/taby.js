        function somar(){
            const entradaTabuada = document.querySelector('input#comeconumero'); //Aqui estou puxando os dados da entrada do input em DOM
            const selectTabuada = document.querySelector('select#tabuada'); //Aqui estou puxando o select, pelo DOM tbm

            //Verificação padrão para caso não seja inserido nenhum valor
            if(entradaTabuada.value.length = '' || entradaTabuada.value.length === 0){
                alert('[ERRO] Por favor, digite qual tabuada gostaria!')
            } else {
                selectTabuada.innerHTML = ''; //// Limpa o conteúdo do select antes de preenchê-lo novamente. Essa linha é executada quando a função somar() é chamada (ao clicar no botão),evitando que os valores anteriores se acumulem.

                const entradaConversao = Number(entradaTabuada.value); //Convertendo a string do input que vai entrar para Number 

                for(let contador = 0; contador <=10; contador++){ //Laço simples, de loop, onde, enquanto o contador for menor ou = a 10, sempre sera incrementado + 1

                    const optionsTabuada = document.createElement('option') // Estou criando um elemento <option> que será adicionado dentro do <select>

                    optionsTabuada.textContent = `${entradaConversao} x ${contador} = ${entradaConversao * contador}` // Aqui estou definindo o texto que será exibido dentro da option

                    selectTabuada.appendChild(optionsTabuada) // Adiciona a option criada dentro do select, fazendo ela aparecer na tela

                    //Criar elemento → definir conteúdo → adicionar ao DOM
                }
            }
        }