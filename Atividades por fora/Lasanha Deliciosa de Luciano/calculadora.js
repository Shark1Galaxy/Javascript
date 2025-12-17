 //Criando um pequeno programa para ajudar a calcular o tempo de cozimento de uma lasanha.

 //Criando um programa que calcula o tempo restante no forno, o tempo que já passou no forno, e o tempo de preparo das camadas da lasanha.
export const expectativaDeTempo = 40; //Tempo Médio para o bolo ficar pronto é de 40 minutos.

//Função pra calcular o tempo restante no forno, o tempo que já passou no forno, e o tempo de preparo das camadas da lasanha.
export function minutosRestanteNoForno(tempoAtualNoForno) {
  return expectativaDeTempo - tempoAtualNoForno 
}
minutosRestanteNoForno(30); // Esse tempo, é o tempo que o bolo já está no forno,se for 30 minutos, o tempo restante será 10 minutos, pois 40 - 30 = 10


export function tempoDePreparo(numeroDeCamadas) {
  // Cada camada da lasanha leva 2 minutos para ser preparada.
  // Aqui multiplicamos o número de camadas por 2 minutos.
  return numeroDeCamadas * 2
}

tempoDePreparo(2); 
// Estamos dizendo que a lasanha tem 2 camadas: numeroDeCamadas = 2.
// Então o cálculo é: 2 camadas × 2 minutos = 4 minutos de preparo.

export function totalDeMinutos(numeroDeCamadas, tempoAtualNoForno) {
  return tempoDePreparo(numeroDeCamadas) + tempoAtualNoForno
}
console.log(totalDeMinutos(2, 30));
