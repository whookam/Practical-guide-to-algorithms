// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => {
  return n * 10;
};

// Task 2: Use an object to cache the results of your times10  function.
// Protip 1: Create a function that checks if the value for n has been calculated before.
// Protip 2: If the value for n has not been calculated, calculate and then save the result in the cach object.

const cache = {};
const memoTimes10 = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = times10(n);
    return cache[n];
  }
};

// Task 3: Clean up your global scope by moving your cache inside your function.
// Protip: Use a closure to return a function that you can call later.
const memoizedClosureTimes10 = (n) => {
  const cache = {};
  function memoTimes10(n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n * 10;
      return cache[n];
    }
  }
  return memoTimes10;
};

const memoClosureTimes10 = memoizedClosureTimes10();

// Task 4: Make your memo function generic and accept the times10 functrion as a callback rather than defining the n * 10 login inside the if/else of pulling it in from the gloval scipe.

// Protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cacje from the previous example.
const memoize = (cb) => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = cb(n);
      return cache[n];
    }
  }
}

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);

module.exports = {
  times10,
  memoTimes10,
  memoClosureTimes10,
  memoizedTimes10
}
