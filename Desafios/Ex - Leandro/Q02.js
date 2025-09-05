//Tempo = Distancia / Velocidade
// Tempo = 25 / 4 = 6.25h = 0.25h x 60min = 15min = ou seja 6 horas e 15minutos
const distanciaPercorrida = 25;
const velocidadeVariavel = 4;
let tempo = distanciaPercorrida / velocidadeVariavel;
const horas = tempo % 2 * 60; 
console.log(`${Math.floor(tempo)} horas e ${horas} minutos`);