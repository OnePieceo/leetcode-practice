var rotate = function (nums, k) {
  function reverse(i, j) {
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  const len = nums.length;
  k %= len;
  reverse(0, len - 1);
  reverse(0, k - 1);
  reverse(k, len - 1);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
