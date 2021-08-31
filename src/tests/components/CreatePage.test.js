import React from 'react';
import { shallow } from 'enzyme';

import { CreatePage } from '../../components/CreatePage';
import expenses from '../seed-data/expenses';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <CreatePage startAddExpense={startAddExpense} history={history} />
  );
});

test('Should render create page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
