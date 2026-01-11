function saudacao(nome){
    return 'Olá '+ nome + ', tudo bem?'
}
const funcao = saudacao('Julia');
console.log(funcao + ' Mauro benicio');

function calculoGeral(numero1 = 0, numero2 = 0){
    const resultadoValores = numero1 + numero2
    return resultadoValores
}
const resultadoValores = calculoGeral(5,5)

function calculoGeral2(){
    return `O resultado da soma de ${resultadoValores} que é função a cima (calculoGeral) + ${20} da ${resultadoValores + 20}`
}
console.log(calculoGeral2(resultadoValores))
