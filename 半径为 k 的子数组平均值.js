var getAverages = function (nums, k) {
  let res = [];
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    res.push(-1);
    if (i < k * 2) {
      continue;
    }
    const ave = Math.floor(s / (k * 2 + 1));
    res[i - k] = ave;
    s -= nums[i - k * 2];
  }
  return res;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
