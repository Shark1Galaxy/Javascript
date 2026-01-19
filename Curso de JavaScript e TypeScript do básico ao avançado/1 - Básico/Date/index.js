// Cria um objeto Date com uma data específica
const data = new Date('2025-04-20T20:20:59.100');

// Obtém o dia do mês (1-31)
console.log('DIA', data.getDate());

// Obtém o mês (0-11, onde 0 = janeiro e 11 = dezembro)
console.log('Mês', data.getMonth());

// Obtém o ano completo (ex: 2025)
console.log('Ano', data.getFullYear());

// Obtém a hora (0-23)
console.log('Hora', data.getHours());

// Obtém os minutos (0-59)
console.log('MINUTOS', data.getMinutes());

// Obtém os segundos (0-59)
console.log('Segundos', data.getSeconds());

// Obtém os milissegundos (0-999)
console.log('Milisegundos', data.getMilliseconds());

// Obtém o dia da semana (0 = domingo, 1 = segunda, ..., 6 = sábado)
console.log('DIA DA SEMANA', data.getDay());

// Converte a data para uma string legível
console.log(data.toString());

// Retorna o tempo em milissegundos desde 01/01/1970 (época Unix)
console.log(Date.now());