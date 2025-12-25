//Variáveis Globais
const position = 2; //Posição 2 do indce: Recuperar uma carta da pilha && Trocar uma carta da pilha && Remover uma carta da pilha &&
const replacementCard = 6; //Numero novo para TROCAR UMA CARTA DA PILHA
const newCard = 8 // Novo valor: Inserir uma carta no topo da pilha && Inserir uma carta no fundo da pilha
const stackSize = 4; //Numero padrão para Verificar o tamanho da pilha com length

// Recuperar uma carta da pilha

// Define a posição (índice) da carta que queremos pegar

// positionItem → o array (pilha de cartas) ONDE VÃO RECEBER AS 4 NO PARÂMETRO [1, 2, 4, 1]
// position → o índice da carta que queremos acessar
//E sim, preciso por a variavel já feita, dentro do parametro pq ainda q funcione, é melhor por , pq pode haver erros na função e fatores externos podem prejudicar
export function getItem(positionItem, position) {
    return positionItem[position];  //Aqui estou dizendo que quero o indice da posição 2. o indice do array = 1, 2, (4), 1
}
getItem([1, 2, 4, 1], position); //E sim, preciso por a variavel já feita, dentro do parametro pq ainda q funcione, é melhor por , pq pode haver erros na função e fatores externos podem prejudicar
//Resultado: 4


// Trocar uma carta da pilha
export function setItem(positionItem, position, replacementCard) {
    positionItem.splice(position, 1, replacementCard); // //Aqui em cima estou trocando o numero da posição 2, e só 1 antes dele que vai ser trocado que no caso, é ele mesmo e trocando pelo 6
    return positionItem;
    /* Precisei retornar o array inteiro, e não o splice direto,
    porque o splice faz duas coisas ao mesmo tempo:
    1) ele altera o array original, trocando o valor na posição
    2) ele retorna apenas o valor que foi removido (ex: [4])
    
    Então, se eu colocasse `return positionItem.splice(...)`,
    o retorno seria o valor removido, e não a pilha atualizada.
    
    Como o array já foi modificado pelo splice,
     ao retornar `positionItem` eu recebo o array final com o valor trocado.*/
}
setItem([1, 2, 4, 1], position, replacementCard);
//RESULTADO = [1, 2, 6, 1]


// Inserir uma carta no topo  dapilha
export function insertItemAtTop(positionItem, newCard) {
    positionItem.push(newCard);
    return positionItem;
      //Aqui mesma coisa do exemplo lá de cima, eu preciso chamar o return positionItem porque, O push adiciona um novo valor no FINAL do array, onde, se eu chamasse o return dentro do positionItem.push(newCard) - ele não ia me da a array completa, e sim o numero de elementos daquela array, que é 5.length
      // O push retorna o tamanho do array, não o índice e nem o array.
}
insertItemAtTop([5, 9, 7, 1], newCard);
//RESULTADO = [5, 9, 7, 1, 8]

// Remover uma carta da pilha
export function removeItem(positionItem, position) {
    positionItem.splice(position, 1); //Removendo o indice 2, e 1 só ele antes dele
    return positionItem;
}
removeItem([3, 2, 6, 4, 8], position); 
//RESULTADO =  [3, 2, 4, 8]

// Remover a carta do topo da pilha
export function removeItemFromTop(positionItem) {
    positionItem.pop(); //Pop remove o ultimo indice de uma array
    return positionItem;
}
removeItemFromTop([3, 2, 6, 4, 8]);
//RESULTADO = [3, 2, 6, 4]

// Inserir uma carta no fundo da pilha
export function insertItemAtBottom(positionItem, newCard) {
    positionItem.unshift(newCard); //O .unshift adiciona um valor no 0 do indice
    return positionItem;
}
insertItemAtBottom([5, 9, 7, 1], newCard);
//RESULTADO = [8, 5, 9, 7, 1]

// Remover uma carta do fundo da pilha
export function removeItemAtBottom(positionItem) {
    positionItem.shift(); //O .shift remove o indice 0 do array
    return positionItem; 
}
removeItemAtBottom([8, 5, 9, 7, 1]); 
//Resultado = [5, 9, 7, 1]

// Verificar o tamanho da pilha
export function checkSizeOfStack(positionItem, stackSize) {
  return positionItem.length === stackSize; //Aqui é simples, eu to querendo saber o numero de elementos não inidice, é elementos, no caso, se contar 3,2,6,4,8 da 5 elementos logo, se o positionItem.length da 5, ele não é igual ao stackSize que é 4, ent da falso. não verdadeiro
}
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
//Resultado = false 