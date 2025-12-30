//Verificação de Divisbilidade 
const entradaDados1 = 8;
const entradaDados2 = 2;

if(entradaDados1 % entradaDados2 === 0){ //Se no resto da divisão, sobrar 0 é true, logo é divisivel, pois não sobrou
    console.log('É DIVISIVEL')
}else { //Caso o resto da divisão seja diferetne != de 0, logo não é divisivel
    console.log('Não é divisivel')
}