import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import { totalAmount } from '../selectors/expense-total';

export const ExpensesSummary = (props) => (
  <div>
    <h2>
      Viewing{' '}
      {props.expenseCount === 1
        ? props.expenseCount + ' expense'
        : props.expenseCount + ' expenses'}{' '}
      totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
    </h2>
  </div>
);

const maptStateToProps = (state) => {
  const expenses = selectExpenses(state);
  return {
    expenseCount: expenses.length,
    expensesTotal: totalAmount(expenses),
  };
};

export default connect(maptStateToProps)(ExpensesSummary);
