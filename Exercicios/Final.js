// Função para pedir 2 números inteiros positivos
function solicitarNumeros() {
  let numeros = []; // Cria uma "caixa com gavetas" vazia para guardar os números

  // Esse laço repete 2 vezes (uma para cada número que vamos pedir)
  for (let i = 0; i < 2; i++) {
    let num; // Aqui vamos guardar temporariamente o número que o usuário digitar

    // Esse "do...while" fica perguntando até a pessoa digitar um número válido
    do {
      // Pede o número e converte o texto digitado para número inteiro
      num = parseInt(prompt(`Digite o ${i + 1}º número inteiro positivo:`), 10);

      // Se o número for inválido (não é número ou é menor/igual a zero), mostra aviso
      if (isNaN(num) || num <= 0) {
        console.log("⚠️ Por favor, digite apenas números inteiros positivos!");
      }
    } while (isNaN(num) || num <= 0); // Só sai daqui quando for um número certo

    // Coloca o número dentro do vetor (caixa)
    numeros.push(num);
  }

  // Devolve a caixa cheia de números
  return numeros;
}

// Função para fazer a divisão dos dois números
function dividirNumeros(vetor) {
  // Pega o número da primeira gaveta (posição 0) e divide pelo da segunda (posição 1)
  let resultado = vetor[0] / vetor[1];

  // Mostra o resultado no console
  console.log(
    `📌 Resultado da divisão: ${vetor[0]} ÷ ${vetor[1]} = ${resultado}`
  );
}

// 🚀 Programa principal (aqui é onde tudo acontece de fato)

// Chama a função para pedir os números e guarda na variável 'vetorNumeros'
let vetorNumeros = solicitarNumeros();

// Chama a função para dividir usando o vetor que a gente acabou de criar
dividirNumeros(vetorNumeros);
