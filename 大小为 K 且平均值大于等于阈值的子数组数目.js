var numOfSubarrays = function (arr, k, threshold) {
  let s = 0;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
    if (i < k - 1) {
      continue;
    }
    if (s >= threshold * k) {
      res += 1;
    }
    s -= arr[i - k + 1];
  }
  return res;
};
