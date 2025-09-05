const nomePessoa = "Leandro";
let pesoPessoa = 300;
let alturaPessoa = 1.88;
const calculoIMC = pesoPessoa / (alturaPessoa * alturaPessoa);

if(calculoIMC < 18.5){
    console.log(`${nomePessoa} Baixo Peso `);
} else if(calculoIMC >= 18.6 && calculoIMC < 24.9){
    console.log(`${nomePessoa} Peso Normal `);
} else if(calculoIMC >= 25 && calculoIMC < 29,9){
    console.log(`${nomePessoa} Sobrepeso `);
} else if(calculoIMC >= 30 && calculoIMC < 34.9){
    console.log(`${nomePessoa} Obesidade 1`);
} else if(calculoIMC >= 35 && calculoIMC < 39.9){
    console.log(`${nomePessoa} Obesidade 2`);
} else {
    console.log(`${nomePessoa} Obesidade 3`);
}