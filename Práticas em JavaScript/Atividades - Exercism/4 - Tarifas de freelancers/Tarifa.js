// 1. Calcular a taxa diária
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

// 2. Calcular o número de dias de trabalho dado um orçamento fixo
export function daysInBudget(budget, ratePerHour) {
  // Reutilizamos a função dayRate para evitar "magic numbers"
  return Math.floor(budget / dayRate(ratePerHour));
}

// 3. Calcular o valor com desconto mensal para projetos grandes
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const daysPerMonth = 22;
  const dailyRate = dayRate(ratePerHour); // Reutiliza a lógica da taxa diária

  // Cálculos de meses e dias
  const fullMonths = Math.floor(numDays / daysPerMonth);
  const remainingDays = numDays % daysPerMonth;

  // Cálculo do custo
  const monthlyCost = dailyRate * daysPerMonth;
  // Aplica o desconto ao custo total dos meses cheios
  const totalDiscountedMonthsCost = fullMonths * monthlyCost * (1 - discount);
  const totalRemainingDaysCost = remainingDays * dailyRate;

  // Retorna o teto (arredondado para cima) da soma
  return Math.ceil(totalDiscountedMonthsCost + totalRemainingDaysCost);
}