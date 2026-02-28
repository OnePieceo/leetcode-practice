var findAnagrams = function (s, p) {
  const ans = [];
  let mapP = new Map();
  for (let i = 0; i < p.length; i++) {
    const letter = p[i];
    if (mapP.has(letter)) {
      mapP.set(letter, mapP.get(letter) + 1);
    } else {
      mapP.set(letter, 1);
    }
  }
  let range = [];

  for (let i = 0; i < s.length; i++) {
    range.push(s[i]);
    if (mapP.has(s[i])) {
      mapP.set(s[i], mapP.get(s[i]) - 1);
    }
    if (range.length < p.length) {
      continue;
    }

    if ([...mapP.values()].every((item) => item === 0)) {
      ans.push(i - p.length + 1);
    }
    if (mapP.has(s[i - p.length + 1])) {
      mapP.set(s[i - p.length + 1], mapP.get(s[i - p.length + 1]) + 1);
    }
    range = range.slice(1);
  }
  return ans;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
