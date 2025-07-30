const SPENDING_KEY = "spending-records";
const CATEGORY_KEY = "user-categories";

export function getAllSpendings() {
  return JSON.parse(localStorage.getItem(SPENDING_KEY) || "[]");
}

export function saveSpending(entry) {
  const data = getAllSpendings();
  data.push(entry);
  localStorage.setItem(SPENDING_KEY, JSON.stringify(data));
}

export function getCategories(defaults) {
  return JSON.parse(localStorage.getItem(CATEGORY_KEY) || JSON.stringify(defaults));
}

export function saveCategory(newList) {
  localStorage.setItem(CATEGORY_KEY, JSON.stringify(newList));
}