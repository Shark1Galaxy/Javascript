function ordemCrescente(arr){
    const [numero1 , numero2] = arr //Usando destruturação, onde aqui estou pegando os valores o indice 1 e 2 os numero1 e numero 2 são vartiaveis
    return numero1 < numero2 ? [numero1 , numero2] : [numero2 , numero1]
}
const listaArrays = [6 , 5]
const resultado = ordemCrescente(listaArrays)
console.log(resultado)