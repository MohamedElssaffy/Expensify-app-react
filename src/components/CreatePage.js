import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class CreatePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='container'>
            <h2 className='page-header__title'>Add Expense</h2>
          </div>
        </div>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense(expense) {
    dispatch(startAddExpense(expense));
  },
});

export default connect(undefined, mapDispatchToProps)(CreatePage);
