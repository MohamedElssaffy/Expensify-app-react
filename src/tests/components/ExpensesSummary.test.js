import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render Expenses summary with one expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesTotal={235} expenseCount={1} />
  );

  expect(wrapper).toMatchSnapshot();
});

test('Should render Expenses summary with two expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesTotal={652} expenseCount={2} />
  );
  expect(wrapper).toMatchSnapshot();
});
