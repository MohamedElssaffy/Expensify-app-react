import React from 'react';
import ExpenseFilters from './ExpenseFilters';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';

const HomePage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseFilters />
    <ExpenseList />
  </div>
);

export default HomePage;
