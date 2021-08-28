import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should return remove action object', () => {
  const action = removeExpense({ id: 'abc123' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123',
  });
});

test('Should return edit action object', () => {
  const action = editExpense('123abc', { description: 'my description' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'my description',
    },
  });
});

test('Should Return add action object with provided data', () => {
  const expenseData = {
    description: 'my description',
    note: 'my note',
    amount: 5000,
    createdAt: 5000,
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('Should Return add action object with default data', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
