//JS é uma linguagem funcional
//5! = 5 x 4 x 3 x 2 x 1 - Estudar fatorial

function fatorial(numero){
    let fatorial1 = 1;
    for(let contador = numero; contador > 1; contador--){
        console.log(fatorial1 = fatorial1 * contador)
        /*
        Exemplo prático:
        Ao chamar fatorial(5), o loop executa as seguintes etapas:

        Iteração 1: fatorial1 = 1 * 5 = 5
        Iteração 2: fatorial1 = 5 * 4 = 20
        Iteração 3: fatorial1 = 20 * 3 = 60
        Iteração 4: fatorial1 = 60 * 2 = 120

        Ao final, a função retorna 120, que é o fatorial de 5.
        */
    }
    return fatorial1
}
console.log(fatorial(5))

//Recursividade
//5! = 5 x 4 x 3 x 2 x 1 - Calcular o fatorial de fora recursiva
//5! =  5 x 4!
//4! = 4 x 3!
//n! = n! x (n-1)!

/*
 * Calcula o fatorial de um número de forma recursiva.
 * 
 * O fatorial de um número (n!) é o produto de todos os números inteiros positivos de 1 até n.
 * Esta função chama a si mesma até que n seja igual a 1, quando retorna 1 (caso base).
 * Por exemplo, facotiralCursivo(5) retorna 5 * 4 * 3 * 2 * 1 = 120.
 * 
 * @param {number} n - O número para calcular o fatorial.
 * @returns {number} O fatorial de n.
 */
function facotiralCursivo(n){
    if(n == 1){
        return 1
    } else {
        return n * facotiralCursivo(n-1)
    }
}
console.log(facotiralCursivo(5))