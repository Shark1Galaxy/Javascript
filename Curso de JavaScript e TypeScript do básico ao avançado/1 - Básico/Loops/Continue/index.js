const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero of numeros){
    if(numero === 2 || numero === 5){
        console.log('pulei o número', numero);
        continue; //pula o número 2
    }
    console.log(numero);
}
//Ou seja, o continue faz com que a iteração atual seja interrompida e o loop avance para a próxima iteração, ignorando qualquer código restante dentro do loop para aquela iteração específica.