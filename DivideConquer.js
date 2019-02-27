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

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// TASK: Implement bubblesort
function bubbleSortBasic(list) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for(let i = 0; i < list.length; i += 1) {
    countOuter += 1;
    for(let j = 1; j < list.length; j += 1) {
      countInner += 1;
      if (list[j - 1] > list[j]) {
        countSwap += 1;
        swap(list, j - 1, j);
      }
    }
  }
  return list;
}

function bubbleSort(array) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;
  let swapped;

  do {
    countOuter++;
    swapped = false;
    for(let i = 0; i < array.length; i ++) {
      countInner++;
      if(array[i] && array[i+ 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);

  return array;
}

// TASK: Implement mergeSort
// ProTip: split the arret into halves and merge them recursively
// ProTip: return once we hit an array with a single item. That is a sorted array of size 1!
// Protip: Compare the arrays item by item and return the concatenated result.

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while( indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down.
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = {
  linearSearch,
  binarySearch,
  bubbleSortBasic,
  bubbleSort,
  mergeSort,
};