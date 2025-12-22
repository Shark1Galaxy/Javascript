const idadeMinha = 17;


if(idadeMinha <= 16){ //Menos de 16 não votam!
    console.log('Não vota!');
} else if (idadeMinha < 18 || idadeMinha >= 67){ //E se, A idade esta entre menor que 18 ou a cima de 67 anos?
    console.log("Voto opicional!");
} else {
    console.log("Voto obrigátorio");
}

//Aninhada If if

const idadePessoa = 18;
const temCarteira = true;
const temDinheiro = 1.800;

if(idadePessoa >= 18){
    if(temCarteira == true){
        if(temDinheiro == true){
            console.log("Você pode tirar a carteira!!");
        }
    }
} else {
    console.log("Você não tem idade o suficiente!")
}
