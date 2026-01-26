const idadesMinhas = [
    { nome: 'Marcos', idade: 23 },
    { nome: 'Paulo', idade: 15 },
    { nome: 'Ricardo', idade: 20 },
    { nome: 'Ana', idade: 18 },
    { nome: 'Bruno', idade: 27 },
    { nome: 'Carla', idade: 22 },
    { nome: 'Daniel', idade: 30 },
    { nome: 'Eduarda', idade: 16 },
    { nome: 'Felipe', idade: 25 }
];
const idadeMenor = idadesMinhas.filter(idade => idade.idade < 18)

console.log(idadeMenor)