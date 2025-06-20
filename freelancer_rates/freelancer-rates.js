function dayRate(ratePerHour) {
  const dailyRate = ratePerHour * 8;
  return dailyRate;
}

function daysInBudget(budget, ratePerHour) {
  const dailyRate = dayRate(ratePerHour);
  return Math.floor(budget / dailyRate);
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {}
