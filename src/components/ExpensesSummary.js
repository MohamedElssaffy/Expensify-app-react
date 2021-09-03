import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

import selectExpenses from '../selectors/expenses';
import { totalAmount } from '../selectors/expense-total';

export const ExpensesSummary = (props) => (
  <div className='page-header'>
    <div className='container'>
      <h2 className='page-header__title'>
        Viewing <span>{props.expenseCount}</span>
        {props.expenseCount === 1 ? ' expense ' : ' expenses '}
        totalling{' '}
        <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span>
      </h2>
      <div className='page-header__actions'>
        <Link to='/create' className='btn'>
          Add Expense
        </Link>
      </div>
    </div>
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
