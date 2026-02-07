/*
Existe um array com alguns números.
Todos os números são iguais, exceto um. Tente encontrá-lo!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

É garantido que o array contém pelo menos 3 números.
Os testes contêm alguns arrays muito grandes, então pense em performance.

Este é o primeiro kata de uma série:

Encontrar o número único (este kata)
Encontrar a string única
Encontrar o único
*/


function findUniq(arr){
    const [valor1,valor2,valor3] = arr
    const valorComum = valor1 === valor2 || valor1 === valor3 ? valor1 : valor2 ;
    for(const numeroDiferente of arr){if(numeroDiferente !== valorComum){return numeroDiferente}}
}
console.log(findUniq([ 1, 1, 1, 2, 1, 4, 1]))
