    /*
    Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma:  S = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n. 

        Entrada
        N = 10

        Processo
        1 - Entrada dados - V
        2 - Criar um loop, onde, ele vai loop até o tamanho do numero de n - V
        3 - Fazer com que cada vez que o loop passa no bloco, ele vai somando 1 + 1 / contador, ou seja, pelo numero que contador tem até o numero final de numeroPadrao

        Saida
        S = 1 + 1/contador + 1/contador + 1/contador até N. ACREDITO, QUE SEJA, CONFORME O VALOR DO NUMERO, OU SEJA. ELE VAI LUPAR ATÉ O VALOR DE N SE É MAIOR OU N enfim!
        */

        function somaCalculo(numeroPadrao){
            let somarValor = 0;
            let arrayText = [];
            for(let contador = 1; contador <= numeroPadrao; contador++){
                somarValor += 1 + 1 / contador 
                arrayText.push(somarValor)   
            }
            return somarValor, arrayText
        }
        somaCalculo(10)
