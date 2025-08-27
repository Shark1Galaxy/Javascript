let permissao; //Pode ser um; usuário comum,gerente,diretor

switch (permissão) {
  case "comum":
    console.log("Usuário comum");
    break;
  case "gerente":
    console.log("Usuário Gerente");
    break;
  case "diretor":
    console.log("Usuário Diretor");
    break;
  default: //Equivalente ao else
    console.log("Usuário Não encontrado!");
}
