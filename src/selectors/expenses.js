// get visible expenses

export default ({ expenses, filters }) => {
  const { text = '', sortBy = 'date', startDate, endDate } = filters;

  return expenses
    .filter((exp) => {
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(exp.createdAt, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(exp.createdAt, 'day')
        : true;
      const textMatch = exp.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt > b.createdAt ? -1 : 1;
      }
      if (sortBy === 'amount') {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};
