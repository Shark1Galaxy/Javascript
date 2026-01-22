/*
No mesmo sistema de e-commerce, por uma regra de negócio incomum, será necessário exibir a segunda e a quinta foto do produto em um bloco promocional na home da loja. 

Os demais valores do array de fotos não são necessários
*/
const fotos = ['Foto1','Foto2','Foto3','Foto4','Foto5'];
const [segundaFoto,,,,quintaFoto] = fotos
console.log(segundaFoto,quintaFoto)

/*
Por que essa solução é boa?

✔ Usa desestruturação corretamente
✔ Evita acessar índices diretamente (fotos[1], fotos[4])
✔ Deixa clara a intenção de “pular” valores
✔ Atende exatamente à regra de negócio
*/