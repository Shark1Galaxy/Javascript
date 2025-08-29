let inicioDados = document.getElementById('first');
const resultado = document.getElementById('saida-dos-dados');
const resultadoDivision = document.getElementById('saida-division');
const raizQuadrada = document.getElementById('raiz');
const button = document.getElementById("button");
const operadores = document.getElementById('operations');
button.addEventListener("click", somar);


function somar(){
    let inicio = Number(inicioDados.value);
    if(inicioDados.value.length == 0){
     resultado.innerHTML = "INSIRA UM NÚMERO!";
    } else {
        for(let calcular = 0; calcular <= 10; calcular++) {
            resultado.innerHTML += `${inicio} x ${calcular} = ${inicio * calcular} <br>`;
           resultadoDivision.innerHTML += `${inicio} / ${calcular} = ${inicio / calcular} <br>`; // resultadoDivision =  resultadoDivision +  `${inicio} / ${calcular} = ${inicio / calcular}
    }
    }
}

function carregar(){
    if(inicioDados.value.length == 0 ){
        operadores.style.border = 'none';
    } else {
        alert("[Ocorreu um erro]")
    }
}