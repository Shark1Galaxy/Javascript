const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero of numeros){
    if(numero === 7){
        console.log(`Número ${numero} encontrado, saindo do loop.`);
        break;
    }
    console.log(`Número atual: ${numero}`);
}

//Caso do while
let i = 0;
do{
    let numero = numeros[i];

    if(numero === 2){
        console.log(`Número ${numero} encontrado, saindo do loop.`);
        i++;
        continue;
    }
    if(numero === 7){
        console.log(`Número ${numero} encontrado, saindo do loop.`);
        i++;
        break;
    }
    console.log(numero);
    i++;
}while(i < numeros.length);

//Segundo do while
i = 0;
do{
    let numero = numeros[i];

    if(numero === 2){
        console.log(`Número ${numero} encontrado, saindo do loop.`);
        i++;
        continue;
    }
    if(numero === 7){
        console.log(`Número ${numero} encontrado, saindo do loop.`);
        i++;
        break;
    }
    console.log(numero);
    i++;
}while(i < numeros.length);
