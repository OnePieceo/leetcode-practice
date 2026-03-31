var maxVowels = function (s, k) {
  let res = 0;
  let ans = 0;
  let arr = [];
  const targetArr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    arr.push(el);
    if (targetArr.includes(el)) {
      ans += 1;
      res = Math.max(res, ans);
    }
    if (i < k - 1) {
      continue;
    }
    const delLetter = arr.shift();
    if (targetArr.includes(delLetter)) {
      ans -= 1;
    }
  }
  return res;
};

console.log(maxVowels("abciiidef", 3));
