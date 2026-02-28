var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let ans = 0;
  while (left < right) {
    const minH = Math.min(height[left], height[right]);
    ans = Math.max(ans, minH * (right - left));
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return ans;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
