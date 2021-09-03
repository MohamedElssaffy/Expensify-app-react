import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditPage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.match.params.id, expense);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.startRemoveExpense(this.props.expense.id);

    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='container'>
            <h2 className='page-header__title'>Edit Expense</h2>
          </div>
        </div>
        <ExpenseForm onSubmit={this.onSubmit} {...this.props.expense} />
        <div className='container'>
          <button className='btn btn--remove' onClick={this.onClick}>
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((exp) => exp.id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditExpense(id, expense) {
    dispatch(startEditExpense(id, expense));
  },
  startRemoveExpense(id) {
    dispatch(startRemoveExpense({ id }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
