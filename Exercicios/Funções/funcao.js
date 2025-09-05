// //Para nomear uma função, devemos usar um Verbo + Substantivo
// resetaCor
// trasnformarObjeto
// alterarTamanho

//Declaração a função sem parâmetros
let corSite = "azul";
function resetaCor(){
    corSite = ""; //Vazio
};
console.log(corSite);
//Chamar a função
resetaCor();
console.log(corSite);

//Declaração a função com parâmetros
let corSite2 = "azul";
function resetaCor2(cor="", tonalidade=""){
    corSite2 = cor + tonalidade; //Vazio
}
console.log(corSite2);
resetaCor2("verde", " claro");
console.log(corSite2);