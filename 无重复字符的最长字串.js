var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let range = [];
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (range.includes(letter)) {
      const index = range.indexOf(letter);
      ans = Math.max(ans, range.length);
      range = range.slice(index + 1);
    }
    range.push(letter);
  }
  return Math.max(ans, range.length);
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
