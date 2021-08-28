import moment from 'moment';

import filterReducer from '../../reducers/filters';

test('Should set the default values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('Should set sort by amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
});

test('Should set sort by date', () => {
  const state = filterReducer(
    {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined,
    },
    { type: 'SORT_BY_DATE' }
  );

  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const text = 'any thing';
  const state = filterReducer(undefined, { type: 'SET_TEXT', text });

  expect(state.text).toBe(text);
});

test('Should set start date filter', () => {
  const date = moment(0);

  const state = filterReducer(undefined, {
    type: 'SET_START_DATE',
    date,
  });

  expect(state.startDate).toEqual(date);
});

test('Should set end date filter', () => {
  const date = moment(0);

  const state = filterReducer(undefined, {
    type: 'SET_END_DATE',
    date,
  });

  expect(state.endDate).toEqual(date);
});
