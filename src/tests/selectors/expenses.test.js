import moment from 'moment';

import selectExpenses from '../../selectors/expenses';
import expenses from '../seed-data/expenses';

test('Should filter by text value', () => {
  const filters = {
    text: 'e',
  };

  const result = selectExpenses({ expenses, filters });
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by start date', () => {
  const filters = {
    startDate: moment(0),
  };

  const result = selectExpenses({ expenses, filters });

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('Should filter by end date', () => {
  const filters = {
    endDate: moment(0),
  };

  const result = selectExpenses({ expenses, filters });

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should filter bu date', () => {
  const filters = {
    sortBy: 'date',
  };

  const result = selectExpenses({ expenses, filters });

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('Should filter bu amount', () => {
  const filters = {
    sortBy: 'amount',
  };

  const result = selectExpenses({ expenses, filters });

  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
