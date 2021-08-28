import React from 'react';
import ExpenseFilters from './ExpenseFilters';
import ExpenseList from './ExpenseList';

const HomePage = () => (
  <div>
    <ExpenseFilters />
    <ExpenseList />
  </div>
);

export default HomePage;
