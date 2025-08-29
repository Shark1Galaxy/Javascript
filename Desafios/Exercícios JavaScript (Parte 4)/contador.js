let inicioDados = document.getElementById('first');
let fimDados = document.getElementById('end');
let passoDados = document.getElementById('pass');
let resultado = document.getElementById('saida-dos-dados');
let button = document.getElementById("button");
button.addEventListener("click", somar);

function somar(){
if(inicioDados.value == 0 || fimDados.value == 0 || passoDados.value == 0) {
    console.log("[ERRO] faltam dados")
} else {
    resultado.innerHTML = "Contador: "
    let inicio = Number(inicioDados.value);
    let fim = Number(fimDados.value);
    let passo = Number(passoDados.value); 

    if(inicio < fim) {
        for(let contador = inicio; contador <= fim; contador += passo){ //contadr = contador + passo
        resultado.innerHTML += `${contador} \u{1F449}`
        }
        resultado.innerHTML += `\u{1f3c1}`
        
    } else {
        for(let contador = inicio; contador >= fim; contador -= passo) {  //contadr = contador - passo
            resultado.innerHTML += `${contador} \u{1F449}`
            }
    }
  }
}