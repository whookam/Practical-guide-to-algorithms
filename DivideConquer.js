// Task: Implement Linear search.

function linearSearch(list, item) {
  let index = -1;
  list.forEach((listItem,idx) => {
    if(listItem === item) {
      index = idx;
    }
  });
  return index;
}

linearSearch([2,6,7,90,103], 90);

function binarySearch(list, item) {
  let min = 0;
  let max = list.length -1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min+max) /2);

    if (list[guess] === item) {
      return guess;
    } else {
      if (list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess -1;
      }
    }
  }
  return -1;
}

// Divide and conquer
// 0. Recognize base case
// 1. Divide: Break problem down during each call
// 2. Conquer: Do work on each subset
// 3. Combine: Solutions

// merge(L, R);
//[3,27,38,43] //[9,10,82]
// initialize empty array
// compare the first index of the left array
// to the first index of the right array
// push the lower value to the empty array
// shift the array with the lower value
// repeat until both arrays are empty.

// TASK: Implement bubblesort
function bubbleSort(list) {
  return [];
}

// TASK: Implement mergeSort
// ProTip: split the arret into halves and merge them recursively
// ProTip: return once we hit an array with a single item. That is a sorted array of size 1!
// Protip: Compare the arrays item by item and return the concatenated result.

function mergeSort(list) {
  return [];
}

// Sample of arrays to sort
const arrayRandom = [9,2,5,6,4,3,7,10,1,8];
const arrayOrdered = [1,2,3,4,5,6,7,8,9,10];
const arrayReversed = [10,9,8,7,6,5,4,3,2,1];

module.exports = {
  linearSearch,
  binarySearch,
  bubbleSort,
  mergeSort,
};