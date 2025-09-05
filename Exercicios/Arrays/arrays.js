//Conjunto de dados, quem podem ser acessados por um índice numérico. oqeu é um indice numérico? é a posição do elemento dentro do array, começando do 0.
let familia = ['Marcos', 'Vinicius', 'Elizeth', 'Mateus', 'Samuel']; // Nessa arrays. podemos colocar qualquer tipo de dado, seja ele string, number, boolean, objeto, função, etc.
console.log(familia.length);

console.log(familia[1]); //Vinicius
let nomeDoColega = ['João', 23, true, 'Desenvolvedor'];

console.log("Esse é o Repetição com For in");
for(let pos in familia){
    console.log(`A posição ${pos} tem o valor ${familia[pos]}`);
}
console.log("Esse é o Repetição com For");
for(let posiElemento = 0; posiElemento < familia.length; posiElemento++){
    console.log(`A posição ${posiElemento} tem o valor ${familia[posiElemento]}`);
}                                                                                                                                                                                                                                                                          