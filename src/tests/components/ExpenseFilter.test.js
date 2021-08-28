import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseFilters } from '../../components/ExpenseFilters';
import { filters, defFilters } from '../seed-data/filters';

let wrapper, setText, setStartDate, setEndDate, sortByAmount, sortByDate;

beforeEach(() => {
  setText = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();

  wrapper = shallow(
    <ExpenseFilters
      filters={defFilters}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setText={setText}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test('Should render expense filter with default filters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense filter with filters provided', () => {
  wrapper.setProps({ filters });
  expect(wrapper).toMatchSnapshot();
});

test('Should handle on date change ', () => {
  const startDate = filters.startDate;
  const endDate = filters.endDate;
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle on text change', () => {
  const value = 'some thing';
  wrapper.setProps({ filters });
  wrapper.find('input').at(0).simulate('change', { target: { value } });

  expect(setText).toHaveBeenLastCalledWith(value);
});

test('Should handle sort by date', () => {
  wrapper.setProps({ filters });

  wrapper
    .find('select')
    .simulate('change', { target: { value: defFilters.sortBy } });
  expect(sortByDate).toHaveBeenCalled();
});

test('Should handle sort by amount', () => {
  wrapper
    .find('select')
    .simulate('change', { target: { value: filters.sortBy } });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle on focused change', () => {
  const value = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(value);

  expect(wrapper.state('focusedInput')).toBe(value);
});
