import { wrapping } from './main';

describe('Test wrapping function for accurately wrapping gifts', () => {
  it('should require gifts to be an array', () => {
    const gifts = 'book';

    expect(Array.isArray(gifts)).toBe(false);
  });

  it('should return an array of wrapped gifts', () => {
    const gifts = ['cat', 'game', 'socks'];
    const expected = [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******',
    ];

    expect(wrapping(gifts)).toEqual(expected);
  });

  it('should wrap a single gift correctly', () => {
    const gifts = ['midu'];
    const expected = ['******\n*midu*\n******'];

    expect(wrapping(gifts)).toEqual(expected);
  });

  it('should wrap a single-letter gift correctly', () => {
    const gifts = ['a'];
    const expected = ['***\n*a*\n***'];

    expect(wrapping(gifts)).toEqual(expected);
  });

  it('should return an empty array for an empty input', () => {
    expect(wrapping([])).toEqual([]);
  });
});
