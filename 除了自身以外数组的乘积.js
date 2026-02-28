var productExceptSelf = function (nums) {
  const ans = [];
  const len = nums.length;
  const preArr = [];
  const sufArr = new Array(len);
  preArr[0] = 1;
  sufArr[len - 1] = 1;
  for (let i = 1; i < len; i++) {
    preArr[i] = preArr[i - 1] * nums[i - 1];
  }
  for (let i = len - 2; i >= 0; i--) {
    sufArr[i] = sufArr[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < len; i++) {
    ans[i] = preArr[i] * sufArr[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
