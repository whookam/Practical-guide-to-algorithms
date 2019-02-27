const dc = require('./divideConquer');

const linearSearch = dc.linearSearch;
const binarySearch = dc.binarySearch;
const bubbleSortBasic = dc.bubbleSortBasic;
const bubbleSort = dc.bubbleSort;
const mergeSort = dc.mergeSort;

const list1 = [2,6,7,90,103];
const list2 = [1,4,7, 34, 87, 235,400];
const arrayRandom = [9,2,5,6,4,3,7,10,1,8];
const arrayOrdered = [1,2,3,4,5,6,7,8,9,10];
const arrayReversed = [10,9,8,7,6,5,4,3,2,1];
const result = [1,2,3,4,5,6,7,8,9,10];


describe('Divide and Conquer', () => {
  describe('Task 1: linear search', () => {
    it('Should find the position in the array', () => {
      expect(linearSearch(list1, 90)).toBe(3);
    });
    it('Should return the position of the item', () => {
      expect(linearSearch(list2, 7)).toBe(2);
    });
  });

  describe('Task 2: Binary search', () => {
    it('should use binary search to get the item position from list 1', () => {
      expect(binarySearch(list1, 90)).toBe(3);
    });
    it('should use binary search to get the item position from list 2', () => {
      expect(binarySearch(list2, 235)).toBe(5);
    });
  });

  describe('Task 3: Bubblesort basic', () => {
    it('should sort a random array', () => {
      expect(bubbleSortBasic(arrayRandom)).toEqual(result);
    });
    it('should sort a ordered array', () => {
      expect(bubbleSortBasic(arrayOrdered)).toEqual(result);
    });
    it('should sort a reversed array', () => {
      expect(bubbleSortBasic(arrayReversed)).toEqual(result);
    });
  });
  
  describe('Task 3: Bubblesort', () => {
    it('should sort a random array', () => {
      expect(bubbleSort(arrayRandom)).toEqual(result);
    });
    it('should sort a ordered array', () => {
      expect(bubbleSort(arrayOrdered)).toEqual(result);
    });
    it('should sort a reversed array', () => {
      expect(bubbleSort(arrayReversed)).toEqual(result);
    });
  });

  describe('Task 4: Merge sort', () => {
    it('should sort a random array', () => {
      expect(mergeSort(arrayRandom)).toEqual(result);
    });
    it('should sort a ordered array', () => {
      expect(mergeSort(arrayOrdered)).toEqual(result);
    });
    it('should sort a reversed array', () => {
      expect(mergeSort(arrayReversed)).toEqual(result);
    });
  });
});
