import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

// EDIT EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// SET TEXT

const setText = (text = '') => ({
  type: 'SET_TEXT',
  text,
});

// SORT BY AMOUNT

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SORT BY DATE

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SET START DATE

const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date,
});

// SET END DATE

const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date,
});

// Expenses Reducer

const defaultExpState = [];

const expensesReducer = (state = defaultExpState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((exp) => {
        if (exp.id === action.id) {
          return {
            ...exp,
            ...action.updates,
          };
        }
        return exp;
      });
    default:
      return state;
  }
};

// Filters Reducer

const defaultFilState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = defaultFilState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date,
      };
    default:
      return state;
  }
};

// get visible expenses

const getVisibleExpenses = ({ expenses, filters }) => {
  const { text, sortBy, startDate, endDate } = filters;

  return expenses
    .filter((exp) => {
      const startDateMatch =
        typeof startDate !== 'number' || exp.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || exp.createdAt <= endDate;
      const textMatch = exp.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? -1 : 1;
      }
      if (sortBy === 'amount') {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};

// Store

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const expenses = getVisibleExpenses(state);
  console.log(expenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'rent', amount: 500, createdAt: 1236 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Two', amount: 900, createdAt: 156 })
);

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

// store.dispatch(editExpense(expenseOne.expense.id, { amount: 700 }));

// store.dispatch(setText('Re'));

// store.dispatch(setText());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

const demoState = {
  expenses: [
    {
      id: 'sadasdasd',
      description: 'short text',
      note: 'long text',
      amount: 54100,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rondom',
    sortBy: 'amount', // amount or description,
    startDate: undefined,
    endDate: undefined,
  },
};
