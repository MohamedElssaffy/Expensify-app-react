import moment from 'moment';
export const defFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

export const filters = {
  text: 'bill',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(4, 'days'),
};
