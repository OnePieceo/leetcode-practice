var subarraySum = function (nums, k) {
  let ans = 0;
  const preSumMap = new Map();
  preSumMap.set(0, 1);
  let preSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    preSum += num;
    if (preSumMap.has(preSum - k)) {
      ans += preSumMap.get(preSum - k);
    }
    if (preSumMap.has(preSum)) {
      preSumMap.set(preSum, preSumMap.get(preSum) + 1);
    } else {
      preSumMap.set(preSum, 1);
    }
  }
  return ans;
};

console.log(subarraySum([1, 2, 2, 0, 4, 0, -2, -1], 5));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 1, 1], 2));
