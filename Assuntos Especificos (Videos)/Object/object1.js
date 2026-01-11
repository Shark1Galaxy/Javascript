/*
Um objeto é uma variável que guarda várias informações juntas.

Um objeto tem chaves e valores:
a chave é o nome da informação
o valor é o conteúdo dessa informação

Objetos podem representar qualquer coisa, como:

carros 🚗
pessoas 👤
casas 🏠
animais 🐶

propriedade = carro, pessoa, casa, animal
valor = o emoji correspondente

Objetos diferentes podem ter as mesmas propriedades, mas com valores diferentes.
Exemplo: dois carros podem ter cor, mas um é vermelho e outro é azul.

Objetos também podem ter métodos (funções).
Eles podem ser os mesmos, mas usados em momentos diferentes.

Sintaxe simples:
const nomeDoObjeto = {chave: valor, chave: valor};

Exemplo abaixo:
*/
const carrosPropriedades = {
    //Tudo isso aqui é embaixo é chamado de propriedades(chave)
    nome: 'Fiat', //nome é a chave e o valor é 'FIAT
    modelo: 500, //modelo é a chave e o valor é 500
    peso: '850kg', //peso é a chave e o valor é '850kg'
    cor: 'branco' //cor é a chave e o valor é 'branco'
    //Essa forma aqui é chamada de Objeto literal, pois eu acrescentei valores manuais a essas chaves
}

//Exemplo objeto vazio para adicionar depois (igual o array)
const carrosPropriedades2 = {};

/*
Observação:

Use sempre const para declarar objetos.
Quando um objeto é criado com const, você não pode trocar o objeto por outro depois.

Mas isso não impede mudanças dentro do objeto.
Você ainda pode alterar, adicionar ou remover propriedades e valores.

Não é necessário usar new Object().
Para um código mais fácil de ler, mais simples e mais rápido, use objeto literal com const({ }).
*/

//Formas de acessar a propriedade do objeto e efetivamente o seu valor

console.log(carrosPropriedades.nome);
console.log(carrosPropriedades["nome"]);