const num = [5,8,2,9,3]
console.log('INDEX')
const post = num.indexOf(8) //Ele é usado para encontrar um conteudo(valor) dentro da array, vc colocando detro do () qual valor vc quer, e se não acha, ele diz que é -1

if(post === -1){
    console.log('Valor não encontrado')
}else {
console.log(`O valor ${num[4]} está na posição ${post}`)
}
