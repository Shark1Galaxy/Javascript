//Obter a Primeira letra de uma frase E justando pra construir uma frase SHIRE
export function frontDoorResponse(poem1){
  return poem1[0]
}
frontDoorResponse('Stands so high');

//Capitalizar uma palavra (Deixando a 1 letra em maisculo e o RESTO minusculo)
export function frontDoorPassword(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
} //Pegando a 1 letra, aumentando ela + concatenando com ela mesmo, e tirando a 1 letra, e dixando o resto em paralelo deixando toda ela em minusculo
frontDoorPassword('shire');

//Obter a última letra de uma frase

export function backDoorResponse (line){
  const limpadorEspaco = line.trim().slice(-1) //Ele limpa os espaço dos começo e do fim da string com trim() e o slice, como ele normalmente corta a letra que vc fala no (), vc usando -1, vc ta dizendo pra pegar a ultima letra, pq na tabela é: -3 -2 -1 0 1 2 3
  return limpadorEspaco 
}
backDoorResponse ('Stands so high');

/*
const minhaString = "Stands so high";
const ultimaLetra = minhaString.charAt(minhaString.length - 1);
*/

export function backDoorPassword(nameHorse) {
   return nameHorse[0].toUpperCase() + nameHorse.slice(1).toLowerCase() + ', please'
} //Pegando a 1 letra, aumentando ela + concatenando com ela mesmo, e tirando a 1 letra, e dixando o resto em paralelo deixando toda ela em minusculo
backDoorPassword('horse');
