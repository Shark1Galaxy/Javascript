/*
 Crie uma função que recebe um vetor e um número. 
Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro 
e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf). 

Entrada
let numero = 5
[5,2,3,5,1,5]

Processo
Bom, basicamente, precisamos criar um algoritimo, onde, ele vai ler o array por inteiro, e assim que ele achar esse numero, igual a o que o camarada vai digiatar e guardar em uma variavel por exemplo, ele vai dizer em quais posições do indice o valor está. ex: [5,2,5,6,2] = o numero 5 está a posição tal e tal.

1 - criar a fução, com o parametro para receber os valores da lista de array - V
2 - Bom,precisamso criar uam forma de ler todo o array. e com isso vamos resolver com loops - V
3 - Com, esse loop, precsiamos arrumar uam forma, de a cada vez que ele retorna um numero do loop, ele verificar se é o 5, caso não seja, ele ignora e passa por popriximo, até achar o 5. achou, diz a posição que ta e continua ate finalizar a string.
4 - POo

Saida
0 - 3 - 5 posições(indice)
*/

function findValue(value, valuePreferido){
    for(let contador = 0; contador <= value.length; contador++){
        if(value[contador] === valuePreferido){
            if(value.length <= 1){
                console.log(`O valor escolhido ${valuePreferido} foi encontrado no indice apensa ${contador}`)
            } else {
                console.log(`O valor escolhido ${valuePreferido} foi encontrado nos indices de ${contador}`)
            }
        }
    }
}
const valoresLista = [5,2,1,5,3]
const resultado = findValue(valoresLista, 5)
console.log(resultado)