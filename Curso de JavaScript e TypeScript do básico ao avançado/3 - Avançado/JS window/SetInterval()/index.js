function mostrarHoura(data){
    data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

setInterval(function(){
    console.log(mostrarHoura());
},1000); //execultando de 1000 em 1000 milisegundos (1 segundo)