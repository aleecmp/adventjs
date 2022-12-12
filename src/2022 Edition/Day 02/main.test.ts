import { countHours } from './main';

describe('Test countHours function for accurate addition of extra hours for valid holidays', () => {
  it('should return a number', () => {
    const result = countHours(2023, ['01/06', '04/01', '12/25']);
    expect(typeof result).toBe('number');
  });

  it('should return 4', () => {
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toEqual(4);
  });

  it('should return 4', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25'])).toEqual(4);
  });

  it('should return 10', () => {
    expect(
      countHours(1985, [
        '01/01',
        '01/06',
        '02/02',
        '02/17',
        '02/28',
        '06/03',
        '12/06',
        '12/25',
      ])
    ).toEqual(10);
  });

  it('should return 0', () => {
    expect(countHours(2000, ['01/01'])).toBe(0);
  });
});
