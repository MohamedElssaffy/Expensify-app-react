import expenses from '../seed-data/expenses';
import expensesReducer from '../../reducers/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('Should remove expense with correct id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[2].id,
  });

  expect(state).toEqual([expenses[0], expenses[1]]);
});

test('Should not remove expense with wrong id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: 'wrong id',
  });

  expect(state).toEqual(expenses);
});

test('Should add expense', () => {
  const expense = {
    description: 'description',
    note: '',
    createdAt: 0,
    amount: 0,
    id: '4',
  };
  const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });

  expect(state).toEqual([...expenses, expense]);
});

test('Should edit expense with correct id', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'updated note',
    },
    id: expenses[0].id,
  });

  expect(state[0].note).toBe('updated note');
});

test('Should edit expense with correct id', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'updated note',
    },
    id: 'wrong id',
  });

  expect(state).toEqual(expenses);
});
