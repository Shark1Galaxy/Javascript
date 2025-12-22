//Calcular a taxa diária a partir da taxa por hora
//Se ele recebe 89 reais por hora, ele que saber quanto é em 8 horas de trabalho. so fazer 89 x 8 horas == 712
export function dayRate(ratePerHour){
return ratePerHour * 8; //712
}
dayRate(89)//Taxa Diária = Taxa Horária × Número de Horas por Dia 
  
//Calcular o número de dias de trabalho dado um orçamento fixo
export function daysInBudget(budget,ratePerhour){
  return Math.floor(budget / (ratePerhour * 8)); //Se ele recebe 712 em um dia, em quantos dias ele vai gastar o orçamento de 20.000? simples, façamos o calculo de 20.000 / 712. exemplo
  
    /*
  Pense nisso como fazer compras. Imagine que você tem R$ 100,00 (seu orçamento) e quer comprar ingressos de cinema.
  Se cada ingresso custa R$ 20,00, quantos ingressos você consegue comprar?
    */
} //28
daysInBudget(20000,89); //28

//Calcular o valor com desconto mensal para projetos grandes
function priceWithMonthlyDiscount(hourlyRate, days, discount) {
  const dailyRate = hourlyRate * 8; //712
  const daysPerMonth = 22;

  const fullMonths = Math.floor(days / daysPerMonth);
  const remainingDays = days % daysPerMonth;

  const monthlyCost = daysPerMonth * dailyRate;
  const discountedMonthsCost =
    fullMonths * monthlyCost * (1 - discount);

  const remainingDaysCost = remainingDays * dailyRate;

  return Math.ceil(discountedMonthsCost + remainingDaysCost);
}

priceWithMonthlyDiscount(89, 230, 0.42);