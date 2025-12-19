//Operador Logicos e AND (&&)
//Retorna TRUE SE OS DOIS OPERADORES FOREM TRUE

console.log(true && true); //true - pq ambas são verdaeiros
console.log(false && true); // false - pq é falso

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true; //Valor boleano 

let aplicacaoTexte = maiorDeIdade && possuiCarteiraDeTrabalho ? "Pode Aplicar " : "Não pode Aplicar!"
console.log(aplicacaoTexte);

//Operador Logicos ou OR (||)
//Retorna true se um for verdadeiro, se ambas forem , falso é falso!

let maiorDePermitido = true;
let ensinoMedioCompleto = false;

let aplicacaoTex = maiorDePermitido || ensinoMedioCompleto ? "Pode ir pro excertio" : "Não Pode"; // Como o maiorPermitido é verdadeiro, ele da verdadeiro
console.log(aplicacaoTex);

//Operador Logicos não NOT (!)
//Ele basicamente inverte o valor: se é sim, vira não: se é não vira sim!
let candidatoRecusado = true;

console.log(!candidatoRecusado); //Aqui é true, as ele inverte, e devolve pra mim true