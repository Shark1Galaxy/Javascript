const horarioAgora = new Date();
let horarioLocal = horarioAgora.getHours();

if (horarioLocal >= 6 && horarioLocal < 12){ // A hora está entre 6 e 12? , se sim é bom dia, caso n seja, desce pra proxima !
    console.log("Bom dia!");
} else if (horarioLocal >= 12 && horarioLocal < 18){
    console.log("Boa tarde!");
} else if(horarioLocal >= 0 && horarioLocal < 6){
    console.log('Boa madrugada!');
} else {
    console.log("Boa noite!")
}