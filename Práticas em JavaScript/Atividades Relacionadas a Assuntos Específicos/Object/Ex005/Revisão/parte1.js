/*
Escreva um programa em JavaScript para calcular o volume de um cilindro com quatro casas 
decimais usando classes de objetos.  
Fórmula do volume do cilindro: 

V = π × r² × h Onde:  
• r é o raio  
• h é a altura do cilindro  

Entrada
raio (r) = 3 cm
altura (h) = 10 cm
π ≈ 3,14

Processo


SAIDA
V = 282,6 cm³

*/

function calcularVolume(v,r,h){
    const informations = {
        v,
        pi: Number(Math.PI.toFixed(2)),
        r,
        h
    }
    return v = (informations.pi * (informations.r ** 2)) * informations.h + ' cm³'
}
let resultado = calcularVolume(0,3,10)
console.log(resultado)