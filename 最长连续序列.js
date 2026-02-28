var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = 0;
  for (const num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let next = num + 1;
    while (set.has(next)) {
      next++;
    }
    ans = Math.max(next - num, ans);
  }
  return ans;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
