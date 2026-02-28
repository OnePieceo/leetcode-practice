var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sortStr = str.split("").sort().join("");
    if (map.has(sortStr)) {
      map.get(sortStr).push(str);
    } else {
      map.set(sortStr, [str]);
    }
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams([""]));
