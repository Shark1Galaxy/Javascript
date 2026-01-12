/*
5. Volume do Cilindro  
Escreva um programa em JavaScript para calcular o volume de um cilindro com quatro casas 
decimais usando classes de objetos.  

Entrada
raio (r) = 3 cm
altura (h) = 10 cm
π ≈ 3,14

Processo


SAIDA
V = 282,6 cm³

Fórmula do volume do cilindro: 
V = π × r² × h 
Onde:  
• r é o raio  
• h é a altura do cilindro 
*/
function calcularCilindro(raio , height){
    const valores = {raio, height, pi: Math.PI.toFixed(2)}
    return `${parseFloat(valores.pi) * (valores.raio ** 2) * valores.height}cm³`
}
console.log(calcularCilindro(3,10))
