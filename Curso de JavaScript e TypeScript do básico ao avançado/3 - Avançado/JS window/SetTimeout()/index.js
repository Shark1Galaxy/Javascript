function mostrarHoura(data){
    data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostrarHoura());
},1000); //execultando de 1000 em 1000 milisegundos (1 segundo)

setTimeout(function(){
    clearInterval(timer); //limpa o intervalo, ou seja, para de executar a função mostrarHora() depois de 5 segundos 
},3000); 

setTimeout(function(){
    console.log('Olá mundo!');     
},5000); //executa a função depois de 5 segundoss