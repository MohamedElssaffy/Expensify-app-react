import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className='container'>
    <div className='list-header'>
      <p className='show-for-mobile'>Expenses</p>
      <p className='show-for-desktop'>Expense</p>
      <p className='show-for-desktop'>Amount</p>
    </div>
    <div className='list-body'>
      {props.expenses.length === 0 ? (
        <div className='list-item list-item--message'>
          <span>No Expenses</span>
        </div>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state),
  };
};

export default connect(mapStateToProps)(ExpenseList);
