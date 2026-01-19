
function zeroNaFrente(numero){
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data){
    const dia = zeroNaFrente(data.getDate());
    const mes = zeroNaFrente(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroNaFrente(data.getHours());
    const min = zeroNaFrente(data.getMinutes());
    const seconds = zeroNaFrente(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seconds}`
}
const date = new Date();
console.log(formataData(date));
