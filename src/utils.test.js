import { shuffleArray } from './utils';

describe('shuffleArray Function Tests', () => {
  it('returns new array', () => {
    const arr = Array.from(Array(10).keys());
    const shuffled = shuffleArray(arr);
    expect(arr).not.toBe(shuffled);
  });
});
