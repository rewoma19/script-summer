function dayRate(ratePerHour) {
  const dailyRate = ratePerHour * 8;
  return dailyRate;
}

function daysInBudget(budget, ratePerHour) {
  const dailyRate = dayRate(ratePerHour);
  return Math.floor(budget / dailyRate);
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = dayRate(ratePerHour);
  const monthlyRate = dailyRate * 22; // remember that there are 22 billable days

  // Number of months based on each full month having 22 billable days
  const fullMonths = Math.floor(numDays / 22);

  const daysLeft = numDays % 22; // number of days asides the 22 billable days in a month

  const rateForFullMonths = fullMonths * monthlyRate;
  const discountedMonthlyRate = rateForFullMonths * (1 - discount);
  const rateForDaysLeft = dailyRate * daysLeft;
  const totalPriceWithMonthlyDiscount = discountedMonthlyRate + rateForDaysLeft;
  return Math.ceil(totalPriceWithMonthlyDiscount);
}
