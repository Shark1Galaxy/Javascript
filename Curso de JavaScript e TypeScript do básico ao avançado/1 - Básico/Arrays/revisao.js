const parentesMeus = ["Marcos", 'Jose', 'Talia', 'Richard'];
console.log(`${parentesMeus[0]} normal`); //MPegando o 1 nome

console.log(typeof parentesMeus) //Array é um object
console.log(parentesMeus instanceof Array); //Aqui é para verificarmos se é uma array: true ou não false

//Formas de adicionar elementos dentro de umn array
//Esses adicionam ao fim da array
parentesMeus[parentesMeus.length] = 'Robert';
console.log(`${parentesMeus} Aqui podemos ver que parente está com um outro nome, onde ${parentesMeus} foi adicionado no final do array`);
parentesMeus.push('Julia');
console.log(`${parentesMeus} Aqui podemos ver que Julia foi adicionado ao fim do array, com o método push`);
//Esses adicionam ao começo da array
parentesMeus.unshift('Juliana')
console.log(parentesMeus)

//Forma de pesquisar dentro do array
console.log(parentesMeus[0]) //Formas mais comuns de pesquisar atraves de indices mencionados ao lado da variavel
console.log(parentesMeus[1])
console.log(parentesMeus[2])
