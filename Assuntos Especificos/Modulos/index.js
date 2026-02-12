//https://www.youtube.com/watch?v=mfKnoUgzlVs 
//Usando o CommonJs para importar as funções e constantes de outros arquivos. mas está ultrapassado.
const { soma, subtratio } = require("./Functions/CommonJs") //Caminho do arquivo que exporta as funções, sem a extensão .js usanndo o CommonJs com desestruturação
const { emoji } = require("./Constants/CommonJs.js")

console.log(soma(5,2))
console.log(subtratio(5,2))
console.log(emoji)

//Usando o ES6 para importar as funções e constantes de outros arquivos.
import { somaWithEModules, subtrationWithEModules } from "./Functions/ESModules.js" //Caminho do arquivo que exporta as funções, com a extensão .js usando o ES6 Modules com desestruturação
import { emojiWithEModules } from "./Constants/ESModules.js" //Caminho do arquivo que exporta as constantes, com a extensão .js usando o ES6 Modules com desestruturação

console.log(somaWithEModules(5,2))
console.log(subtrationWithEModules(5,2))
console.log(emojiWithEModules)

import './hello.js' //Importando o arquivo hello.js, que tem um console.log("Hello World") usando o ES6 Modules, sem exportar nada, apenas importando o arquivo para executar o código dentro dele.s
