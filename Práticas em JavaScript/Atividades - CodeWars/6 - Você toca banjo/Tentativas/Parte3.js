/*
Crie uma função que responda à pergunta: "Você toca banjo?".
Se o nome começar com a letra "R" ou "r" (minúscula), então a pessoa toca banjo!

A função recebe um nome como seu único argumento e retorna uma das seguintes strings:

nome + " toca banjo"
nome + " não toca banjo"

Os nomes fornecidos são sempre strings válidas.
*/

const areYouPlayingBanjo = (name) => {return name[0].toUpperCase() == 'R' ? `${name} plays banjo`: `${name} does not play banjo`}