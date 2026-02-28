var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (let i = 0; i < intervals.length; i++) {
    const arr = intervals[i];
    const ansLen = ans.length;
    if (ansLen && arr[0] <= ans[ansLen - 1][1]) {
      ans[ansLen - 1][1] = Math.max(arr[1], ans[ansLen - 1][1]);
    } else {
      ans.push(arr);
    }
  }
  return ans;
};

console.log(
  merge([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
  ]),
);
console.log(
  merge([
    [1, 3],
    [3, 10],
    [2, 6],
    [15, 18],
  ]),
);
