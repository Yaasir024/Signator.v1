export function getDate() {
  return new Date();
}

export function getMonthlySubscriptionEndDate(startDate) {
  let currentDate = startDate;
  currentDate.setMonth(currentDate.getMonth() + 1);
  return currentDate
}
export function getYearlySubscriptionEndDate(startDate) {
  let currentDate = startDate;
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  return currentDate
}
export function getCurrentYear() {
  let currentDate = getDate();
  return currentDate.getFullYear()
}
export function getFormattedDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options)
}
