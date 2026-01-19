//Dia seamana
function dayTake(){
    const agora = new Date()
    const diaSemana = agora.getDay();
    const dias = ['Segunda-Feira', 'Terça-feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado', 'Domingo'];
    switch(diaSemana){
        case 0: return dias[0]
        case 1: return dias[1]
        case 2: return dias[2]
        case 3: return dias[3]
        case 4: return dias[4]
        case 5: return dias[5]
        case 6: return dias[6]
        default: return 'Dia da semana não correspondente'
    }
}

//MÊS DA SEMANA
function mesAno(){
    const agora = new Date();
    const mesAno = agora.getMonth();
    const datas = ['Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    switch(mesAno){
        case 0: return datas[0]
        case 1: return datas[1]
        case 2: return datas[2]
        case 3: return datas[3]
        case 4: return datas[4]
        case 5: return datas[5]
        case 6: return datas[6]
        case 7: return datas[7]
        case 8: return datas[8]
        case 9: return datas[9]
        case 10: return datas[10]
        case 11: return datas[11]
        default: return 'Data não encontrada'
    }
}


function telaScreen() {
const resultadoH1 = document.querySelector('h1');
    const agora = new Date();
    return resultadoH1.innerHTML = `${dayTake()}, ${agora.getDate()} de ${mesAno()} de ${agora.getFullYear()} ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`;
}