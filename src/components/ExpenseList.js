import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No Expenses Found</p>
    ) : (
      props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state),
  };
};

export default connect(mapStateToProps)(ExpenseList);