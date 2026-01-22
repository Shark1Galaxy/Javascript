/*Utilizando rest operator em objetos, temos um produto com um nó de atributos: 
• O atributo produtoIndicado é o mais importante e deve ser extraído separadamente 
• Todos os outros atributos devem ser agrupados em uma variável chamada atributosAdicionais*/


function eComerce(){
    const produto = {
        produtoIndicado: 'Indicado',
        atributos: {
            nome: 'Amaciante',
            marca: 'Dove',
            validade: '23/06/2019',
            cor: 'Blue'
        }
    }
    // Aqui estamos "tirando" de dentro do objeto produto
    const {produtoIndicado, atributos} = produto //Aqui estou chamando os atributos, que é um objeto tbm
    /*
    ❓ Por que eu tenho que fazer isso?
    👉 Porque produtoIndicado e atributos estão DENTRO de produto
    Você não pode usar algo que está dentro da caixa sem tirar ele de lá primeiro.
    ai eu preciso pegar tirar da caixa, os atributos pra depois chamar ela por fora tirando todos os seus valores com o operador (...) rest
    */
    const {...atributosAdicionais} = atributos // Aqui criamos uma NOVA variável chamada atributosAdicionais e copiamos tudo que tem dentro do objeto atributos (é como fazer uma cópia dele). seria equivalanete a const atributosAdicionais = atributos. ali em cima eu to pegando o bojeto 

    // Aqui retornamos UM ÚNICO valor (um objeto)
    return { 
        produtoIndicado,
        atributosAdicionais
    }
    //Porque não usamos virgula aqui? bom, porque basicamente, o virgula ele diz pro js pra executar tudo e retorna apenas o último valor apos a ","
}
console.log(eComerce())

/*
Ótima pergunta — isso é **confusão comum de quem está aprendendo**, então vamos bem **leigos mesmo**, sem termos difíceis 👍

Vou explicar **o “por quê”**, não só o “como”.

---

## 🧠 Pense assim (bem simples)

Você tem uma **caixa grande** chamada `produto`.

Dentro dessa caixa tem:

* uma coisa chamada `produtoIndicado`
* outra **caixa menor** chamada `atributos`

```js
produto
 ├─ produtoIndicado
 └─ atributos
     ├─ nome
     ├─ marca
     ├─ validade
     └─ cor
```

---

## ❓ Por que eu tenho que fazer isso?

```js
const { produtoIndicado, atributos } = produto
```

👉 **Porque `produtoIndicado` e `atributos` estão DENTRO de `produto`**
Você **não pode usar** algo que está dentro da caixa **sem tirar ele de lá primeiro**.

❌ Isso NÃO funciona:

```js
console.log(atributos) // erro
```

✔️ Só funciona depois de “tirar”:

```js
const { atributos } = produto
```

📌 **Leigamente:**

> “Estou abrindo a caixa `produto` e pegando o que tem dentro dela”

---

## ❓ Por que `atributos` fica dentro de `{}`?

```js
const { produtoIndicado, atributos } = produto
```

👉 Porque `{}` significa:

> “Pegue propriedades de dentro de um objeto”

Se fosse sem `{}`, o JS ia achar que você quer pegar **o objeto inteiro**.

---

## ❓ E por que depois eu faço isso?

```js
const { ...atributosAdicionais } = atributos
```

Agora pense assim:

* `atributos` **também é uma caixa**
* Dentro dela tem várias coisas
* O `...` significa:
  👉 “pegue **tudo** que tem aqui dentro”

📌 Em português bem claro:

> “Crie uma nova variável chamada `atributosAdicionais`
> e copie tudo que tem dentro de `atributos`”

É basicamente o mesmo que:

```js
const atributosAdicionais = atributos
```

Mas com uma diferença importante:

* com `...` → **cópia**
* sem `...` → **mesma referência**

(isso vai fazer diferença mais pra frente)

---

## 🔁 Resumindo BEM leigo

1️⃣ `produto` é a caixa grande
2️⃣ `atributos` está **dentro** de `produto`
3️⃣ Para usar `atributos`, você precisa:

```js
const { atributos } = produto
```

4️⃣ Para copiar tudo que tem dentro de `atributos`:

```js
const atributosAdicionais = { ...atributos }
```

--

*/