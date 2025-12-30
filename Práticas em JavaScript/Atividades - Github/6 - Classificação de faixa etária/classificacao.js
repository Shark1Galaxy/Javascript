//Entrada
const idadeMinha = 60;

//Processo
if(idadeMinha >= 0 && idadeMinha< 17){ 
    //A idade é maior ou igual a 0 e menor que 17?
    //A idade está entre 0 à 17
    console.log(`Você tem ${idadeMinha} anos uma Criança`)
} else if(idadeMinha < 18){
    //A idade é menor que 18?
    //é menor de 18 anos?
    console.log(`Você tem ${idadeMinha} anos um Adolescente`)
} else if(idadeMinha < 59){
    //É menor que 59?
    //É menor de 59 aos?
    console.log(`Você tem ${idadeMinha} anos um Adulto`)
} else {
    //Diferente de tudo aquilo lá em cima?
    console.log(`Você tem ${idadeMinha} anos um Velho`)
}
