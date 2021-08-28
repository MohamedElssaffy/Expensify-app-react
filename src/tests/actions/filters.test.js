import moment from 'moment';

import {
  setEndDate,
  setStartDate,
  setText,
  sortByDate,
  sortByAmount,
} from '../../actions/filters';

test('Should return start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0),
  });
});

test('Should return end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0),
  });
});

test('Should return text action object with default data', () => {
  const action = setText();

  expect(action).toEqual({
    type: 'SET_TEXT',
    text: '',
  });
});

test('Should return text action object with provided data', () => {
  const text = 'random text';
  const action = setText(text);

  expect(action).toEqual({
    type: 'SET_TEXT',
    text,
  });
});

test('Should return sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('Should return sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});
