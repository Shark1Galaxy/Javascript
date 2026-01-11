//Entrada
//VOCÊ TOCA BANJO?

//Saida
//SE SIM a eltra coemçar com R maisculo e r minusco
//verdadeiro, lgoo, toca banjo
//caso n, falso
//n toca banjo

function areYouPlayingBanjo(name) {
  if(name[0] === 'R' || name[0] === 'r'){
      return name + " plays banjo" 
  } else {
      return name + " does not play banjo"
  }
  return name;
}
console.log(areYouPlayingBanjo('Thiago'));