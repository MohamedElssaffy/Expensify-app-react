import database from '../../firebase/firebase';
import configureMockStor from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from '../../actions/expenses';
import expenses from '../seed-data/expenses';

const uid = 'haskasjf5645';
const defAuthState = { auth: { uid } };

beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expensesData[id] = { description, amount, note, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

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
  const store = createMockStore(defAuthState);

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

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expense);

      done();
    });
});

test('Should add expense with default values to database and store', (done) => {
  const store = createMockStore(defAuthState);

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

      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);

      done();
    });
});

test('Should return action object', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('Should fitch expenses from database', (done) => {
  const store = createMockStore(defAuthState);

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});

test('Should remove expnese', (done) => {
  const store = createMockStore(defAuthState);
  const id = expenses[0].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test('Should edit expense from database', (done) => {
  const store = createMockStore(defAuthState);
  const id = expenses[2].id;
  const updates = {
    description: 'Updated expense from testing',
  };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });

      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      const expense = { ...snapshot.val(), id: snapshot.key };
      expect(expense).toEqual({
        ...expenses[2],

        ...updates,
      });
      done();
    });
});
