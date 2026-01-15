/*
Falsy values são valores que o JavaScript considera como false quando eles são usados em uma verificação lógica (if, &&, ||, etc.).

Mesmo não sendo exatamente false, o JS trata esses valores como se fossem.

🔴 Falsy values no JavaScript
São apenas estes:

false
0
-0
0n
""  // string vazia
null
undefined
NaN

Exemplo simples:
*/
if (0) {
  console.log('Entrou no if');
} else {
  console.log('Caiu no else');
}

/*
👉 Resultado: Caiu no else
Porque 0 é um falsy value.

Comparação rápida:
*/
if ("") console.log("false");   // não entra
if ("oi") console.log("true"); // entra

/*O contrário: Truthy values
Qualquer valor que não esteja na lista acima é considerado truthy, por exemplo:

"0"
"false"
[]
{}
42
*/