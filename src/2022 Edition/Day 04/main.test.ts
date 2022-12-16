import { fitsInOneBox } from './main';

describe('Test fitsInOneBox', () => {
  it('fitsInOneBox returns a boolean value', () => {
    const boxes = [
      { l: 1, w: 2, h: 3 },
      { l: 2, w: 3, h: 4 },
      { l: 3, w: 4, h: 5 },
    ];

    expect(typeof fitsInOneBox(boxes)).toBe('boolean');
  });

  it('should return false', () => {
    const boxes = [
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ];

    expect(fitsInOneBox(boxes)).toBe(false);
  });

  it('should return true', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ];

    expect(fitsInOneBox(boxes)).toBe(true);
  });

  it('should return false', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ];

    expect(fitsInOneBox(boxes)).toBe(false);
  });

  it('should return true', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ];

    expect(fitsInOneBox(boxes)).toBe(false);
  });

  it('should return false', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ];

    expect(fitsInOneBox(boxes)).toBe(true);
  });
});
