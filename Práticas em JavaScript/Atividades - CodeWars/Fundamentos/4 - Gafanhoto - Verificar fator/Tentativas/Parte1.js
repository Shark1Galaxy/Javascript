/*
Esta função deve verificar se factor é um fator de base.

Retorne true se for um fator ou false se não for.

Fatores são números que você pode multiplicar para obter outro número.

Exemplo: 2 e 3 são fatores de 6, porque 2 × 3 = 6.

Você pode verificar se é um fator dividindo: se o resto da divisão for 0, então é fator.

Exemplo: 2 não é fator de 7, porque 7 % 2 = 1.

Observação: base é um número > 0 e factor é > 0.

Entrada
base = 2
factor = 3

Processo, 
Um fator é um número que, multiplicado por outro, resulta no número original (base)

  // Exemplo: 2 * 3 = 6 → 2 e 3 são fatores de 6

  // Em programação, não precisamos multiplicar todos os números para verificar
  // Podemos usar a divisão e o resto (%)
  
  // base % factor retorna o resto da divisão de base por factor
  // Se o resto for 0, significa que o factor "cabe certinho" dentro do base
  // Exemplo: 
  // 6 % 2 = 0 → 2 é fator de 6
  // 7 % 2 = 1 → 2 não é fator de 7

  // Retorna true se o factor for um fator da base, false caso contrário

Saida
false

*/

function checkForFactor (base, factor) {
    return base % factor === 0 ? true : false;
}
checkForFactor(2,3)