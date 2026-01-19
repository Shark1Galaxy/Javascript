const h1 = document.querySelector('h1');
const dataCima =  new Date();


//Função com condição bem simples pra resolver problema refente os 0 que vem antes etc
function zeroNaFrente(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        default:
            diaSemana = '';
            return diaSemanaTexto;
    }
}

function getNomeMes(diaMes){
    let nomeMes;
    switch(diaMes){
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'Março';
            return nomeMes;
        case 3:
            nomeMes = 'Abril';
            return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes;
        case 7:
            nomeMes = 'Agosto';
            return nomeMes;
        case 8:
            nomeMes = 'Setembro';
            return nomeMes;
        case 9:
            nomeMes = 'Outubro';
            return nomeMes;
        case 10:
            nomeMes = 'Novembro';
            return nomeMes;
        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
        default:
            nomeMes = '';
            return nomeMes;
    }
}

function criaDate(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDias = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDias}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroNaFrente(data.getHours())}:${zeroNaFrente(data.getMinutes())}:${zeroNaFrente(data.getSeconds())}`
}

h1.innerHTML = criaDate(dataCima)