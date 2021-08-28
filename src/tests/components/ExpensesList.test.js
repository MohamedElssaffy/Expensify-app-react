import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../seed-data/expenses';

test('Should render with expenses list', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render with no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);

  expect(wrapper).toMatchSnapshot();
});
