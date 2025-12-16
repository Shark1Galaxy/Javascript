let idade = 23;
console.log(idade);

let altura = 1.70;
console.log(altura);

//cameloCase
let nomeCompleto = "Marcos Vinicius de Lima Candido";
console.log(nomeCompleto);

let nome = 'Marcos Vinicius';
console.log(nome);
//Javascript é case sensitive onde 'nome' é diferente de 'Nome'

//Nomes de variáveis não podem começar com números
//let 1nome = 'Marcos'; //Errado    

let meuNome,minhaIdade, meuNomeCompleto; //Podemos declarar várias variáveis na mesma linha, usando o , igual o C/C++

//Constantes
//Constantes são variáveis que não podem ter seu valor alterado

const valorIgressoAdulto = 2.00;
valorIgressoAdulto = 3.00; //Essa linha não pode existir no código, pois estamos tentando alterar o valor de uma constante, onde ela não alterar seu valor
console.log(valorIgressoAdulto);