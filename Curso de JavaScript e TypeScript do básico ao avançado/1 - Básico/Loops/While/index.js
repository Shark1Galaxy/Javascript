/*O for loop é usado para executar um bloco de código várias vezes.
Ele é muito usado quando precisamos repetir uma ação.
 */
function random(minimo,maximo){
    const r = Math.random() * (maximo - minimo) + minimo
    return Math.floor(r);
}
const min = 1;
const max = 50;
let ramd = random(min,max)

while(ramd !== 10){
    rand = random(min,max)
    console.log(rand)
}
/*

Estrutura do For Loop
for (exp1; exp2; exp3) {
  // bloco de código
}
•	exp1 → executada uma vez antes do loop começar
•	exp2 → condição para o loop continuar rodando
•	exp3 → executada após cada repetição

*/