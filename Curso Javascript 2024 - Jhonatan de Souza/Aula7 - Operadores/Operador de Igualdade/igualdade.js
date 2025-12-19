//Operador de igualdaed
//Igualdade estrita

console.log(5 === 5) //true - pois ele está verificando além dos valores com ==, e o = é o tipo também, ou seja, os 2 são numeros e o tipo deles é number. logo, verdadeiro;

console.log('5' === 5 ); //falso = pois o numero é verdaeiro, mas o tipo não é logo. falso!

//Igualdade solta
console.log( 1 == 1 ); //True - Aqui ele retonra true pq ele simplismente ignora o tipo, e so o valores; aidna que sejam diferentes os tipos, ele converte pra serem iguais!

//Exemplo:
console.log( '5' == 1 ); //true, mesmo o tipo sendo string, ele converte pra number e da true. mas não é recomendado pois, isso é complexo e pode da mt merda!