//https://www.w3schools.com/js/js_number_methods.asp#mark_isnan - Olhar mais
//IEEE 754-2008 - Pesquisar sobre em JS PARA TER PRESSIÃO
let numeroFirst = 0.7; //Number 
let numeroSecond = 0.1; //Number

//Pode existir uma certa impressão, nos numeros, ent para que seja correto esse número, podemos usar essa forma!
numeroFirst = ((numeroFirst * 100) + (numeroSecond * 100)) / 100 //0.8
numeroFirst = ((numeroFirst * 100) + (numeroSecond * 100)) / 100 //0.9
numeroFirst = ((numeroFirst * 100) + (numeroSecond * 100)) / 100 //1.0

console.log(numeroFirst);
console.log(`É ou não um número inteiro?: ${Number.isInteger(numeroFirst)}`); //É ou não um número inteiro?


console.log('Maneira mais otimizada')
//Ou dessa forma um pouco mais otimizada!
let numero1 = 0.7; //number
let numero2 = 0.1; //number

numero1 += numero2 //0.8
numero1 += numero2 //0.9
numero1 += numero2 //1.0
console.log(numero1) //Dessa forma, fica muito impressivo, vemos que ele ficar 0.9999999999999999 , pra resolver isso oq fazemos? //É ou não um número inteiro?
console.log(parseFloat(numero1.toFixed(2))) 
console.log(`É ou não um número inteiro?: ${Number.isInteger(numeroFirst)}`); //É ou não um número inteiro? 

/*No JavaScript, o toFixed() é um método usado em números para definir quantas casas decimais devem aparecer.
Por exemplo, quando usamos toFixed(2), estamos dizendo que depois do ponto (.) devem aparecer apenas duas casas decimais.

À primeira vista, usar apenas o toFixed() parece resolver o problema, mas na verdade não resolve.
Isso acontece porque o toFixed() retorna uma string, e não um número.
Exemplo: o número 1.00 vira a string "1.00".

Por causa disso, se usarmos Number.isInteger(), o resultado será false, já que "1.00" não é um número inteiro, é uma string.

Para resolver isso, usamos o parseFloat(), que converte essa string de volta para number.
Assim, "1.00" vira 1.0 novamente.*/

console.log('Outros métodos de Number')
let um1 = 1.5234;
let um2 = 4;
//Outros metodos de para usar em Numbers (Claro, existem outros, olhar em w3school)
console.log(um1.toString() + um2); //Caso um dos numeros seja uma string, ao inves de somar, ele concatena
console.log(um1.toString(2)); //Aqui é uma representação binaria do número, linguagem da maquina no caso. Todos os métodos numéricos podem ser usados ​​em qualquer tipo de número (literal, variável ou expressão):

console.log(um1.toFixed(2)) //Ele retorna uma string com o número escrito com a quantidade especificada de casas decimais, ou seja, quantos numeros serão mostrados apos o (.): toFixed(2)É perfeito para trabalhar com dinheiro.
console.log(um1.toPrecision(2)) //Controla o número total de dígitos significativos. muito usado se estiver lidando com precisão matemática
console.log(Number.isInteger(um1)) //Esse metodo ,ele verifica se o número é inteiro ou não, caso seja , ele retorna true, caso não false;
console.log(Number.isSafeInteger(numeroFirst))
const temp = um1 * 'ola'; //Tentar multiplicar com strings não funciona, da NaN - Not a Number
console.log(Number.isNaN(temp)) //Esse metodo, verifica, se a conta for NaN, caso seja, ele retorna true, caso não , false
console.log(um1.toExponential()) // Converte o número em notação científica (exponencial) onde retorna uma string // "1.5234e+0", ou seja: mostra o número no formato a × 10^n, de forma bem compacta.
console.log(um1.valueOf()); /*Em JavaScript, um número pode ser um valor primitivo (typeof = number) ou um objeto (typeof = object).
O valueOf()método é usado internamente em JavaScript para converter objetos Number em valores primitivos (de objeto number) para number.

Não há motivo para usá-lo em seu código.
*/

/*
Em JavaScript, **`toPrecision()`** e **`toFixed()`** servem para **formatar números**, mas têm **objetivos diferentes**.

---

## 🔢 `toFixed()`

👉 **Controla o número de casas decimais**

### Como funciona

* Define **quantas casas após a vírgula** o número terá
* **Arredonda** se necessário
* Retorna uma **string**

### Exemplo

```js
let n = 12.34567;

n.toFixed(2); // "12.35"
n.toFixed(0); // "12"
n.toFixed(4); // "12.3457"
```

### Quando usar

✔ Valores monetários
✔ Preços, notas, porcentagens
✔ Sempre que você quiser **um número fixo de decimais**

💡 Muito comum em interfaces:

```js
preco.toFixed(2); // R$ 19.90
```

---

## 📏 `toPrecision()`

👉 **Controla o número total de dígitos significativos**

### Como funciona

* Define o **total de dígitos** (antes + depois da vírgula)
* Pode transformar o número em **notação científica**
* Retorna uma **string**

### Exemplo

```js
let n = 12.34567;

n.toPrecision(3); // "12.3"
n.toPrecision(5); // "12.346"
n.toPrecision(2); // "12"
```

Exemplo com número grande:

```js
let x = 12345.6789;

x.toPrecision(3); // "1.23e+4"
```

### Quando usar

✔ Cálculos científicos
✔ Medidas físicas
✔ Situações onde **precisão matemática** importa mais que aparência

---

## 🆚 Diferença resumida

| Método          | Controla       | Exemplo          | Uso típico           |
| --------------- | -------------- | ---------------- | -------------------- |
| `toFixed()`     | Casas decimais | `12.345 → 12.35` | Dinheiro / UI        |
| `toPrecision()` | Dígitos totais | `12.345 → 12.3`  | Cálculos científicos |

---

## ❓ Qual usar?

🔹 **Use `toFixed()`** se estiver exibindo valores para usuários
🔹 **Use `toPrecision()`** se estiver lidando com **precisão matemática**
*/