
const pessoas = ['Marcos', 'Juana','Paula','Ricardo','Joeliton'];

const [primeiroNome, segundoNome,terceiroNome,quartoNome,quintoNome,sextoNome = 'Thiago'] = pessoas
console.log(primeiroNome)
console.log(segundoNome)
console.log(terceiroNome)
console.log(quartoNome)
console.log(quintoNome)
console.log(sextoNome)

const numeros = [1,2,3,4,5,6,7,8,9,10];

const [...resto] = pessoas
console.log(`Resto pessoas: ${resto.join(', ')}`)

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2                
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [first, second, thirt] = numeros2
console.log(first[2], second[1], thirt[2])
console.log(numeros2[0][0])
console.log(numeros2[0][1])
console.log(numeros2[0][2])

console.log('\n2 array')
console.log(numeros2[1][0])
console.log(numeros2[1][1])
console.log(numeros2[1][2])


const cores = ['Azul','Red','Yellow','Green']
const [,,,greenColor] = cores
console.log(greenColor)


/*
Em JavaScript, **desestruturação (destructuring)** é um recurso da linguagem que permite **extrair valores de arrays ou propriedades de objetos e atribuí-los diretamente a variáveis**, de forma mais curta e legível.

### Desestruturação de objetos

Você extrai propriedades de um objeto usando chaves `{}`:

```js
const usuario = {
  nome: "Ana",
  idade: 25,
  profissao: "Dev"
};

const { nome, idade } = usuario;

console.log(nome);   // "Ana"
console.log(idade);  // 25
```

Também é possível **renomear variáveis** e **definir valores padrão**:

```js
const { nome: nomeUsuario, cidade = "Não informada" } = usuario;
```

---

### Desestruturação de arrays

Você extrai valores com colchetes `[]`, respeitando a ordem:

```js
const cores = ["vermelho", "azul", "verde"];

const [primeira, segunda] = cores;

console.log(primeira); // "vermelho"
console.log(segunda);  // "azul"
```

Pulando posições:
```js
const [, , terceira] = cores;


### Desestruturação em parâmetros de função
Muito usada para tornar funções mais claras:

```js
function exibirNome({ nome }) {
  console.log(nome);
}

exibirNome({ nome: "Carlos", idade: 30 });


A desestruturação em JavaScript:

* Reduz código repetitivo
* Melhora a legibilidade
* Facilita o acesso a dados de objetos e arrays
* É amplamente usada em código moderno (ES6+)
*/