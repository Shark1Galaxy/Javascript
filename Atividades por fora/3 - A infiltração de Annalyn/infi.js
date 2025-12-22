const knightIsAwake = false; //Está acordado?
const archerIsAwake = true; //Não está acordado?
const prisonerIsAwake = false; //Está acordado?
const petDogIsPresent = false; //Está presente?

//Verificar se o Cavaleiro está acordado!
export function canExecuteFastAttack(knightIsAwake){
  return !knightIsAwake //O prisioneiro está dormindo? false, pq não? (false), acordado! está, conforme o nome da variavel knightIsAwake acordado!
}

//Verificar se da pra espionar com um deles acordado
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake){
  return knightIsAwake || archerIsAwake || prisonerIsAwake //Caso os 3 estejam estejam acordados, vai da merda!
  //knightIsAwake (FALSE) está acordado? sim! ou archerIsAwakew está acordado! sim! (false) ou  prisonerIsAwake está acordado? sim! (false)
} //Final true. pois um deles vai da verdadeiro, e caso eu usase o ! que signfica não, eu estaria dizedo, eles não está acordado? !knightIsAwake


//Função Sinalizar prisioneiro
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
  return prisonerIsAwake && !archerIsAwake //a se o arqueiro está acordado. Se ele estiver acordado, ele vai ver o sinal e capturar a Annalyn! logo false !archerIsAwake, que diz: eles não está acordado? sim!
}

//Função para libertar o prisioneiro
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
 return  petDogIsPresent && !archerIsAwake || prisonerIsAwake && !knightIsAwake && !archerIsAwake && !petDogIsPresent
}//Se o cavaleiro estiver acordado, o arqueiro tbm, o prsisioneiro tbm e o cachorro da annalyn tbm, logo da false.


/*
Pense na variável petDogIsPresent como uma lâmpada:
Se a lâmpada estiver acesa (true), o cachorro está lá.
Se a lâmpada estiver apagada (false), o cachorro não está lá.

O operador ! serve para inverter a pergunta. Ele significa NÃO.
petDogIsPresent: "A lâmpada está acesa?" (O cachorro está presente?)
!petDogIsPresent: "A lâmpada NÃO está acesa?" (O cachorro está ausente?)
*/

/*
Com o cachorro: O cachorro está presente E o arqueiro está dormindo.

Sem o cachorro: O prisioneiro está acordado E o cavaleiro está dormindo E o arqueiro está dormindo.
*/