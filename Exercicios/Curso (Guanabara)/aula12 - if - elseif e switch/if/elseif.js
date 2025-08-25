let now = new Date();
const hora = now.getHours();
console.log(`A sua hora atual é de ${hora}`);
if (hora < 12 && hora > 0o0) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  //Se a hora está entre 12 e 18 é tarde
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
