// ================================
// Valores Falsy em JavaScript
// ================================
// São valores que, quando avaliados em um contexto lógico, retornam false:

// undefined
// null
// 0
// false
// ''  -> string vazia
// NaN -> Not a Number (não é um número válido)

// ================================
// Valores Truthy
// ================================
// Todo valor que NÃO está na lista acima é considerado truthy

// ================================
// Operador OR (||)
// ================================
// O operador OR (||) retorna o PRIMEIRO valor truthy encontrado.
// Se o primeiro valor já for truthy, os próximos são ignorados.

// Exemplos:
false || true;        // true
false || 'Marcos';    // 'Marcos'
false || 1;           // 1
false || 1 || 3;      // 1

// ================================
// Exemplo prático
// ================================
const corPersonalizada = 'Vermelho';
const corPadrao = 'Azul';

// O OR vai retornar o primeiro valor truthy.
// Como 'Azul' é uma string não vazia (truthy),
// ela será usada e o segundo valor será ignorado.
const corPerfil = corPadrao || corPersonalizada;

console.log(corPerfil); // 'Azul'

/*
Se 'corPadrao' fosse um valor falsy (ex: '' - string vazia),
o OR ignoraria esse valor e retornaria 'corPersonalizada'.

Exemplo:
const corPadrao = '';
Resultado: 'Vermelho'
*/
