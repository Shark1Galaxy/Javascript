    const entradadDados = document.querySelector('input#entrada-numeros'); //Coletando os dados de entrada dos numeros do input
    const selectDados = document.querySelector('select#select-dados'); //Pegando o select atraves do DOM, para adicionar os valores inseridos em texto
    let textoDeResultado = document.querySelector('div#resultado'); //Pegando a div do resultado para adicionar o resultado final dos calculos etc
    let arrayValores = []; //Array que vai armazenar os valores inseridos para realizar os calculos e jogar no textoDeResultado

    //Verificador se o número está entre 1 e 100
    function estaEntre(osDados){
        if(osDados >= 1 && osDados <=100){
            return true;
        } else {
            return false;
        }
    }

    //Verificação se o número está no Array ou não
    function estaNoArray(inputDados, noArray){ //Parametros, os valores estão lá no adicionandoDados
        if(noArray.indexOf(Number(inputDados)) != -1){
        /*
        // 🔍 Busca com indexOf:
        // O método noArray.indexOf(...) percorre todo o array procurando o valor informado.
        //
        // ➜ Se o valor for encontrado, ele retorna o índice (posição) onde está: 0, 1, 2, etc.
        // ➜ Se o valor NÃO for encontrado, ele retorna -1.

        // ✅ Condição (if):
        // A verificação != -1 pergunta:
        // "O valor foi encontrado no array?"
        //
        // ➜ TRUE: Se for diferente de -1, significa que o valor existe no array,
        //    então a função retorna true (está na lista).
        //
        // ➜ FALSE: Se for igual a -1, o valor não existe no array,
        //    então retorna false (não está na lista).
        */
            return true;
        } else {
            return false;
        }
    }
    /*
    Verificador se o número está entre 1 e 100

    Porque em eu preciso dizer que o parâmetro de entradaDados.value? e não só entradaDados?

        Porque entradadDados é o input inteiro, não o número.

        entradadDados → elemento HTML <input>

        entradadDados.value → valor digitado no input

        A função estaEntre compara números, então você precisa passar o valor:

        estaEntre(Number(entradadDados.value))


     👉 Funções recebem valores, não elementos HTML.


     Verificação se o número está no Array ou não
    */


    function adicionandoDados(){
        if(estaEntre(entradadDados.value) && !estaNoArray(entradadDados.value, arrayValores)){  
            /*
            Explicação sobre o operador ! (negação lógica):

            O operador ! é usado para inverter um valor booleano (true ou false).

            ➜ Se a expressão resultar em true, o ! transforma em false.
            ➜ Se a expressão resultar em false, o ! transforma em true.

            No contexto do código, usamos !estaNoArray porque a variável "estaNoArray"
            indica se o número JÁ está no array.

            ➜ Se estaNoArray === true  → o número já existe, então !estaNoArray === false
            (não devemos adicionar novamente).

            ➜ Se estaNoArray === false → o número NÃO existe, então !estaNoArray === true
            (podemos adicionar o número).

            Portanto, a condição completa verifica duas coisas:
            1️⃣ Se o número está entre 1 e 100. && (E)
            2️⃣ Se o número AINDA NÃO está no array antes de adicioná-lo.
            */

            arrayValores.push(Number(entradadDados.value))
            let paragrafoTela = document.createElement('option')
            paragrafoTela.text = `O valor ${Number(entradadDados.value)} foi adicionado`
            selectDados.appendChild(paragrafoTela)
            textoDeResultado.innerHTML = '';
        } else {
            alert('Valor inválido ou já encontrado na lista.');
        }
        entradadDados.value = ''; //Limpa o campo de entrada após adicionar o numero ou tentar adicionar
        entradadDados.focus(); //esse focus() faz com que o cursor volte para o campo de entrada de dados após clicar em adicionar, ou seja, o cursor pisca lá esperando o próximo número
    }

    function finalizarDados(){
        if(arrayValores.length == 0){
            alert('Adicione valores antes de finalizar!')
        } else {
            arrayValores.innerHTML += `<p> Ao todo, temos ${arrayValores.length} números cadastrados</p>`
        }
    }