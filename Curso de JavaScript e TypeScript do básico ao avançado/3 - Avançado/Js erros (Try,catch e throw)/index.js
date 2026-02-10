
try { //Vai executar isso, se não der certo; executa o de baixo
    console.log(nExisto);
 } catch(err){
    console.log('nExisto a variavel Não existo');
 }

 function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X ou Y precisam ser numeros')
    } 
    return x + y
 }

try{
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch(error){
    // console.log(error) - Não uasr esse metodo pois é mega perigoso
    console.log('Alguma coisa mais amigável')
}

try {
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    try{
        console.log(a)
    }catch(e){
        console.log('Deu erros')
    } finally{
        console.log('Também so finally')
    }

} catch(error){
    console.log('Tratando o error');
} finally{
    console.log('Finally Eu sempre sou execultados');
}