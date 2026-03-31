var minimumRecolors = function (blocks, k) {
  let s = 0;
  let res = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === "B") {
      s += 1;
    }
    if (i < k - 1) {
      continue;
    }
    res = Math.max(res, s);
    if (blocks[i - k + 1] === "B") {
      s -= 1;
    }
  }
  return k - res;
};

console.log(minimumRecolors("WBBWWBBWBW", 7));
