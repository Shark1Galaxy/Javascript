/*
Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort. 
*/

//Colocar em ordem do menor para o maior
function ordemCrescente(numero1,numero2){
    if(numero1 < numero2){ return [numero1 , numero2]}; 
    if(numero1 > numero2){ return [numero2 , numero1]}; 
    if(numero1 === numero2 || numero2 === numero1){return 'Numeros iguais'}
}
console.log(ordemCrescente(0,5))