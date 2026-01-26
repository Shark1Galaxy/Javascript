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

//Adicionar + 10 em cada produto pois chegou em estoque
//Filter só os só em promoção
//Saber qual é o faturamento se vendermos todos em promoção

const faturamentoTotal = produtos.map(function(produto){
  return {...produto, quantidade: produto.quantidade + 10} // Bom, aqui eu estou puxando todos o resto do objeto todos eles e apos o , adicionando manualmente um valor que está em produtos.quantidade colocando + 10 neles esse ... é expredd opereitor

}).filter(produto => produto.temDesconto).reduce((acumulador,produto) => acumulador + (produto.quantidade * produto.preco),0) //O fillter ele vai filtar e me devolver se for veradeiros(true) todos que estão no objetos no caso temDesconto = true. ele me devolve. o reduce(ele vai me devolver o valor total se vender todos que estão em promoção no caso true. onde, ele vai pegar o produto.quantitade e vai multiplicar pelo preço, onde depois ele vai jogar no acumulador (que é 0). isso ele vai fazer com todo objeto. dps ele vai me devolver o valor total que foi acumulado no acumulador)
console.log(faturamentoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) //Aqui eu to colocando o valor em currency da moeda real