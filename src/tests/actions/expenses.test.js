import database from '../../firebase/firebase';
import configureMockStor from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
} from '../../actions/expenses';
import expenses from '../seed-data/expenses';

const createMockStore = configureMockStor([thunk]);

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
  const action = addExpense(expenses[1]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1],
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});

  const expense = {
    description: 'Test Expesnse',
    note: 'no note',
    amount: 1651,
    createdAt: 6515516816,
  };

  store
    .dispatch(startAddExpense(expense))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expense,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expense);

      done();
    });
});

test('Should add expense with default values to database and store', (done) => {
  const store = createMockStore({});

  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...defaultExpense,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);

      done();
    });
});

// test('Should Return add action object with default data', () => {
//   const action = addExpense();

//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//     },
//   });
// });
