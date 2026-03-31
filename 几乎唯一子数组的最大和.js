var maxSum = function (nums, m, k) {
  let map = new Map();
  let s = 0;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    if (i < k - 1) {
      continue;
    }
    if (map.size >= m) {
      ans = Math.max(ans, s);
    }
    s -= nums[i - k + 1];
    if (map.get(nums[i - k + 1]) > 1) {
      map.set(nums[i - k + 1], map.get(nums[i - k + 1]) - 1);
    } else {
      map.delete(nums[i - k + 1]);
    }
  }
  return ans;
};

console.log(maxSum([2, 6, 7, 3, 1, 7], 3, 4));
