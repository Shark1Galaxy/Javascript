const entradaDados = document.querySelector('input#entrada-numeros');
const listaDados = document.querySelector('select#select-dados');
let resultadoDados = document.querySelector('div#resultado');
let amarzenarDados = [];

//Função para verificar se o número está entre 1 e 100
function isNumber(numerosEntradas) {
    if(Number(numerosEntradas) >= 1 && Number(numerosEntradas) <= 100) {
        return true;
    } else {
        return false;
    }
}
isNumber(entradaDados.value);//Não preciso por porque a função já retorna true ou false, uma vez que dentro de function adicionandoDados eu coloquei os valores para entrar na lista apenas se isNumber for true e inLista for false

//Função para verificar se o número já está na lista
function inLista(numerosEntradas, listDados) {
    if(listDados.indexOf(Number(numerosEntradas)) != -1) {
        return true;
    } else {
        return false;
    }
}
inLista(entradaDados.value, amarzenarDados); //Não preciso por porque a função já retorna true ou false, uma vez que dentro de function adicionandoDados eu coloquei os valores para entrar na lista apenas se isNumber for true e inLista for false

//Função para adicionar os números à lista
function adicionandoDados() {
    if(isNumber(entradaDados.value) && !inLista(entradaDados.value, amarzenarDados)) { //! significa "não", ou seja, isNumber tem que ser verdadeiro e inLista tem que ser falso para entrar no if, ou seja, o número tem que ser válido e não pode estar na lista
        amarzenarDados.push(Number(entradaDados.value));
        let item = document.createElement('option');
        item.text = `O valor ${entradaDados.value} foi adicionado.`;
        listaDados.appendChild(item);
        resultadoDados.innerHTML = ''; //Limpa o resultado anterior ao adicionar um novo número
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
    entradaDados.value = ''; //Aqui eu limpo o campo de colocar os numeros lá quando clico em adicionar
    entradaDados.focus(); //esse focus() faz com que o cursor volte para o campo de entrada de dados após clicar em adicionar
}

function finalizarDados() {
    if(amarzenarDados.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        resultadoDados.innerHTML += `<p>Ao todo, temos ${amarzenarDados.length} números cadastrados.</p>`;
        let maiorValor = amarzenarDados[0];
        let menorValor = amarzenarDados[0];
        let soma = 0;
        let media = 0;
        for(let pos in amarzenarDados) {
            soma += amarzenarDados[pos];
        }
        for(let pos in amarzenarDados) {
            if(amarzenarDados[pos] > maiorValor) {
                maiorValor = amarzenarDados[pos];
            }
            if(amarzenarDados[pos] < menorValor) {
                menorValor = amarzenarDados[pos];
            }
        }
        resultadoDados.innerHTML = ''; //Limpa o resultado anterior
        resultadoDados.innerHTML += `<p>O maior valor informado foi ${maiorValor}.</p>`;
        resultadoDados.innerHTML += `<p>O menor valor informado foi ${menorValor}.</p>`;
        resultadoDados.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
        media = soma / amarzenarDados.length;
        resultadoDados.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
    }
}