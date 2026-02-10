/*
O try...catch é usado para testar um código que pode dar erro e tratar esse erro sem quebrar o 
programa.  

try {  
  // código que pode dar erro  
} catch (err) {  
  // código que trata o erro  
}  

• O código dentro do try é executado normalmente.  
• Se ocorrer um erro, o JavaScript pula para o catch.  
• O erro é armazenado na variável err. Podemos pro qualquer nome, mas como boa práticas usamos o 
nomes como: e, err, ou erro
*/

const numero = 1;
try {
    console.log(numer1o)
} catch(error){
    console.log('Essa variavel não existe');
}


/*
 TypeError  

 Ocorre quando o tipo de dado é incompatível com a operação.  
*/
try {
    let num = 1;
    num.toUpperCase();
} catch(error){
    console.log(error.name) //Aqui to dizendo que o error é um Erro de tipo
}

/*
RangeError  
O valor usado está fora do limite permitido.  

Outro exemplo:  
let num = 1;  
num.toPrecision(500); // limite máximo é 100
//  
*/

try {
    new Array(-1)
}catch(error){
    console.log(error.name) // Ele ta dizendo que o valor usado está fora do limite permitido.  
}


/*
URIError  
Ocorre ao usar funções de URI com caracteres inválidos.  
try {  
  decodeURI("%%%"); } 
catch (err) {  
  console.log(err.name); }  
*/

try {
    decodeURI("%%%")
} catch(error){
    console.log(error.name) // Ele ta dizendo que ocorreu um erro ao usar funções de URI com caracteres inválidos.  
}

/*
SyntaxError  

Erro de escrita do código, ou seja, erro de gramática do JavaScript. 

let nome = "João; // string não fechada Outro exemplo:  
Math.round(4.6;  
  Importante:  
SyntaxError não pode ser capturado com try...catch, porque:  
• O código nem chega a executar  
• O erro aparece direto no console
*/

//Try com catch - O código dentro do try é executado normalmente. Se ocorrer um erro, o JavaScript pula para o catch. O erro é armazenado na variável error. Podemos pro qualquer nome, mas como boa práticas usamos o nomes como: e, err, ou erro
try {
    console.log(5 + 'a')
} catch(error){
    console.log(error.name) // Ele ta dizendo que ocorreu um erro de escrita do código, ou seja, erro de gramática do JavaScript.  
    console.log(error.message) // Ele ta dizendo que ocorreu um erro de escrita do código, ou seja, erro de gramática do JavaScript.
}

//try com finally - O bloco finally é executado independente do resultado do try ou catch
try {
    console.log(5 + 'a')
} finally {
    console.log('Esse bloco é executado independente do resultado do try ou catch') // O bloco finally é executado independente do resultado do try ou catch
}

//Throw - O throw é usado para lançar um erro personalizado. Ele pode ser usado para criar erros específicos para o seu código, e pode ser capturado com try...catch. O throw é seguido por uma expressão que representa o erro a ser lançado. Essa expressão pode ser um objeto de erro, uma string ou qualquer outro valor.
/*
throw – Criar erros manualmente  

Usado para forçar um erro.  
throw "Erro!"; throw 
404;  

Pode lançar:  
• String  
• Number  
• Boolean  
• Object 
*/

if(numero <= 1){
    console.log('é maior')
} else {
    throw Error('Esse numero não é maior');
}

function verifiarTipoPrimitivo(numbers){
    if(typeof numbers !== Number){
        throw Error ('escolha um tipo primitivo correspondente');
    } else {
        console.log('é um numbers')
    }
}

try {  
  if (x === "") throw "vazio";   
  if (isNaN(x)) throw "não é número";   
  if (x < 5) throw "muito baixo";   
  if (x > 10) throw "muito alto";  
} catch (err) {  
  console.log("Erro: " + err);  
}

try{
    if(x === '') throw Error ('String vazia');
    if(isNaN(x)) throw 'NÃO é um número';
    if(Number.isInteger(x)) throw Error ('É inteiro');
    if(isFinite(x)) throw "É decimal"
} catch(error){
    console.log(`Erro: ${error}`)
}