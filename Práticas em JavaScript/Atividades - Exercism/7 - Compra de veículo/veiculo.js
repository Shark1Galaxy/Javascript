//Determine se você precisará de uma carteira de motorista.
export function needsLicense(kind){
  /*
  Nesse caso aqui, criamos uma função onde, ele vai verificar dependendo do tipo de veiculo qeu ele tem se ele precisa de carteira ou não.
  */
  if(kind === 'car' || kind === 'truck'){
    return kind = true; // Retorna verdadeiro (precisa de carteira)
  } else {
    return kind = false; // Retorna falso (não precisa de carteira, tipo bicicleta 'bike')
  }
}
needsLicense('car') //true

//Escolha entre dois veículos em potencial para compra.
export function chooseVehicle(option1, option2){
  if(option1 > option2){
// COMO FUNCIONA A COMPARAÇÃO:
// Quando comparamos textos com > ou <, o JavaScript compara letra por letra usando a tabela Unicode
// 
// Exemplo prático: "Toyota" vs "Wuling"
// - Pega a primeira letra de cada palavra: T vs W
// - Compara os valores Unicode: T (U+0054) vs W (U+0057)
// - Como T vem ANTES de W no alfabeto, T é MENOR que W
// - Resultado: "Toyota" < "Wuling" (Toyota é menor)
//
// NO NOSSO IF:
// if(option1 > option2) significa "se option1 vem DEPOIS no alfabeto"
// 
// Exemplo: chooseVehicle('Wuling Hongguang', 'Toyota Corolla')
// - W > T? SIM! (W vem depois de T no alfabeto)
// - Então entra no if e retorna option2 (Toyota)
// - Por quê? Porque o exercício pede para escolher o que vem PRIMEIRO alfabeticamente
//
// Resumindo: sempre retorna o veículo que apareceria PRIMEIRO numa lista organizada de A a Z
    return `${option2} is clearly the better choice.` 
  } else {
    return `${option1} is clearly the better choice.`
  }
}
chooseVehicle('Wuling Hongguang', 'Toyota Corolla');

//Calcule uma estimativa do preço de um veículo usado.
export function calculateResellPrice(originalPrice, age){
   // Calcula quanto vale um carro usado baseado na idade dele
  if(age < 3){// Se o carro é novinho (menos de 3 anos), vale 80% do preço original
    // Exemplo: carro de R$ 1000 com 1 ano = R$ 800
    return (80 / 100) * originalPrice //Calculo para descobrir % de um numero
  } else if(age > 10){// Se o carro é bem velho (mais de 10 anos), vale só 50% do preço original
    // Exemplo: carro de R$ 1000 com 15 anos = R$ 500
    return (50/100) * originalPrice
  } else {// Se o carro tem entre 3 e 10 anos, vale 70% do preço original
    // Exemplo: carro de R$ 1000 com 5 anos = R$ 700
    return (70/100) * originalPrice
  }
}
// Exemplo: carro que custava R$ 1000 com 1 ano de uso
// Retorna 800 (que é 80% de 1000)
calculateResellPrice(1000, 1);