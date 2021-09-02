import authReducer from '../../reducers/auth';

test('Should set default state', () => {
  const action = { type: '@@INIT' };

  const state = authReducer({}, action);

  expect(state).toEqual({});
});

test('Should set login state', () => {
  const uid = '6asd16asd16asd';
  const action = {
    type: 'LOGIN',
    uid,
  };

  const state = authReducer({}, action);

  expect(state).toEqual({ uid });
});

test('Should set logout state', () => {
  const uid = 'asud5asd464sa8';
  const action = { type: 'LOGOUT' };

  const state = authReducer({ uid }, action);

  expect(state).toEqual({});
});
