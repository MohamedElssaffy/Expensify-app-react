import React from 'react';
import { shallow } from 'enzyme';

import { EditPage } from '../../components/EditPage';
import expenses from '../seed-data/expenses';

let editExpense, removeExpense, history, match, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  match = { params: { id: expenses[1].id } };

  wrapper = shallow(
    <EditPage
      expense={expenses[1]}
      history={history}
      editExpense={editExpense}
      removeExpense={removeExpense}
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
  expect(editExpense).toHaveBeenLastCalledWith(match.params.id, expenses[1]);
});

test('Should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(match.params.id);
});