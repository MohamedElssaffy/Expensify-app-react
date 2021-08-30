export const totalAmount = (expenses) => {
  if (expenses.length === 0) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < expenses.length; i++) {
    result += parseInt(expenses[i].amount);
  }
  return result;
};
