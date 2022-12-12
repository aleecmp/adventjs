import { distributeGifts } from './main';

describe('Test distributeGifts function to calculate the number of gifts that the reindeer can carry ', () => {
  it('should return 2', () => {
    const result = distributeGifts(
      ['book', 'doll', 'ball'],
      ['dasher', 'dancer']
    );

    expect(result).toEqual(2);
  });

  it('should return a number', () => {
    const result = distributeGifts(
      ['book', 'doll', 'ball'],
      ['dasher', 'dancer']
    );
    expect(typeof result).toBe('number');
  });

  it('should return 1', () => {
    const result = distributeGifts(['a', 'b', 'c'], ['d', 'e']);

    expect(result).toEqual(1);
  });

  it('should return 0', () => {
    const result = distributeGifts(['videogames', 'console'], ['midu']);

    expect(result).toEqual(0);
  });

  it('should return 5', () => {
    const result = distributeGifts(
      ['game', 'videoconsole', 'computer'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ]
    );

    expect(result).toEqual(5);
  });

  it('should return 20', () => {
    const result = distributeGifts(
      ['music'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ]
    );

    expect(result).toEqual(26);
  });
});
