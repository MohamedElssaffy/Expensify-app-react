import React from 'react';
import { shallow } from 'enzyme';

import { CreatePage } from '../../components/CreatePage';
import expenses from '../seed-data/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<CreatePage addExpense={addExpense} history={history} />);
});

test('Should render create page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
