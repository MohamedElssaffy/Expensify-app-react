import React from 'react';
import { shallow } from 'enzyme';

import { EditPage } from '../../components/EditPage';
import expenses from '../seed-data/expenses';

let startEditExpense, startRemoveExpense, history, match, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  match = { params: { id: expenses[1].id } };

  wrapper = shallow(
    <EditPage
      expense={expenses[1]}
      history={history}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      match={match}
    />
  );
});

test('Should render Edit page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle edite expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(
    match.params.id,
    expenses[1]
  );
});

test('Should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(match.params.id);
});
