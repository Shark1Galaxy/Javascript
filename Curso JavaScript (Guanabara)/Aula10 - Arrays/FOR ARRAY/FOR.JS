const numerosArrays = [5,8,2,7,9,1]
//length, diz quantos conteudos tem dentro do array

for(let contador = 0; contador < numerosArrays.length; contador++){
    //Enquanto contador for menor que o numero de elemtentos(6) que tem dentro do array, que são 5, contador vai receber + 1
    console.log(`A posição ${contador} tem o Conteudo ${numerosArrays[contador]}`)
    // Por que usamos numerosArrays[contador]?
    // Simples: basicamente, quando queremos pegar um número manualmente de um array,
    // usamos os colchetes [] com o número da posição (índice). Exemplo:
    /*
        arrays = [1, 2, 3, 4]
        arrays[1] // Estou dizendo que quero o conteúdo (o número) do array na posição 1, que é o [1,(2),3,4].

        // Quando usamos numerosArrays[contador], estamos dizendo que queremos o número do array [] na posição em que o contador estiver.
        // Ou seja, se o contador estiver com valor 0, ele vai pegar o valor da posição 0 do array [(5),8,2,7,9,1], executando numerosArrays[0].
        // Se o contador for 1, pega numerosArrays[1], e assim por diante.

// Isso continua até que o contador seja maior que a quantidade de conteúdos do array (array.length).
    */
}