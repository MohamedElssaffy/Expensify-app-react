import { login, logout } from '../../actions/auth';

test('Should return login action object', () => {
  const uid = 'as5dd41sad5a';
  const action = login(uid);

  expect(action).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('Should return logout action object', () => {
  const action = logout();

  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
