var threeSum = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    const ni = nums[i];
    if (i > 0 && ni === nums[i - 1]) {
      continue;
    }
    if (ni + nums[i + 1] + nums[i + 2] > 0) {
      break;
    }
    if (ni + nums[len - 2] + nums[len - 1] < 0) {
      continue;
    }
    let j = i + 1,
      k = len - 1;
    while (j < k) {
      const s = ni + nums[j] + nums[k];
      if (s < 0) {
        j++;
      } else if (s > 0) {
        k--;
      } else {
        if (j === i + 1 || nums[j] !== nums[j - 1]) {
          ans.push([ni, nums[j], nums[k]]);
        }
        j++;
        k--;
      }
    }
  }
  return ans;
};

// console.log(threeSum([-4, -3, -2, -1, 4, 4, 5]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0]));
console.log(threeSum([1, 2, 0, 1, 0, 0, 0, 0]));
