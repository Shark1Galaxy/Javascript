let idade = 23;
console.log(idade);
let altura = 1.7;
console.log(altura);
//Melhor forma de criar variáveis e rfecomenda, e usando camelCase. Exemplo abaixo (Boas práticas de programação) mais cuidado, JavaScript distingue letras maiúsculas de minúsculas em nomes de variáveis, ou seja, elas são sensíveis a maiúsculas e minúsculas. e ficam como variaveis diferentes.
let nomeCompleto = "João da Silva";
console.log(nomeCompleto);

//Constantes
let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);

//Mais usando o Const, ele não permite que caso eu tente mudar o valro da varivel, ele não deixa, ou seja, o valor é fixo.
const valorIngressoIdoso = 20;
valorIngressoIdoso = 30; // Isso vai gerar um erro, pois não é possível reatribuir um valor a uma constante.
console.log(valorIngressoIdoso); // Isso não será executado devido ao erro anterior.

/*Ou seja, so use o let se vc quer mudar os valores da varivels, e o const caso queira que o valor seja fixo */
