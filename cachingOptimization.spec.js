const co = require('./cachingOptimization');

const times10 = co.times10;
const memoTimes10 = co.memoTimes10;
const memoClosureTimes10 = co.memoClosureTimes10;
const memoizedTimes10 = co.memoizedTimes10;

describe('Caching Optimizations', () => {
  describe('Task 1', () => {
    it('Should return 90 when 9 passed in', () => {
      expect(times10(9)).toBe(90);
    });
  });

  describe('Task 2', () => {
    it('should calculate the value', () => {
      expect(memoTimes10(9)).toBe(90);
    });
    it('should get the cached value', () => {
      expect(memoTimes10(9)).toBe(90);
    });
  });

  describe('Task 3', () => {
    it('should calculate the value', () => {
      expect(memoClosureTimes10(9)).toBe(90)
    });
    it('should get the cached value', () => {
      expect(memoClosureTimes10(9)).toBe(90)
    });
  });

  describe('Task 4', () => {
    it('should calculate the value', () => {
      expect(memoizedTimes10(9)).toBe(90);
    });
    it('should get the cached value', () => {
      expect(memoizedTimes10(9)).toBe(90);
    });
  })
});