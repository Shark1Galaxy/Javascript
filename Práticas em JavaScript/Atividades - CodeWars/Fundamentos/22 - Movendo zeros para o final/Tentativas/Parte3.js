/*
Remover o primeiro e o último caractere
Tarefa
Seu objetivo é escrever uma função que remova o primeiro e o último caractere de uma string. Você receberá um parâmetro: a string original.

Importante: Sua função deve lidar com strings de qualquer length ≥ 2número de caracteres. Para strings com exatamente 2caracteres, retorne uma string vazia.

Exemplos
'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'

Processo
Remover o 1 e o ultimo caraceter
*/

function remove1And2(string){
    const [primeiroElemento, ultimoElemento] = string
    return string.slice(1,-1)
}
remove1And2('Marcos')