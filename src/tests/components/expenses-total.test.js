import { totalAmount } from '../../selectors/expense-total';
import expenses from '../seed-data/expenses';

test('Should return zero', () => {
  const total = totalAmount([]);
  expect(total).toBe(0);
});

test('Should return expense amount for single', () => {
  const total = totalAmount([expenses[0]]);

  expect(total).toBe(195);
});

test('Should return expense amount for single', () => {
  const total = totalAmount(expenses);

  expect(total).toBe(
    expenses[0].amount + expenses[1].amount + expenses[2].amount
  );
});
