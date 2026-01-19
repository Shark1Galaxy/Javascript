//https://www.w3schools.com/js/js_strings.asp
//Eu posos usar aspas duplas dentro de aspas simples
//e par escapar aspas duplas dentro de aspas duplas eu uso \
//               01234567
let umaString = 'um texto'; //Strings elas são feitas em indices começando do 0

console.log(umaString.concat(' em um lindo dia')); //Jeito com concat 
console.log(umaString + ' em um lindo dia'); // Jeito com +
console.log(`${umaString} em um lindo dia`); // Jeito com template string
console.log(umaString.indexOf('o',3 )); //começa a procurar a partir do índice 3. QUE É O 'T'(3)
console.log(umaString.lastIndexOf('m')); //começa a procurar de trás para frente
console.log(umaString.search(/x/)); //retorna o índice do caractere procurado
console.log(umaString.replace('um', 'Outra')); //substitui a palavra 'um' por 'Outra', ou seja, faz uma substituição de um palavra por outra
console.log(umaString.replace(/t/g, 'F')); //substitui todas as ocorrências do caractere 't' por '#', o 'g' é para indicar que é global, ou seja, todas as ocorrências
console.log(umaString.length); //retorna o tamanho da string. exemplo: 9
console.log(umaString.slice(2,9)); //nesse exemplo ele começa a pegar do índice 2 até o índice 6, ou seja, ele pega do ' ' (espaço) depois do 'm' até o 'o' = ' text'
console.log(umaString.slice(-3)); //começa a contar de trás para frente, ou seja, do 't' até o final = 'xto'
console.log(`Substring: ${umaString.substring(2,8)}`) //Pegue só um pedaço do texto, começando no espaço que tem antes do "T" e indo até o final da palavra Texto.
console.log(umaString.split('')); //ele cria um array separando as palavras pelo espaço. nesse caso ele cria um array com 2 posições: ['um', 'texto']
console.log(umaString.toUpperCase()); //transforma a string toda em maiúscula
console.log(umaString.toLowerCase()); //transforma a string toda em minúscula
console.log(umaString.at(6)); //retorna o caractere na posição especificada. nesse caso ele retorna o 't'
console.log(umaString[6]) //retorna o caractere na posição especificada. nesse caso ele retorna o 't'

//Métodos mais comuns de string:
//toUpperCase() - transforma a string toda em maiúscula. exemplo: umaString.toUpperCase()
//toLowerCase() - transforma a string toda em minúscula. exemplo: umaString.toLowerCase()
//IndexOf() - retorna o índice da primeira ocorrência de uma string. exemplo: umaString.indexOf('texto'). ele diz que o 't' de texto começa na posição 3, caso não ache ele retorna -1, ele começa do começo para o fim
//lastIndexOf() - retorna o índice da última ocorrência de uma string. exemplo: umaString.lastIndexOf('um'). ele diz que o 'u' de um começa na posição 3, caso não ache ele retorna -1, ele começa de trás para frente
//match() - retorna um array com as ocorrências encontradas. exemplo: umaString.match(/x/). ele retorna ['x', index: 6, input: 'um texto', groups: undefined], caso não ache ele retorna null
//search() - retorna o índice da primeira ocorrência de uma string usando expressão regular. exemplo: umaString.search(/x/). ele diz que o 'x' começa na posição 6, caso não ache ele retorna -1
//replace() - substitui uma string por outra. exemplo: umaString.replace('um', 'Outra'). ele retorna 'Outra texto'. caso não ache ele retorna a string original
//length - retorna o tamanho da string. exemplo: umaString.length. ele retorna 9
//slice() - extrai uma parte da string e retorna uma nova string. exemplo: umaString.slice(2,6). ele retorna ' texto', ou seja, do índice 2 até o índice 6 (não incluindo o 6)
//substring() - //Pegue só um pedaço do texto, começando no espaço que tem antes do "T" e indo até o final da palavra Texto.
//chartAt() - retorna o caractere na posição especificada
//concat() - concatena strings exemplo: 'olá'.concat(' tudo bem?')

/*
Pesquisa de strings em JavaScript
### 🔍 `String.indexOf()`

👉 **Procura um texto e diz a posição da primeira vez que aparece**

* Retorna o número da posição
* Se não achar, retorna **-1**

```js
"banana".indexOf("na") // 2
```

---

### 🔍 `String.lastIndexOf()`

👉 **Igual ao indexOf, mas começa a procurar do final**

```js
"banana".lastIndexOf("na") // 4
```

---

### 🔍 `String.search()`

👉 **Procura um texto (ou regex) e retorna a posição**

* Muito parecido com `indexOf`
* Aceita **expressões regulares**

```js
"banana".search("na") // 2
```

---

### 🔍 `String.match()`

👉 **Retorna o que foi encontrado**

* Pode retornar **array**
* Muito usado com **regex**

```js
"banana".match("na") 
// ["na"]
```

---

### 🔍 `String.matchAll()`

👉 **Retorna TODAS as ocorrências**

* Retorna um **iterador**
* Usado com regex global (`/g`)

```js
[..."banana".matchAll(/na/g)]
// [["na"], ["na"]]
```

---

### 🔍 `String.includes()`

👉 **Só responde: existe ou não?**

* Retorna **true ou false**

```js
"banana".includes("na") // true
```

---

### 🔍 `String.startsWith()`

👉 **Verifica se começa com…**

```js
"banana".startsWith("ba") // true
```

---

### 🔍 `String.endsWith()`

👉 **Verifica se termina com…**

```js
"banana".endsWith("na") // true
```
*/