const recur = require('./recursion');

const reJoin = recur.joinElements;
const reLoop = recur.loopElements;

const scrambled = ['s', 'cr', 't cod', ' :) :)'];
const jointItem = 'e';

describe('Recursion sorting', () => {
  describe('Task 1', () => {
    it('Should find the secret answer', () => {
      expect(reJoin(scrambled, jointItem)).toEqual('secret code :) :)');
    });
    it('should also work with looping', () => {
      expect(reLoop(scrambled, jointItem)).toEqual('secret code :) :)');
    });
  });
});