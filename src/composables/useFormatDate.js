export function getDate() {
  return new Date();
}

export function getMonthlySubscriptionEndDate(startDate, cycle) {
  let currentDate = startDate;
  currentDate.setMonth(currentDate.getMonth() + 1);
  return currentDate
}
export function getYearlySubscriptionEndDate(startDate) {
  let currentDate = startDate;
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  return currentDate
}
