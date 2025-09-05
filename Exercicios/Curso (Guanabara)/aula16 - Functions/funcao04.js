// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) { 
        fat *= c // fat = fat *(vezes) c
}
return fat // Retorna o valor de fat para quem chamou a função (fatorial())
 }
console.log(fatorial(5)); 

//Estudar sobre fatoriais mámetáica e recursividade
//5! = 5 x 4!
//4! = 4 x 3!
//3! = 3 x 2!
//2! = 2 x 1!
//1! = 1
//0! = 1