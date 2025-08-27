//Puxando botão onde quero ouvir
let button = document.getElementById("button");
// 2. Adicionar o "ouvinte" de evento
button.addEventListener("click", somar);
function somar() {
let nowDate = new Date();
const nowYear = nowDate.getFullYear(); 
  let declaration = document.getElementById("declaration");
  let anoNascimento = document.getElementById("ano-nascimento");
  let convertValue = Number(anoNascimento.value);
  const valorFinal = nowYear - convertValue;

  let masculino = document.getElementById("sexmas");
  let feminino = document.getElementById("sexfem");

  //ENTRE 0 ATE 40 - novo(a)
  // Entre 30 até 60 - velho(a)

  //homem novo e velho
  if (valorFinal >=18 && valorFinal < 40 && masculino.checked) {
    declaration.innerHTML = `Detectamos um Homem Novo de ${valorFinal}`;
    imagem.src = "imagens/homem-novo.png";
     } else if (valorFinal >= 30 && valorFinal <= 60 && masculino.checked) {
        declaration.innerHTML = `Detectamos um Homem Velho de ${valorFinal}`;
        imagem.src = "imagens/homem-velho.png";
     } else if (valorFinal >=18 && valorFinal < 40 && feminino.checked){
        declaration.innerHTML = `Detectamos uma Mulher Nova de ${valorFinal}`;
        imagem.src = "imagens/mulher-nova.png";
     } else if (valorFinal >= 30 && valorFinal <= 60 && feminino.checked) {
        declaration.innerHTML = `Detectamos um Mulher Velha de ${valorFinal}`;
        imagem.src = "imagens/mulher-velha.png"; 
    } else if(valorFinal < 18){
        declaration.innerHTML = `Você é menor de idade!`;
    } else if(convertValue == 0){
        declaration.innerHTML = `Digite um valor`;
    }
}
