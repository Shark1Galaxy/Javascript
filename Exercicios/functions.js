/* Para nomeamos uma função, precisamos usar um Verbo + Substantivo*/
let corSite = "Azul";
function resetaCor() {
  corSite = null;
}
console.log(corSite); // Azul
resetaCor();
console.log(corSite); // null
