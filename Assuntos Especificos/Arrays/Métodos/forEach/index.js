//forEach serve para percorrer o array e executar uma função. mesma coisa for ,porém o for é extremamente manual
const users = [
  { name: 'Rodolfo', age: 33, contact: '(19) 94343-3434' },
  { name: 'Paulo', age: 21, contact: '(12) 93443-3434' },
  { name: 'Aline', age: 40, contact: '(13) 94566-3434' },
  { name: 'Maria', age: 12, contact: '(14) 94343-3476' },
]
users.forEach(function(item,index){
    if(item.age >= 18){
        console.log(item.name + ' maior de idade'+ ' posição: ' + index)
    } else {
        console.log(item.name + ' menor de idade' + ' posição: ' + index)
    }
});

//Usado ele para percorer tudo e soma. mas aqui é mais certo usar o reduce
function somandoTudo(numbers){
    let soma = 0;
    numbers.forEach(item => soma += item)
    return soma
}
console.log(somandoTudo([10,20,30,40,50]))