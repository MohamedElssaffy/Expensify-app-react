import React from 'react';
import { shallow } from 'enzyme';

import ExpenseItem from '../../components/ExpenseItem';
import expenses from '../seed-data/expenses';

test('Should render expense item', () => {
  const wrapper = shallow(<ExpenseItem {...expenses[2]} />);

  expect(wrapper).toMatchSnapshot();
});
