import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import {
  setEndDate,
  setStartDate,
  setText,
  sortByAmount,
  sortByDate,
} from '../actions/filters';

export class ExpenseFilters extends React.Component {
  state = {
    focusedInput: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (focusedInput) => {
    this.setState(() => ({
      focusedInput,
    }));
  };

  onTextChange = (e) => {
    this.props.setText(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    }
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              className='text-input'
              placeholder='Search expenses'
              type='text'
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className='input-group__item'>
            <select
              className='select'
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </select>
          </div>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setText(text) {
    dispatch(setText(text));
  },
  setStartDate(startDate) {
    dispatch(setStartDate(startDate));
  },
  setEndDate(endDate) {
    dispatch(setEndDate(endDate));
  },
  sortByDate() {
    dispatch(sortByDate());
  },
  sortByAmount() {
    dispatch(sortByAmount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseFilters);
