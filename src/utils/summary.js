import dayjs from "dayjs";

export function getSummaryByCategory(spendings, mode) {
  const now = dayjs();
  let filtered = [];

  if (mode === "Daily") {
    filtered = spendings.filter(s => dayjs(s.date).isSame(now, "day"));
  } else if (mode === "Weekly") {
    filtered = spendings.filter(s => dayjs(s.date).isSame(now, "week"));
  } else if (mode === "Monthly") {
    filtered = spendings.filter(s => dayjs(s.date).isSame(now, "month"));
  }

  const summary = {};
  filtered.forEach(s => {
    summary[s.category] = (summary[s.category] || 0) + s.amount;
  });
  return summary;
}

export function getTotalAllTime(spendings) {
  return spendings.reduce((sum, s) => sum + s.amount, 0);
}

export function getTotalByMonth(spendings, date) {
  return spendings
    .filter(s => dayjs(s.date).isSame(date, "month"))
    .reduce((sum, s) => sum + s.amount, 0);
}