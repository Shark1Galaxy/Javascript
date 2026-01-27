console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

for(let contador = 0; contador <= 10; contador++){ // de 10 em 10
    const par = contador % 2 === 0 ? 'PAR' : 'impar'
    console.log(contador,par)
}

const frutas = ['Maçã', 'Pêra', 'Uva'];
for(let contador = 0; contador < frutas.length; contador++){
    console.log(frutas[contador] + ' Indice ' + contador)
}