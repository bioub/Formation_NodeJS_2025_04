import { v4 } from 'uuid';

const tokens = ['d4973653-9895-4123-a7dd-3e1387d0fbde'];

const user = {
  username: 'romain',
  password: '123456',
};

/**
 *
 * @param {object} credentials
 * @param {string} credentials.username
 * @param {string} credentials.password
 */
function login(credentials) {
  if (
    credentials.username === user.username &&
    credentials.password === user.password
  ) {
    const token = v4();
    tokens.push(token);
    return Promise.resolve(token);
  }

  return Promise.resolve(null);
}

const _login = login;
export { _login as login };
const _tokens = tokens;
export { _tokens as tokens };
