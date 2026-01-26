const produtos = [
  { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
  { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
  { id: 3, nome: "Smart TV LG 55\"", preco: 2799.00, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
  { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
  { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
  { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
  { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
  { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5 },
  { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 }
];


const novosProdutos = produtos.map(function(produtos){
    const novosPrecos = produtos.temDesconto === true ? produtos.preco * 0.9 : produtos.preco; // Aqui estou acrescentando desconto , onde se ele tiver com true me desconton ele vai adicionar 9% de desconto neles e caso não tenha(false), ele vai me devolver o valor normal sem o desconto.
    return {
        id: produtos.id,
        nome: produtos.nome,
        preco: novosPrecos.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}), //Aqui estou puxando os novos preços, onde fizemos todo o processo a cima, e estou adicionado um metodo para adicionar os currency do REAL 
        quantidade: produtos.quantidade
    }
})
console.log(novosProdutos);

console.log('Filtrando somente os produtos em promoção')
//Filtrar somente os produtos em promoção
const produtosEmPromocao = produtos.filter(entradaNumeros => entradaNumeros.temDesconto == true)
console.log(produtosEmPromocao)

//Qual sera o faturamento, se vendermos todo o estoque
const precoTotal = produtos.reduce(function(acumulador, produtoPegou){
    return acumulador + (produtoPegou.preco * produtoPegou.quantidade) // Bom, como funciona aqui, basicamente, nos queremos saber o valor toda se vendermos tudo qeustá em estoque, ou seja, precisamos primeiro pegar o valor do preco e fazer x a quantidade que está em estoque. tipo: preco2 = 45000 so que ele tem 3 em estoque, ou seja, se cada 1 vale 4500 fazemos * 3 que é a quantidade de estoque. com isso toda vez que ele fazer esse calculo. ele vai jogar no acumulador 
},0)
console.log(precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))