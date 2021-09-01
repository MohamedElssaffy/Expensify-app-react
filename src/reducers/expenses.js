// Expenses Reducer

const defaultExpState = [];

export default (state = defaultExpState, action) => {
  switch (action.type) {
    case 'SET_EXPENSES':
      return action.expenses;
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((exp) => {
        if (exp.id === action.id) {
          return {
            ...exp,
            ...action.updates,
          };
        }
        return exp;
      });
    default:
      return state;
  }
};
