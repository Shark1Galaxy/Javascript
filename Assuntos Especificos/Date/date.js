const agora = new Date();
console.log(agora.toString())

const anoNovo = new Date('01 01 2025');
console.log(anoNovo.toString())

console.log(agora.getDate()) //Dia de hoje
console.log(agora.getFullYear()) //Ano de hoje
console.log(agora.getHours()) //Horas 
/**
 * O computador trabalha com datas a partir de uma data de referência.
 * No JavaScript, essa referência é o EPOCH, que corresponde a
 * 1º de janeiro de 1970, às 00:00:00 (UTC).
 * A partir desse momento, o tempo é contado em milissegundos,
 * ou seja, o JavaScript calcula quantos milissegundos se passaram
 * desde o EPOCH até uma data específica.
 * o getTime() ele fala quantos milisegundos passaram des dessa epoca
 */
console.log(agora.getTime())

const tempoRestate = anoNovo.getTime() - agora.getTime();
console.log(tempoRestate)