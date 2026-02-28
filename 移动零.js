var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }
  nums.fill(0, index);
};
