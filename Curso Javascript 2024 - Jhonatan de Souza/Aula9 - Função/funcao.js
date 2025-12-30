// Como dar nome para uma função?
// Use um verbo + um substantivo para ficar fácil de entender
// Exemplo: function resetaCor


//Modo Variavel Global
let corSite = 'Azul'
function resetaCor(){
    corSite = ''; //Aqui estou redefinido pra undefined, ou seja, sem valor dentro da variavel corSite
}
console.log(corSite);
resetaCor()
console.log(corSite + 'Ficou se cor')


//Modo Variavel interna local
console.log('Modo Variavel interna local')
let corSite1 = 'Azul'
function resetaCor1(cor, tonalidade){
    corSite1 = cor + '' + tonalidade; //To concatenando o cor com tonalidade = Vermelho Vermelho-escuro

console.log(corSite1);
resetaCor1('Vermelho','Vermelho-escuro')
console.log(corSite1)
}

//Modo Variavel interna local

