// Task: rewrite this function so that it uses a loop rather then recursion

function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];
    
    if(index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }
  return recurse(0, '');
}

joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');

// ~~~~~~~~~~~ my answer ~~~~~~~~~~
loopElements(['s', 'cr', 't cod', ' :) :)'], 'e');

function loopElements(array, joinItem) {
  let resultSoFar = '';
  for(let i = 0; i < array.length; i ++) {
    resultSoFar += array[i] + (i === array.length -1 ? '' : joinItem);
  }
  return resultSoFar;
}

module.exports = {
  joinElements,
  loopElements
};