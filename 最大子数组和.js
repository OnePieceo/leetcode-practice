var maxSubArray = function (nums) {
  let range = [],
    ans = nums[0],
    res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (res + num >= 0) {
      if (res < 0) {
        res = num;
      } else {
        res += num;
      }
    } else {
      res = num;
    }
    ans = Math.max(ans, res);
  }
  return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
