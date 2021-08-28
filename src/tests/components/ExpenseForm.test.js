import React from 'react';
import { shallow } from 'enzyme';

import expenses from '../seed-data/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

test('Should render form with default', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render form with values', () => {
  const wrapper = shallow(<ExpenseForm {...expenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should set Error', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set description state', () => {
  const value = 'new description';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(0).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('description')).toBe(value);
});

test('Should set note state', () => {
  const value = 'New Note';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: { value },
  });

  expect(wrapper.state('note')).toBe(value);
});

test('Should set amount state with valid data', () => {
  const value = '23.55';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount state with invalid data', () => {
  const value = 'invalid data';

  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value },
  });

  expect(wrapper.state('amount').length).toBe(0);
});

test('Should submit form success', () => {
  const onSubmitSpy = jest.fn();

  const wrapper = shallow(
    <ExpenseForm {...expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  expect(wrapper.state('error').length).toBe(0);

  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note,
  });
});

test('Should set new date', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set focused state', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('focused')).toEqual(focused);
});
