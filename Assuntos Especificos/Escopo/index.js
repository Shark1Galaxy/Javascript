const x = 1; //Esse é um escopo global
// só usamos se realmente for necessário, pois pode causar problemas de manutenção e segurança; mas em geral poe no topo do código, para que seja mais fácil de encontrar e evitar problemas de escopo.

//Escopo de função
//Cada função em JavaScript cria seu próprio escopo.
//Variáveis declaradas dentro de uma função só podem ser acessadas dentro dela.
function teste() {
    const y = 2; //Esse é um escopo local, só existe dentro da função teste
    // só podemos acessar a variável y dentro da função teste, pois ela é local, mas podemos acessar a variável x, pois ela é 
    console.log(y); // Posso acessar a variável y, pois ela é local.
    console.log(x); // Posso acessar a variável x, pois ela é global, mas não posso acessar a variável y, pois ela é local
}
console.log(y) // Não posso acessar a variável y, pois ela é local.

/*
Características do escopo de função

Variáveis são locais

Criadas quando a função é executada

Destruídas ao final da execução

Funções diferentes podem reutilizar os mesmos nomes

Parâmetros funcionam como variáveis locais
*/

//Escopo de bloco
/*
 Introduzido no ES6, o escopo de bloco define que variáveis declaradas com let e const só podem ser acessadas dentro do bloco onde foram criadas. Um bloco é qualquer trecho de código delimitado por { }, como if, for, while e switch, impedindo o acesso a essas variáveis fora desse escopo.
 */

if (true) {
    const z = 3; //Esse é um escopo de bloco, só existe dentro do bloco if
    console.log(z); // Posso acessar a variável z, pois ela é local ao bloco if
}   

console.log(z); // Não posso acessar a variável z, pois ela é local ao bloco if

//Variáveis declaradas com var não têm escopo de bloco, elas são elevadas para o escopo da função ou global.

//Hosting em Javascript
//Em javascritp, funções e variáveis declaradas são "hoisted " ou ('levadas ao topo').

/*Hoisting é o comportamento em que declarações são processadas antes da execução do código.

O JavaScript não move o código fisicamente, mas interpreta como se declarações estivessem no topo do escopo*/

//exemplo: 
a = 5
console.log(a); 
var a;

/*
Aqui se vermos o código, a variável (a) é declarada depois de ser usada, mas o JavaScript "eleva" a declaração da variável para o topo do escopo, então o código é interpretado como:

var a;
a = 5;
console.log(a);

Isso é chamado de "hoisting" e pode levar a comportamentos inesperados, por isso é recomendado declarar variáveis antes de usá-las.
*/
//Repare que nos exemplos a cima utilizamos a palavra-chae 'var' para criar as variáveis, isso porque o hoisting só acontece com variáveis declaradas com var, variáveis declaradas com let e const sofrem esse hosting também mas ao tentar acessar uma variável antes de sua declaração resultará em um erro de referência.

console.log(p);
let p = 5; // ReferenceError: Cannot access 'p' before initialization - traduzindo: "Não é possível acessar 'p' antes da inicialização"

//Isso cria a Temporal Dead Zone (TDZ), onde acessar a variável antes de sua declaração resultará em um erro de referência.

//A TDZ é o período entre: - A criação do escopo - A inicialização da variável. Durante esse período, a variável existe, mas não pode ser acessada.

//Declaração vs Inicialização

//Declaração é o ato de criar uma variável, enquanto a inicialização é o ato de atribuir um valor a essa variável. Em JavaScript, você pode declarar uma variável sem inicializá-la, e ela terá o valor undefined até que seja inicializada.

var c; // Declaração 
c = 10; // Inicialização

//Em resumo, o escopo em JavaScript é fundamental para entender onde e como as variáveis e funções podem ser acessadas, e o hoisting é um comportamento que pode afetar a forma como o código é interpretado, especialmente quando se trata de variáveis declaradas com var.


//Modo Estrito
//O modo estrito é uma funcionalidade do JavaScript que permite que você escreva código mais seguro e robusto, evitando erros comuns e práticas inseguras. Ele é ativado adicionando a string "use strict"; no início de um arquivo ou função.

// Exemplo de uso do modo estrito
"use strict"; // Ativa o modo estrito para todo o script.
// A partir do ES5, o modo estrito pode ser aplicado ao script inteiro,
// garantindo regras mais rígidas de segurança e boas práticas.

u = 10; // ❌ Erro: u não foi declarada
console.log(u);

//No modo estrito, o JavaScript não permite a criação de variáveis globais acidentais, o que pode ajudar a evitar bugs difíceis de rastrear. Além disso, ele desativa algumas funcionalidades consideradas inseguras ou obsoletas, como a atribuição a propriedades de objetos não extensíveis ou a exclusão de variáveis.  