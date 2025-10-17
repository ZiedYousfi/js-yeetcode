const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  /**@type {number[]} */
  let result = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    for (let j = 0; j < nums.length; j++) {
      if (j === index) {
        continue;
      }
      const innerElement = nums[j];

      if (element + innerElement === target) {
        result.push(index);
        result.push(j);
        return result;
      }
    }
  }

  return result;
};

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
