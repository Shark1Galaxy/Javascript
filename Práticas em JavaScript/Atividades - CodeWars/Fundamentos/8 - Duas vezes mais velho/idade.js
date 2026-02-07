/*
Sua função recebe dois argumentos:

idade atual do pai (em anos)

idade atual do filho (em anos)

Calcule há quantos anos o pai tinha o dobro da idade do filho (ou em quantos anos o filho terá o dobro da idade).

A resposta deve ser sempre maior ou igual a 0, não importa se isso aconteceu no passado ou se acontecerá no futuro.

Entrada
Pai = 50
Filho = 11

Processo
1 - Precisamos entregar os valores dentro do parametro do pai e do filho - V

2 - Vamos lá, para saber em quantos anos ele tera o dobr

3- Sabendo a diferença, ONDE nesse caso, o pai é 39 anos mais velho que o filho, basta calcular quanto falta (ou passou) para a idade atual do filho chegar nesse valor.no caso, aqui ele quer saber o dobro. logo, é * 2

Saida
78 anos 

*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld - (2 * sonYearsOld)
}
twiceAsOld(36,7)

/*
Exemplo Prático
Pai: 50 anos
Filho: 20 anos

Passo 1: Qual a diferença?$50 - 20 = 30.(A diferença é 30 anos. Essa é nossa META).

Passo 2: Onde está o dobro?O dobro vai acontecer quando o Filho tiver 30 anos (igual à diferença).

Passo 3: A Resposta (A conta final)Se o filho tem 20 hoje, e precisa chegar em 30...$$30 (\text{Meta}) - 20 (\text{Idade Atual}) = 10 \text{ anos}$$Resposta: Daqui a 10 anos.
*/