//Operador Lógicoe and (&&)
let nota = 10;
let res = nota >= 10 && nota != 5 ? "Aprovado" : "Reprovado"; //Se os 2 de veradeiro, ele vai pegar o "APROVADO" senão "Reprovado"
console.log(res);

//Operador Logico or (||)
let nota1 = 10;
let res1 = nota1 >= 12 || nota1 == 5 ? "Aprovado" : "Reprovado"; //Se os 1 de veradeiro, ele vai pegar o "APROVADO" senão "Reprovado"
console.log(res1);

//Operador Logico no (!)
let nota2 = 10;
let res2 = !(nota1 >= 10 || nota1 != 5 ? "Aprovado" : "Reprovado"); //o !, basicamente pega o valor que a condição da e reverte, como aqui da verdadeiro, ele joga pra falso
console.log(res2);
