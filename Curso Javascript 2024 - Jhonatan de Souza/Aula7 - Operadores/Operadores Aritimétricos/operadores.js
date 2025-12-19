//Operadores Aritimétrico
let salarioMeu = 100;
/*
+: soma/concatenação
-: subtração
*: multiplicação
/: divisão real
%: módulo/resto
**: potenciação
++: icremento
--: decremento

*/
console.log(salarioMeu + salarioMeu);
console.log(salarioMeu - salarioMeu);
console.log(salarioMeu * salarioMeu);
console.log(salarioMeu / salarioMeu);
console.log(salarioMeu % salarioMeu);
console.log(salarioMeu ** salarioMeu);

//Incremento e Decrementos

let idade = 18;
console.log(idade++);
console.log(idade--);

//Aqui, como sabemos, assim qeu o console for executado, o resultado n vai ser adiciona ou seja, n vai ser 19. será 18. pois como adicionamos o increento dps, so chamando a vairavel denovo pra ir. daria no mesmo se eu adicionar o -- antes tbm;

//Pra resolver isso, podemos simplimsnete adicionar o ++idade antres, pq ele incrementa o resultado e dps pega a variavel;

let idadeMinha = 18;
console.log(++idadeMinha);
console.log(--idadeMinha);
