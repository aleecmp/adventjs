import { test, expect } from '@jest/globals';
import { wrapping } from './main';

test('wrapping function wraps gifts in wrapping paper', () => {
  const gifts = ['cat', 'game', 'socks'];

  const wrapped = wrapping(gifts);

  expect(wrapped).toEqual([
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******',
  ]);
});
